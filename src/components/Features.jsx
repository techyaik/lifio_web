import React from 'react';
import { 
  Activity, 
  Flame, 
  Wallet, 
  FileText, 
  CheckCircle2, 
  Sparkles
} from 'lucide-react';

import screenHealth from '../assets/WhatsApp Image 2026-09-17 at 00.31.25 (1).jpeg';
import screenHabits from '../assets/WhatsApp Image 2026-09-17 at 00.31.26.jpeg';
import screenWallet from '../assets/WhatsApp Image 2026-09-17 at 00.31.27.jpeg';
import screenNotes from '../assets/WhatsApp Image 2026-09-17 at 00.31.28.jpeg';

const Features = () => {
  const pillars = [
    {
      id: 'health',
      title: 'Track Your Health',
      subtitle: 'Steps • Sleep • Heart Rate • Cycle',
      desc: 'Log physical vitals, movement distance, sleep hours, heart rate BPM, and cycle tracking with 100% offline privacy.',
      icon: <Activity size={22} color="var(--color-health-text)" />,
      badgeBg: 'var(--color-health-bg)',
      badgeText: 'var(--color-health-text)',
      borderColor: 'var(--color-health-border)',
      bullets: [
        'Daily step counter & active distance goals',
        'Heart rate monitoring & active calorie logs',
        'Sleep duration tracking & body weight history',
        'Optional Google Health Connect read-only sync'
      ],
      img: screenHealth,
      imgPosition: 'center 10%'
    },
    {
      id: 'habits',
      title: 'Build Better Habits',
      subtitle: 'Checklists • Streak Rings • Schedules',
      desc: 'Build lasting daily routines with visual checklist cards, milestone streak rings, and zero-stress custom reminders.',
      icon: <Flame size={22} color="var(--color-habits-text)" />,
      badgeBg: 'var(--color-habits-bg)',
      badgeText: 'var(--color-habits-text)',
      borderColor: 'var(--color-habits-border)',
      bullets: [
        'Instant check-off cards & weekly streak rings',
        'Flexible custom reminder frequency (daily/weekly)',
        'Zero-stress tracking with milestone counters',
        'Local Android system alarm notifications'
      ],
      img: screenHabits,
      imgPosition: 'center 8%'
    },
    {
      id: 'expense',
      title: 'Manage Your Expenses',
      subtitle: 'Private Balance • Accounts • Categories',
      desc: 'Track daily transaction logs and account balances privately with zero bank credentials or financial API connections.',
      icon: <Wallet size={22} color="var(--color-wallet-text)" />,
      badgeBg: 'var(--color-wallet-bg)',
      badgeText: 'var(--color-wallet-text)',
      borderColor: 'var(--color-wallet-border)',
      bullets: [
        'Hidden balance privacy mode active by default',
        'Multi-account tracking (Main, Savings, Cash)',
        'Category breakdowns (Food, Transport, Bills)',
        'Zero bank credentials or financial API connections'
      ],
      img: screenWallet,
      imgPosition: 'center 12%'
    },
    {
      id: 'notes',
      title: 'Capture Your Notes',
      subtitle: 'Offline Notepad • Search • Pins',
      desc: 'Never lose an idea or reflection. Clean offline notepad indexed locally on your smartphone with instant keyword search.',
      icon: <FileText size={22} color="var(--color-notes-text)" />,
      badgeBg: 'var(--color-notes-bg)',
      badgeText: 'var(--color-notes-text)',
      borderColor: 'var(--color-notes-border)',
      bullets: [
        'Instant note creation with clean formatting',
        'Fast offline keyword search across titles & text',
        'Pin important notes to your home dashboard',
        '100% encrypted local device database'
      ],
      img: screenNotes,
      imgPosition: 'center 10%'
    }
  ];

  return (
    <section id="features" style={{ padding: '3rem 0 3.5rem 0' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.45rem', 
            backgroundColor: 'rgba(112, 224, 163, 0.08)', 
            padding: '0.35rem 0.95rem', 
            borderRadius: '99px',
            marginBottom: '0.75rem',
            border: '1px solid rgba(112, 224, 163, 0.25)'
          }}>
            <Sparkles size={14} color="var(--brand-lime)" />
            <span style={{ fontSize: '0.78rem', fontWeight: '800', color: 'var(--brand-lime)', letterSpacing: '0.07em', textTransform: 'uppercase' }}>
              ALL-IN-ONE PERSONAL DASHBOARD
            </span>
          </div>

          <h2 style={{ fontSize: '2.4rem', color: '#FFFFFF', fontWeight: '800', letterSpacing: '-0.03em', lineHeight: '1.2' }}>
            Built for daily routine & total privacy.
          </h2>

          <p style={{ color: 'var(--text-muted)', fontSize: '1.02rem', maxWidth: '620px', margin: '0.65rem auto 0 auto', fontWeight: '400', lineHeight: '1.55' }}>
            Lifio replaces four separate apps with one unified, offline personal dashboard. No accounts, no cloud sync, no subscription traps.
          </p>
        </div>

        {/* Feature Pillars 2x2 Grid */}
        <div className="features-grid">
          {pillars.map((pillar) => (
            <div id={pillar.id} key={pillar.id} className="feature-card">
              
              {/* Card Header Row: Icon + Title & Subtitle */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem', marginBottom: '1.1rem' }}>
                <div style={{ 
                  width: '44px', 
                  height: '44px', 
                  borderRadius: '0px', 
                  backgroundColor: pillar.badgeBg, 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  border: `1px solid ${pillar.borderColor}`,
                  flexShrink: 0
                }}>
                  {pillar.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', color: '#FFFFFF', fontWeight: '800', lineHeight: '1.2', marginBottom: '0.2rem' }}>
                    {pillar.title}
                  </h3>
                  <div style={{ fontSize: '0.78rem', fontWeight: '700', color: pillar.badgeText, letterSpacing: '0.01em' }}>
                    {pillar.subtitle}
                  </div>
                </div>
              </div>

              {/* Card Paragraph Description */}
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.55', fontWeight: '400', marginBottom: '1.1rem' }}>
                {pillar.desc}
              </p>

              {/* Feature Bullets with Circle Checkmarks */}
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem', marginBottom: '1.4rem' }}>
                {pillar.bullets.map((bullet, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', fontSize: '0.86rem', color: '#CFDCD5', fontWeight: '500' }}>
                    <CheckCircle2 size={15} color="var(--brand-lime)" style={{ flexShrink: 0 }} />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Real App Screenshot Inset (Sharp 90-Degree Right-Angle Frame) */}
              <div className="sharp-inset-box">
                {/* Subtle top bar overlay */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '24px',
                  background: 'linear-gradient(180deg, rgba(8, 18, 12, 0.7) 0%, rgba(8, 18, 12, 0) 100%)',
                  zIndex: 2,
                  pointerEvents: 'none'
                }} />
                
                <img 
                  src={pillar.img.src} 
                  alt={`Lifio ${pillar.title} Android Mobile Interface`} 
                  style={{ 
                    width: '100%', 
                    height: '118%', 
                    objectFit: 'cover',
                    objectPosition: pillar.imgPosition,
                    marginTop: '-4%',
                    display: 'block'
                  }} 
                />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;



