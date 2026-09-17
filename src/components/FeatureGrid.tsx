import React from 'react';
import { 
  HeartPulse, 
  Wallet, 
  FileText, 
  Flame, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export const FeatureGrid: React.FC = () => {
  return (
    <section id="features" className="py-20 md:py-28 bg-slate-50 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-700 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>FOUR POWERFUL MODULES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading">
            Four essential tools, unified in one real app.
          </h2>

          <p className="text-lg text-slate-600 font-normal leading-relaxed">
            Take a look at the actual Lifio Android application interface. Health vitals, habit streak tracking, daily notes, and expense budgets—all designed for speed, clarity, and privacy.
          </p>
        </div>

        {/* 4 Feature Showcase Sections */}
        <div className="space-y-16 md:space-y-20">
          
          {/* Feature 1: Health Monitoring (health_highres.png - Emerald Accent) */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 md:p-12 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold">
                    <HeartPulse className="w-4 h-4 text-emerald-600" aria-hidden="true" />
                    <span>Health Monitoring</span>
                  </div>
                  <span className="text-xs font-extrabold text-slate-400 font-heading">MODULE 01</span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-heading leading-tight">
                    Vital Stats & Activity Metrics
                  </h3>
                  <p className="text-base text-slate-600 mt-3 leading-relaxed">
                    Monitor your daily health score, physical movement, sleep stages, and heart rate metrics in one clean overview with zero cloud telemetry or health data selling.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="bg-emerald-50/60 p-3.5 rounded-2xl border border-emerald-100">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block">Daily Wellness Score</span>
                    <span className="text-2xl font-black text-slate-900">94 / 100</span>
                  </div>
                  <div className="bg-emerald-50/60 p-3.5 rounded-2xl border border-emerald-100">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block">Step Goal</span>
                    <span className="text-2xl font-black text-slate-900">8,420 steps</span>
                  </div>
                </div>

                <ul className="space-y-3 pt-2 text-sm font-semibold text-slate-700">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" aria-hidden="true" />
                    <span>Daily wellness score & step activity metrics</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" aria-hidden="true" />
                    <span>Heart rate BPM and sleep duration logging</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" aria-hidden="true" />
                    <span>100% local, private health monitoring</span>
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-6 flex justify-center">
                <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
                  <img 
                    src="/health_highres.png" 
                    alt="Health Monitoring Feature Screenshot"
                    className="w-full h-auto rounded-2xl shadow-lg border border-slate-200/90 transition-transform duration-300 hover:scale-[1.01]"
                    loading="lazy"
                  />
                </div>
              </div>

            </div>
          </div>

          {/* Feature 2: Habits (habits_highres.png - Blue Accent) */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 md:p-12 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              <div className="lg:col-span-6 order-2 lg:order-1 flex justify-center">
                <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
                  <img 
                    src="/habits_highres.png" 
                    alt="Habit Tracking Feature Screenshot"
                    className="w-full h-auto rounded-2xl shadow-lg border border-slate-200/90 transition-transform duration-300 hover:scale-[1.01]"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
                    <Flame className="w-4 h-4 text-blue-600" aria-hidden="true" />
                    <span>Habits</span>
                  </div>
                  <span className="text-xs font-extrabold text-slate-400 font-heading">MODULE 02</span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-heading leading-tight">
                    Habit Tracking & Streak Counters
                  </h3>
                  <p className="text-base text-slate-600 mt-3 leading-relaxed">
                    Build consistency with custom daily routines, visual streak tracking, completion calendars, and zero-stress local notifications.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="bg-blue-50/60 p-3.5 rounded-2xl border border-blue-100">
                    <span className="text-[10px] font-bold text-blue-700 uppercase tracking-wider block">Active Streak</span>
                    <span className="text-2xl font-black text-slate-900">45 Days 🔥</span>
                  </div>
                  <div className="bg-blue-50/60 p-3.5 rounded-2xl border border-blue-100">
                    <span className="text-[10px] font-bold text-blue-700 uppercase tracking-wider block">Daily Routines</span>
                    <span className="text-2xl font-black text-slate-900">100% Offline</span>
                  </div>
                </div>

                <ul className="space-y-3 pt-2 text-sm font-semibold text-slate-700">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" aria-hidden="true" />
                    <span>Daily routine completion & streak counters</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" aria-hidden="true" />
                    <span>Custom schedule frequency (daily, weekly, custom)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" aria-hidden="true" />
                    <span>Zero behavioral profiling or external tracking</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>

          {/* Feature 3: Notes Making (notes_highres.png - Amber Accent) */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 md:p-12 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold">
                    <FileText className="w-4 h-4 text-amber-600" aria-hidden="true" />
                    <span>Notes Making</span>
                  </div>
                  <span className="text-xs font-extrabold text-slate-400 font-heading">MODULE 03</span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-heading leading-tight">
                    Notes & Thought Organization
                  </h3>
                  <p className="text-base text-slate-600 mt-3 leading-relaxed">
                    Capture ideas quickly with clean note cards, instant keyword search, tag organization, checklist items, and pinned priority notes.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="bg-amber-50/60 p-3.5 rounded-2xl border border-amber-100">
                    <span className="text-[10px] font-bold text-amber-700 uppercase tracking-wider block">Organization</span>
                    <span className="text-2xl font-black text-slate-900">Tags & Search</span>
                  </div>
                  <div className="bg-amber-50/60 p-3.5 rounded-2xl border border-amber-100">
                    <span className="text-[10px] font-bold text-amber-700 uppercase tracking-wider block">Privacy</span>
                    <span className="text-2xl font-black text-slate-900">Encrypted DB</span>
                  </div>
                </div>

                <ul className="space-y-3 pt-2 text-sm font-semibold text-slate-700">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0" aria-hidden="true" />
                    <span>Clean, organized note cards with quick search</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0" aria-hidden="true" />
                    <span>Tagging system & interactive checklists</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0" aria-hidden="true" />
                    <span>Encrypted local database storage</span>
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-6 flex justify-center">
                <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
                  <img 
                    src="/notes_highres.png" 
                    alt="Notes Making Feature Screenshot"
                    className="w-full h-auto rounded-2xl shadow-lg border border-slate-200/90 transition-transform duration-300 hover:scale-[1.01]"
                    loading="lazy"
                  />
                </div>
              </div>

            </div>
          </div>

          {/* Feature 4: Expense Tracker / Wallet (expense_highres.png - Violet Accent) */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 md:p-12 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              <div className="lg:col-span-6 order-2 lg:order-1 flex justify-center">
                <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
                  <img 
                    src="/expense_highres.png" 
                    alt="Expense Tracker Feature Screenshot"
                    className="w-full h-auto rounded-2xl shadow-lg border border-slate-200/90 transition-transform duration-300 hover:scale-[1.01]"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-50 border border-violet-200 text-violet-700 text-xs font-bold">
                    <Wallet className="w-4 h-4 text-violet-600" aria-hidden="true" />
                    <span>Expense Tracker / Wallet</span>
                  </div>
                  <span className="text-xs font-extrabold text-slate-400 font-heading">MODULE 04</span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-heading leading-tight">
                    Spending Overview & Budgets
                  </h3>
                  <p className="text-base text-slate-600 mt-3 leading-relaxed">
                    Track daily spending, manage category budgets, monitor financial accounts, and view cash flow stats with full offline privacy.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="bg-violet-50/60 p-3.5 rounded-2xl border border-violet-100">
                    <span className="text-[10px] font-bold text-violet-700 uppercase tracking-wider block">Monthly Budget</span>
                    <span className="text-2xl font-black text-slate-900">$1,450 / $2k</span>
                  </div>
                  <div className="bg-violet-50/60 p-3.5 rounded-2xl border border-violet-100">
                    <span className="text-[10px] font-bold text-violet-700 uppercase tracking-wider block">Bank Login</span>
                    <span className="text-2xl font-black text-slate-900">Zero Needed</span>
                  </div>
                </div>

                <ul className="space-y-3 pt-2 text-sm font-semibold text-slate-700">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-violet-600 flex-shrink-0" aria-hidden="true" />
                    <span>Categorized expense logging & monthly budgets</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-violet-600 flex-shrink-0" aria-hidden="true" />
                    <span>Multi-wallet tracking & cash flow breakdowns</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-violet-600 flex-shrink-0" aria-hidden="true" />
                    <span>Zero bank connection required (privacy-first)</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FeatureGrid;


