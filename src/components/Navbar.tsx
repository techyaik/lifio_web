import React, { useState } from 'react';
import { Menu, X, Download } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand Logo */}
          <a href="/" className="flex items-center gap-2.5 group">
            <img 
              src="/lifio-icon.png" 
              alt="Lifio App Icon" 
              width={36} 
              height={36} 
              className="h-9 w-9 rounded-xl object-contain shadow-sm group-hover:scale-105 transition-transform" 
            />
            <span className="text-xl font-extrabold tracking-tight text-slate-900 font-heading">
              lifio<span className="text-emerald-600">.</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a 
              href="/#features" 
              className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
            >
              Features
            </a>
            <a 
              href="/#benefits" 
              className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
            >
              Why Lifio
            </a>
            <a 
              href="/privacy" 
              className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
            >
              Privacy & Security
            </a>
          </nav>

          {/* Desktop Action CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="https://play.google.com/store/apps" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-md shadow-slate-900/10 hover:shadow-slate-900/20 active:scale-98 transition-all"
            >
              <Download className="w-4 h-4 text-emerald-400" />
              <span>Download App</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 shadow-xl">
          <a
            href="/#features"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-slate-900"
          >
            Features
          </a>
          <a
            href="/#benefits"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-slate-900"
          >
            Why Lifio
          </a>
          <a
            href="/privacy"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-slate-900"
          >
            Privacy & Security
          </a>
          <div className="pt-2">
            <a
              href="https://play.google.com/store/apps"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-slate-900 text-white px-5 py-3 rounded-xl font-bold shadow-md"
            >
              <Download className="w-4 h-4 text-emerald-400" />
              <span>Download App</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
