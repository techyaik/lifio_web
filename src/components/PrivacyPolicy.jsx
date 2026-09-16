import React from 'react';
import { Shield, Lock, Smartphone, Database, CheckCircle2, ShieldCheck } from 'lucide-react';

const PrivacyPolicy = () => {
  const points = [
    {
      num: '01',
      tag: 'ACCOUNTLESS ARCHITECTURE',
      title: 'Zero Account Requirement',
      desc: 'No sign-up forms, no email inputs, and no passwords. Launch Lifio instantly on your phone without creating an account.',
      icon: <Lock size={20} color="var(--brand-lime)" />,
      badgeBg: 'rgba(188, 228, 125, 0.12)',
      borderColor: 'rgba(188, 228, 125, 0.35)',
      tagColor: 'var(--brand-lime)',
      bullets: [
        'Zero personal data collected on launch',
        'Instant access to all modules without login',
        'No account passwords or email verification'
      ]
    },
    {
      num: '02',
      tag: 'ENCRYPTED DEVICE SANDBOX',
      title: '100% On-Device Storage',
      desc: 'All steps, sleep hours, heart rate BPM, habit checklists, wallet transactions, and notes stay saved inside your local phone database.',
      icon: <Smartphone size={20} color="#70E0A3" />,
      badgeBg: 'rgba(112, 224, 163, 0.12)',
      borderColor: 'rgba(112, 224, 163, 0.35)',
      tagColor: '#70E0A3',
      bullets: [
        'Isolated SQLite device sandbox storage',
        'Zero network calls or background cloud sync',
        'Protected by Android OS app security layer'
      ]
    },
    {
      num: '03',
      tag: 'ZERO THIRD-PARTY TRACKING',
      title: 'No Cloud Servers or Ad Tracking',
      desc: 'Lifio does not run tracking servers, sell user records, or embed invasive telemetry frameworks (no AdMob, no Meta, no Firebase).',
      icon: <Database size={20} color="#F5D06A" />,
      badgeBg: 'rgba(240, 196, 83, 0.12)',
      borderColor: 'rgba(240, 196, 83, 0.35)',
      tagColor: '#F5D06A',
      bullets: [
        'Zero advertising or tracker SDKs embedded',
        'No behavioral profiling or monetized data',
        'Zero third-party telemetry server connections'
      ]
    },
    {
      num: '04',
      tag: 'ABSOLUTE DATA OWNERSHIP',
      title: 'Complete User Control',
      desc: 'Your data is 100% under your ownership. Perform local backups anytime or permanently purge all database entries in one tap.',
      icon: <Shield size={20} color="#B4CEFF" />,
      badgeBg: 'rgba(168, 196, 255, 0.12)',
      borderColor: 'rgba(168, 196, 255, 0.35)',
      tagColor: '#B4CEFF',
      bullets: [
        'User-controlled local JSON & CSV exports',
        'Instant permanent data purge on app clear',
        'Full database sovereignty on your smartphone'
      ]
    }
  ];

  return (
    <section id="privacy" style={{ padding: '3rem 0 3.5rem 0' }}>
      <div className="container">
        
        {/* Executive Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.4rem', 
            backgroundColor: 'rgba(255, 255, 255, 0.05)', 
            padding: '0.3rem 0.85rem', 
            borderRadius: '99px',
            marginBottom: '0.65rem',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <ShieldCheck size={14} color="var(--brand-lime)" />
            <span style={{ fontSize: '0.78rem', fontWeight: '800', color: '#FFFFFF', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              LOCAL-FIRST PRIVACY GUARANTEE
            </span>
          </div>

          <h2 style={{ fontSize: '2.4rem', color: '#FFFFFF', fontWeight: '800', letterSpacing: '-0.03em', lineHeight: '1.2' }}>
            Your Data Stays Yours. Period.
          </h2>

          <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', maxWidth: '620px', margin: '0.5rem auto 0 auto', fontWeight: '400', lineHeight: '1.5' }}>
            Lifio is architected from day one for 100% offline privacy. Explore our four core data security guarantees:
          </p>
        </div>

        {/* Structured 2x2 Showcase Grid */}
        <div className="features-grid">
          {points.map((pt, i) => (
            <div 
              key={i} 
              style={{ 
                backgroundColor: 'var(--bg-card)', 
                borderRadius: '0px', 
                padding: '1.5rem',
                border: `1px solid ${pt.borderColor}`,
                boxShadow: '0 8px 26px rgba(0,0,0,0.35)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.25s ease, border-color 0.25s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              {/* Card Header Row: Number + Icon + Tag */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ 
                    width: '42px', 
                    height: '42px', 
                    borderRadius: '0px', 
                    backgroundColor: pt.badgeBg, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    border: `1px solid ${pt.borderColor}`
                  }}>
                    {pt.icon}
                  </div>
                  <div>
                    <span style={{ fontSize: '0.72rem', fontWeight: '800', color: pt.tagColor, letterSpacing: '0.06em', textTransform: 'uppercase', display: 'block' }}>
                      {pt.tag}
                    </span>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-subtle)', fontWeight: '700' }}>
                      GUARANTEE {pt.num}
                    </span>
                  </div>
                </div>
                <span style={{ fontSize: '1.6rem', fontWeight: '800', color: 'rgba(255, 255, 255, 0.1)', fontFamily: 'var(--font-heading)' }}>
                  {pt.num}
                </span>
              </div>

              {/* Card Title */}
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#FFFFFF', fontWeight: '800', lineHeight: '1.25' }}>
                {pt.title}
              </h3>

              {/* Card Body */}
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.55', fontWeight: '400', marginBottom: '1.2rem' }}>
                {pt.desc}
              </p>

              {/* Feature Bullets at Bottom */}
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
                {pt.bullets.map((b, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.84rem', color: '#E2EAF4', fontWeight: '500' }}>
                    <CheckCircle2 size={14} color={pt.tagColor} style={{ flexShrink: 0 }} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PrivacyPolicy;
