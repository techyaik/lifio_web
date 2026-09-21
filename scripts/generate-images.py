"""
Generates the website's raster images: the PNG favicon, the Apple touch icon and the social card.

The mark is "Habit Steps", the app icon, drawn from the same 1024-grid geometry as public/favicon.svg
(which in turn matches lifio-app/scripts/generate-icons.py). The social card's text uses Figtree from
the font file Astro downloads on build.

Run:  npm run build && python3 scripts/generate-images.py      (needs Pillow: pip install pillow)
"""
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
PUBLIC = ROOT / 'public'
SS = 4  # draw at 4x, then downsample: smooth edges

SKY_FROM = (0x26, 0x77, 0x9F)  # bottom-left
SKY_TO = (0x12, 0x58, 0x7F)    # top-right

# Habit Steps on the 1024 grid: (x, y, opacity) per tile, then the dot.
TILES = [(256.1, 634.4, 0.59), (411.4, 479.2, 0.8), (411.4, 634.4, 0.8), (566.6, 324.0, 1), (566.6, 479.2, 1), (566.6, 634.4, 1)]
TILE, TILE_R = 123.3, 31.0
DOT = (628.2, 231.8, 47.5)
CIRCLES = [(881, 123, 430, 0.13), (973, 901, 348, 0.10)]


def gradient(w: int, h: int) -> Image.Image:
    """Bottom-left to top-right, like the app's hero card. Drawn small, then scaled: it is smooth."""
    small = Image.new('RGB', (64, 64))
    px = small.load()
    for y in range(64):
        for x in range(64):
            t = (x + (63 - y)) / 126
            px[x, y] = tuple(round(SKY_FROM[i] + (SKY_TO[i] - SKY_FROM[i]) * t) for i in range(3))
    return small.resize((w, h), Image.BILINEAR).convert('RGBA')


def white(alpha: float) -> tuple[int, int, int, int]:
    return (255, 255, 255, round(255 * alpha))


def mark(size: int, rounded: bool) -> Image.Image:
    """The app icon at `size` px. `rounded` clips it to the icon's squircle (22.5 % corners)."""
    s = size * SS
    k = s / 1024
    img = gradient(s, s)
    layer = Image.new('RGBA', (s, s), (0, 0, 0, 0))
    d = ImageDraw.Draw(layer)
    for cx, cy, r, a in CIRCLES:
        d.ellipse([(cx - r) * k, (cy - r) * k, (cx + r) * k, (cy + r) * k], fill=white(a))
    img = Image.alpha_composite(img, layer)
    glyph = Image.new('RGBA', (s, s), (0, 0, 0, 0))
    d = ImageDraw.Draw(glyph)
    for x, y, a in TILES:
        tile = Image.new('RGBA', (s, s), (0, 0, 0, 0))
        ImageDraw.Draw(tile).rounded_rectangle([x * k, y * k, (x + TILE) * k, (y + TILE) * k], radius=TILE_R * k, fill=white(a))
        glyph = Image.alpha_composite(glyph, tile)
    cx, cy, r = DOT
    ImageDraw.Draw(glyph).ellipse([(cx - r) * k, (cy - r) * k, (cx + r) * k, (cy + r) * k], fill=white(1))
    img = Image.alpha_composite(img, glyph)
    if rounded:
        mask = Image.new('L', (s, s), 0)
        ImageDraw.Draw(mask).rounded_rectangle([0, 0, s - 1, s - 1], radius=s * 0.225, fill=255)
        img.putalpha(mask)
    return img.resize((size, size), Image.LANCZOS)


def figtree(size: int, weight: int) -> ImageFont.FreeTypeFont:
    files = sorted((ROOT / '.astro' / 'fonts').glob('font-figtree-*.woff2'))
    if not files:
        raise SystemExit('Figtree not found: run `npm run build` first, so Astro downloads it.')
    font = ImageFont.truetype(str(files[0]), size)
    font.set_variation_by_axes([weight])
    return font


def social_card() -> Image.Image:
    """1200 x 630: the sky gradient, the mark, the name and the one-liner."""
    w, h = 1200, 630
    card = gradient(w, h)
    layer = Image.new('RGBA', (w, h), (0, 0, 0, 0))
    d = ImageDraw.Draw(layer)
    d.ellipse([820, -260, 1420, 340], fill=white(0.10))
    d.ellipse([-220, 380, 300, 900], fill=white(0.07))
    card = Image.alpha_composite(card, layer)

    icon = mark(168, rounded=True)
    card.alpha_composite(icon, (96, 96))

    d = ImageDraw.Draw(card)
    d.text((96, 318), 'Lifio', font=figtree(112, 700), fill=white(1))
    d.text((96, 448), 'Small daily victories, kept on your phone.', font=figtree(44, 600), fill=white(0.92))
    d.text((96, 516), 'Private daily check-in for Android · No account · No ads', font=figtree(28, 500), fill=white(0.75))
    return card.convert('RGB')


def main() -> None:
    mark(32, rounded=True).save(PUBLIC / 'favicon-32.png')
    # iOS rounds the touch icon itself, so it is full-bleed.
    mark(180, rounded=False).convert('RGB').save(PUBLIC / 'apple-touch-icon.png')
    social_card().save(PUBLIC / 'og-image.png', optimize=True)
    print('Images written to', PUBLIC)


if __name__ == '__main__':
    main()
