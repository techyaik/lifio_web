import React from 'react';
import { Activity, Flame, Wallet, FileText, CheckCircle2, ShieldCheck } from 'lucide-react';

const PrivacyShowcase = () => {
  const modules = [
    {
      id: '01',
      moduleTag: 'MODULE 01 • PHYSICAL WELLNESS TRACKING',
      title: '💚 Health Data Privacy',
      desc: 'All steps, heart rate BPM, active calories, sleep hours, weight/height logs, and cycle data stay saved 100% locally on your smartphone.',
      icon: <Activity size={22} color="var(--color-health-text)" />,
      badgeBg: 'var(--color-health-bg)',
      badgeText: 'var(--color-health-text)',
      borderColor: 'var(--color-health-border)',
      bullets: [
        '100% device sandbox isolation',
        'Read-only Google Health Connect API',
        'Zero health telemetry or cloud sync'
      ]
    },
    {
      id: '02',
      moduleTag: 'MODULE 02 • DAILY ROUTINES & STREAKS',
      title: '🎯 Habits & Streaks Privacy',
      desc: 'Habit routines, daily completion checklists, and streak rings are calculated offline. No behavioral profiling or habit sync servers.',
      icon: <Flame size={22} color="var(--color-habits-text)" />,
      badgeBg: 'var(--color-habits-bg)',
      badgeText: 'var(--color-habits-text)',
      borderColor: 'var(--color-habits-border)',
      bullets: [
        'Local Android alarm notifications',
        'Zero behavioral tracking servers',
        '100% offline streak ring calculations'
      ]
    },
    {
      id: '03',
      moduleTag: 'MODULE 03 • PRIVATE TRANSACTION LOGGING',
      title: '💳 Expense Tracker Privacy',
      desc: 'Wallet balances are hidden by default. Lifio requires zero bank logins, zero card details, and zero third-party finance APIs.',
      icon: <Wallet size={22} color="var(--color-wallet-text)" />,
      badgeBg: 'var(--color-wallet-bg)',
      badgeText: 'var(--color-wallet-text)',
      borderColor: 'var(--color-wallet-border)',
      bullets: [
        'Hidden balance privacy mode active',
        'Zero bank credentials or card logins',
        'Offline multi-account transaction logs'
      ]
    },
    {
      id: '04',
      moduleTag: 'MODULE 04 • ENCRYPTED PERSONAL NOTEPAD',
      title: '📝 Notes Summary Privacy',
      desc: 'Personal note entries, quick thoughts, and pinned ideas are encrypted locally in your device sandbox with zero cloud scrapers.',
      icon: <FileText size={22} color="var(--color-notes-text)" />,
      badgeBg: 'var(--color-notes-bg)',
      badgeText: 'var(--color-notes-text)',
      borderColor: 'var(--color-notes-border)',
      bullets: [
        'Local fast keyword searching',
        'Zero cloud AI trainers or scrapers',
        'Encrypted device SQLite storage'
      ]
    }
  ];

  return (
    <div className="features-grid" style={{ marginBottom: '3rem' }}>
      {modules.map((mod) => (
        <div 
          key={mod.id} 
          className="feature-card"
          style={{
            borderColor: mod.borderColor
          }}
        >
          {/* Card Header Row: Icon Badge + Module Tag & Title */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem', marginBottom: '1.1rem' }}>
            <div style={{ 
              width: '44px', 
              height: '44px', 
              borderRadius: '0px', 
              backgroundColor: mod.badgeBg, 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              border: `1px solid ${mod.borderColor}`,
              flexShrink: 0
            }}>
              {mod.icon}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '0.74rem', fontWeight: '800', color: mod.badgeText, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.2rem' }}>
                {mod.moduleTag}
              </div>
              <h3 style={{ fontSize: '1.25rem', color: '#FFFFFF', fontWeight: '800', lineHeight: '1.2' }}>
                {mod.title}
              </h3>
            </div>
            <span style={{ fontSize: '1.4rem', fontWeight: '800', color: 'rgba(255, 255, 255, 0.12)', fontFamily: 'var(--font-heading)' }}>
              {mod.id}
            </span>
          </div>

          {/* Card Paragraph Description */}
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.55', fontWeight: '400', marginBottom: '1.25rem' }}>
            {mod.desc}
          </p>

          {/* Feature Bullets with Circle Checkmark Icons */}
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem', marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
            {mod.bullets.map((bullet, idx) => (
              <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', fontSize: '0.86rem', color: '#CFDCD5', fontWeight: '500' }}>
                <CheckCircle2 size={15} color={mod.badgeText} style={{ flexShrink: 0 }} />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

        </div>
      ))}
    </div>
  );
};

export default PrivacyShowcase;
