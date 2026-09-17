import React from 'react';
import { Mail, Lock, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 md:py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <a href="/" className="flex items-center gap-2.5 group">
              <img 
                src="/lifio-icon.png" 
                alt="Lifio App Icon" 
                width={32} 
                height={32} 
                className="h-8 w-8 rounded-xl object-contain shadow-sm group-hover:scale-105 transition-transform" 
              />
              <span className="text-xl font-extrabold tracking-tight text-white font-heading">
                lifio<span className="text-emerald-400">.</span>
              </span>
            </a>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Master your day, your health, and your wealth in one place. Replace four separate tools with one unified, offline personal dashboard.
            </p>

            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
              <Lock className="w-3.5 h-3.5" />
              <span>100% Local On-Device Database Sandbox</span>
            </div>
          </div>

          {/* Quick Links Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-xs font-semibold">
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Features Overview
                </a>
              </li>
              <li>
                <a href="#benefits" className="hover:text-white transition-colors">
                  Why Lifio
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-white transition-colors">
                  Privacy & Security
                </a>
              </li>
              <li>
                <a 
                  href="https://play.google.com/store/apps" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors"
                >
                  Download Mobile App
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Support Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Support & Legal</h4>
            <ul className="space-y-2 text-xs font-semibold">
              <li>
                <a href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition-colors">
                  Contact Support
                </a>
              </li>
              <li className="pt-1">
                <a
                  href="mailto:imran@idexa.app"
                  className="inline-flex items-center gap-2 text-xs text-emerald-400 hover:text-emerald-300 font-bold"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>imran@idexa.app</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-500">
          <div>
            © {new Date().getFullYear()} lifio. All rights reserved. Architected for local-first privacy.
          </div>
          <div className="flex items-center gap-1">
            <span>Crafted for daily focus & clarity</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
