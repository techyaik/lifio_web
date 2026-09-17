import React from 'react';
import { ShieldCheck, Lock, Smartphone, EyeOff, CheckCircle2, Mail, ServerOff } from 'lucide-react';

export const PrivacySecurity: React.FC = () => {
  const privacyPillars = [
    {
      icon: <Lock className="w-6 h-6 text-emerald-600" />,
      title: 'Zero Account Requirement',
      desc: 'No registration forms, no email inputs, and no passwords. Launch Lifio instantly on your smartphone without creating an account.',
      badge: '100% Accountless'
    },
    {
      icon: <Smartphone className="w-6 h-6 text-emerald-600" />,
      title: 'Local On-Device Database',
      desc: 'All steps, sleep hours, heart rate BPM, habit checklists, spending logs, and personal notes stay saved strictly inside your local phone database.',
      badge: 'SQLite Sandbox'
    },
    {
      icon: <ServerOff className="w-6 h-6 text-emerald-600" />,
      title: 'Zero Third-Party Trackers',
      desc: 'Lifio does not run tracking servers, sell user records, or embed invasive telemetry frameworks (no AdMob, no Meta, no Firebase).',
      badge: 'Zero Ad Telemetry'
    },
    {
      icon: <EyeOff className="w-6 h-6 text-emerald-600" />,
      title: 'Full User Sovereignty',
      desc: 'Your data is 100% under your ownership. Export local JSON or CSV backups anytime or permanently purge all entries in one tap.',
      badge: 'User Controlled'
    }
  ];

  return (
    <section id="privacy" className="py-20 md:py-28 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-bold text-emerald-700 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>LOCAL-FIRST GUARANTEE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading">
            Your personal data stays on your phone. Period.
          </h2>

          <p className="text-lg text-slate-600 font-normal leading-relaxed">
            We believe your daily health vitals, financial spending, and private thoughts belong only to you. Lifio is architected for 100% offline security.
          </p>

          <div className="pt-1">
            <a 
              href="/privacy" 
              className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 hover:text-emerald-700 bg-emerald-50 border border-emerald-200 px-4 py-2 rounded-xl transition-all hover:bg-emerald-100/70"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Read Full Standalone Privacy Policy Page</span>
              <span className="text-emerald-600">→</span>
            </a>
          </div>
        </div>

        {/* 4 Privacy Security Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {privacyPillars.map((pillar, idx) => (
            <div 
              key={idx} 
              className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                    {pillar.icon}
                  </div>
                  <span className="text-xs font-extrabold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 font-heading">
                  {pillar.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {pillar.desc}
                </p>
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-slate-700 border-t border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Verified offline Android app sandbox</span>
              </div>
            </div>
          ))}
        </div>

        {/* Developer Transparency Contact Card */}
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">Direct Transparency Support</span>
            <h3 className="text-2xl font-extrabold font-heading text-white">Have questions about offline security?</h3>
            <p className="text-sm text-slate-400 max-w-xl font-normal">
              Reach out directly to the lead creator of Lifio. All privacy and technical inquiries are answered personally within 24 to 48 hours.
            </p>
          </div>

          <a
            href="mailto:imran@idexa.app"
            className="inline-flex items-center gap-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold px-6 py-3.5 rounded-2xl text-sm transition-all shadow-lg shadow-emerald-500/20 active:scale-98 flex-shrink-0"
          >
            <Mail className="w-4 h-4 stroke-[2.5]" />
            <span>imran@idexa.app</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default PrivacySecurity;
