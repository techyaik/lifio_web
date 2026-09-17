import React from 'react';
import { Zap, Battery, Layers, Check, X, Sparkles } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const comparisonItems = [
    {
      feature: 'App Storage & Overhead',
      separate: '4 separate apps (400 MB+ total)',
      lifio: '1 ultra-light unified app (< 25 MB)',
      highlight: true
    },
    {
      feature: 'Battery & RAM Consumption',
      separate: '4 background sync services draining battery',
      lifio: 'Single local process, 90% less RAM',
      highlight: true
    },
    {
      feature: 'Account Registration & Logins',
      separate: '4 logins, passwords & email verifications',
      lifio: 'Zero accounts required. Instant launch',
      highlight: false
    },
    {
      feature: 'Data Privacy & Telemetry',
      separate: 'Multiple cloud databases & ad trackers',
      lifio: '100% on-device SQLite database',
      highlight: true
    },
    {
      feature: 'Subscription Costs',
      separate: '$15–$30/month across multiple SaaS apps',
      lifio: '100% Free with zero subscription traps',
      highlight: false
    }
  ];

  return (
    <section id="benefits" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700 shadow-sm">
            <Zap className="w-3.5 h-3.5 text-emerald-600" />
            <span>UNMATCHED EFFICIENCY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading">
            Why replace 4 separate apps with Lifio?
          </h2>

          <p className="text-lg text-slate-600 font-normal leading-relaxed">
            Running separate tools for Health, Expenses, Notes, and Habits slows down your phone, drains your battery, and splinters your data. Lifio simplifies everything.
          </p>
        </div>

        {/* Benefits Bento Cards Row (Speed, Battery, Clarity) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100/80 text-emerald-700 flex items-center justify-center font-bold">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 font-heading">
              Instant Speed & Launch
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              Opens in milliseconds. Log steps, daily spending, or quick note ideas without waiting for cloud sync loaders or splash screens.
            </p>
          </div>

          <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-100/80 text-blue-700 flex items-center justify-center font-bold">
              <Battery className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 font-heading">
              Maximum Battery Health
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              Saves up to 90% background RAM and battery cycles by eliminating multiple background telemetry services and ad trackers.
            </p>
          </div>

          <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-violet-100/80 text-violet-700 flex items-center justify-center font-bold">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 font-heading">
              Unified Daily Clarity
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              View your vitals score, spending budget, pinned notes, and active habit streaks on one clean daily dashboard overview.
            </p>
          </div>

        </div>

        {/* Detailed Comparison Matrix Bento Box */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="bg-slate-900 p-6 sm:p-8 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-1">Direct Comparison</span>
              <h3 className="text-2xl font-extrabold font-heading text-white">4 Separate Apps vs. Lifio</h3>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-slate-800 rounded-full border border-slate-700 text-xs text-slate-300 font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Tested on Android 14</span>
            </div>
          </div>

          <div className="divide-y divide-slate-100">
            {comparisonItems.map((item, idx) => (
              <div key={idx} className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center hover:bg-slate-50/70 transition-colors">
                
                <div className="md:col-span-4 font-extrabold text-slate-900 text-sm sm:text-base font-heading">
                  {item.feature}
                </div>

                {/* 4 Separate Apps */}
                <div className="md:col-span-4 flex items-center gap-2 text-xs sm:text-sm text-slate-500 font-medium">
                  <div className="w-5 h-5 rounded-full bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0">
                    <X className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>{item.separate}</span>
                </div>

                {/* Lifio Solution */}
                <div className="md:col-span-4 flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-900">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className={item.highlight ? 'text-emerald-700 font-extrabold' : ''}>{item.lifio}</span>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;

