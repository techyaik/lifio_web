import React from 'react';
import { 
  Play, 
  CheckCircle2, 
  TrendingUp,
  Sparkles,
  Lock,
  Zap,
  Shield
} from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-8 pb-16 md:pt-16 md:pb-24 bg-white overflow-hidden">
      {/* Background Decorator Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-slate-50 to-transparent pointer-events-none -z-10" />
      <div className="absolute -top-24 right-10 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 -left-20 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 md:space-y-16">
        
        {/* Side-by-Side 2-Column Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Copy & Store CTAs */}
          <div className="lg:col-span-6 text-center lg:text-left space-y-6">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>100% OFFLINE & LOCAL-FIRST TRACKER</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            </div>

            {/* Main H1 Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] font-heading">
              Master your day, your health, and your wealth <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600">in one place.</span>
            </h1>

            {/* Subheadline Copy */}
            <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Replace four scattered apps with one fast, unified workspace. Track daily vitals, log spending, write journal notes, and build habit streaks with 100% local privacy.
            </p>

            {/* Download Button Row (Google Play Store CTA) */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              
              {/* Google Play Store */}
              <a
                href="https://play.google.com/store/apps"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-slate-900/10 hover:shadow-slate-900/20 active:scale-98 transition-all group"
              >
                <Play className="w-6 h-6 text-emerald-400 fill-emerald-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div className="text-left leading-tight">
                  <div className="text-[10px] text-slate-300 font-medium uppercase tracking-wider">Get it on</div>
                  <div className="text-lg font-extrabold text-white">Google Play</div>
                </div>
              </a>

            </div>

            {/* Micro Trust Indicators */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>100% Free & Accountless</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Lock className="w-4 h-4 text-emerald-600" />
                <span>Zero Cloud Sync</span>
              </div>
              <div className="flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-emerald-600" />
                <span>4.9 ★ User Rating</span>
              </div>
            </div>

          </div>

          {/* Right Column (Aside): Hero Featured Image Showcase */}
          <div id="download" className="lg:col-span-6 flex justify-center">
            <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-white shadow-xl border border-slate-200/90 transition-transform hover:scale-[1.005] duration-300">
              <img 
                src="/hero_highres.png" 
                alt="Lifio Mobile App - Today Overview, Health Vitals, Expense Tracker, Habits & Notes Featured Image" 
                width={1280}
                height={625}
                className="w-full h-auto rounded-2xl sm:rounded-3xl object-contain shadow-sm"
              />
            </div>
          </div>

        </div>

        {/* Bento Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          
          <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200/90 shadow-sm flex items-center gap-4 hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 font-bold">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Instant Speed</div>
              <div className="text-lg font-extrabold text-slate-900 font-heading">Sub-10ms App Launch</div>
            </div>
          </div>

          <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200/90 shadow-sm flex items-center gap-4 hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 font-bold">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Data Privacy</div>
              <div className="text-lg font-extrabold text-slate-900 font-heading">Local SQLite Sandbox</div>
            </div>
          </div>

          <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200/90 shadow-sm flex items-center gap-4 hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-violet-100 text-violet-700 flex items-center justify-center flex-shrink-0 font-bold">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">4 Apps in 1</div>
              <div className="text-lg font-extrabold text-slate-900 font-heading">Zero Subscription Fees</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;




