import archive from '@phosphor-icons/core/regular/archive.svg?raw';
import arrowClockwise from '@phosphor-icons/core/regular/arrow-clockwise.svg?raw';
import arrowRight from '@phosphor-icons/core/regular/arrow-right.svg?raw';
import arrowUpRight from '@phosphor-icons/core/regular/arrow-up-right.svg?raw';
import bell from '@phosphor-icons/core/regular/bell.svg?raw';
import bug from '@phosphor-icons/core/regular/bug.svg?raw';
import calendarBlank from '@phosphor-icons/core/regular/calendar-blank.svg?raw';
import caretDown from '@phosphor-icons/core/regular/caret-down.svg?raw';
import chartBar from '@phosphor-icons/core/regular/chart-bar.svg?raw';
import chartLineUp from '@phosphor-icons/core/regular/chart-line-up.svg?raw';
import checkBold from '@phosphor-icons/core/bold/check-bold.svg?raw';
import checkCircleFill from '@phosphor-icons/core/fill/check-circle-fill.svg?raw';
import checkCircle from '@phosphor-icons/core/regular/check-circle.svg?raw';
import circleHalf from '@phosphor-icons/core/regular/circle-half.svg?raw';
import cloudSlash from '@phosphor-icons/core/regular/cloud-slash.svg?raw';
import deviceMobile from '@phosphor-icons/core/regular/device-mobile.svg?raw';
import downloadSimple from '@phosphor-icons/core/regular/download-simple.svg?raw';
import drop from '@phosphor-icons/core/regular/drop.svg?raw';
import envelope from '@phosphor-icons/core/regular/envelope.svg?raw';
import eyeSlash from '@phosphor-icons/core/regular/eye-slash.svg?raw';
import fileText from '@phosphor-icons/core/regular/file-text.svg?raw';
import fingerprint from '@phosphor-icons/core/regular/fingerprint.svg?raw';
import flower from '@phosphor-icons/core/regular/flower.svg?raw';
import googlePlayLogo from '@phosphor-icons/core/fill/google-play-logo-fill.svg?raw';
import heartFill from '@phosphor-icons/core/fill/heart-fill.svg?raw';
import heart from '@phosphor-icons/core/regular/heart.svg?raw';
import houseFill from '@phosphor-icons/core/fill/house-fill.svg?raw';
import house from '@phosphor-icons/core/regular/house.svg?raw';
import lightbulb from '@phosphor-icons/core/regular/lightbulb.svg?raw';
import list from '@phosphor-icons/core/regular/list.svg?raw';
import listChecks from '@phosphor-icons/core/regular/list-checks.svg?raw';
import lock from '@phosphor-icons/core/regular/lock.svg?raw';
import magnifyingGlass from '@phosphor-icons/core/regular/magnifying-glass.svg?raw';
import moon from '@phosphor-icons/core/regular/moon.svg?raw';
import notebookFill from '@phosphor-icons/core/fill/notebook-fill.svg?raw';
import notebook from '@phosphor-icons/core/regular/notebook.svg?raw';
import pill from '@phosphor-icons/core/regular/pill.svg?raw';
import question from '@phosphor-icons/core/regular/question.svg?raw';
import repeat from '@phosphor-icons/core/regular/repeat.svg?raw';
import shieldCheck from '@phosphor-icons/core/regular/shield-check.svg?raw';
import smiley from '@phosphor-icons/core/regular/smiley.svg?raw';
import sparkle from '@phosphor-icons/core/regular/sparkle.svg?raw';
import sun from '@phosphor-icons/core/regular/sun.svg?raw';
import tag from '@phosphor-icons/core/regular/tag.svg?raw';
import translate from '@phosphor-icons/core/regular/translate.svg?raw';
import wallet from '@phosphor-icons/core/regular/wallet.svg?raw';
import wifiSlash from '@phosphor-icons/core/regular/wifi-slash.svg?raw';
import x from '@phosphor-icons/core/regular/x.svg?raw';

/**
 * The site's semantic icon names, drawn by Phosphor like the app (regular weight; `fill` for the
 * active tab and solid states). Pages use these names, never a Phosphor file directly.
 */
export const iconGlyphs = {
  'arrow-right': arrowRight,
  'arrow-up-right': arrowUpRight,
  'chevron-down': caretDown,
  check: checkBold,
  'check-circle': checkCircle,
  'check-circle-fill': checkCircleFill,
  close: x,
  menu: list,
  refresh: arrowClockwise,

  'theme-light': sun,
  'theme-dark': moon,
  'theme-system': circleHalf,

  today: house,
  'today-active': houseFill,
  habits: checkCircle,
  'habits-active': checkCircleFill,
  health: heart,
  'health-active': heartFill,
  notes: notebook,
  'notes-active': notebookFill,

  mood: smiley,
  water: drop,
  sleep: moon,
  energy: sparkle,
  reminders: bell,
  lock,
  fingerprint,
  backup: downloadSimple,
  export: fileText,
  checklist: listChecks,
  tag,
  search: magnifyingGlass,
  calendar: calendarBlank,
  chart: chartBar,
  insights: chartLineUp,
  wallet,
  medicine: pill,
  cycle: flower,
  recurring: repeat,
  archive,
  languages: translate,

  privacy: shieldCheck,
  phone: deviceMobile,
  'no-cloud': cloudSlash,
  offline: wifiSlash,
  hidden: eyeSlash,
  email: envelope,
  bug,
  idea: lightbulb,
  help: question,
  'google-play': googlePlayLogo,
} as const;

export type IconName = keyof typeof iconGlyphs;
