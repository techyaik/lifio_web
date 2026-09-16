import React from 'react';
import featuredUpdated from '../assets/Featured Image Updated one.jpeg';
import screenHealth from '../assets/WhatsApp Image 2026-09-17 at 00.31.25 (1).jpeg';
import screenHabits from '../assets/WhatsApp Image 2026-09-17 at 00.31.26.jpeg';
import screenWallet from '../assets/WhatsApp Image 2026-09-17 at 00.31.27.jpeg';
import screenNotes from '../assets/WhatsApp Image 2026-09-17 at 00.31.28.jpeg';
import screenAnalytics from '../assets/WhatsApp Image 2026-09-17 at 00.33.49.jpeg';

import { Smartphone, Activity, Flame, Wallet, FileText, BarChart3 } from 'lucide-react';

const ScreenshotsSection = () => {
  const screenshots = [
    {
      title: 'Health Vitals Log',
      category: 'Health',
      tagline: 'Steps, Sleep, BPM & Cycle',
      img: screenHealth,
      badgeBg: 'var(--color-health-bg)',
      badgeText: 'var(--color-health-text)',
      icon: <Activity size={15} color="var(--color-health-text)" />
    },
    {
      title: 'Habits & Streaks',
      category: 'Habits',
      tagline: 'Checklists & Milestone Rings',
      img: screenHabits,
      badgeBg: 'var(--color-habits-bg)',
      badgeText: 'var(--color-habits-text)',
      icon: <Flame size={15} color="var(--color-habits-text)" />
    },
    {
      title: 'Expense Wallet',
      category: 'Wallet',
      tagline: 'Private Balance & Accounts',
      img: screenWallet,
      badgeBg: 'var(--color-wallet-bg)',
      badgeText: 'var(--color-wallet-text)',
      icon: <Wallet size={15} color="var(--color-wallet-text)" />
    },
    {
      title: 'Personal Notepad',
      category: 'Notes',
      tagline: 'Search & Pinned Dashboard',
      img: screenNotes,
      badgeBg: 'var(--color-notes-bg)',
      badgeText: 'var(--color-notes-text)',
      icon: <FileText size={15} color="var(--color-notes-text)" />
    },
    {
      title: 'Progress Analytics',
      category: 'Analytics',
      tagline: 'Weekly & Monthly Trends',
      img: screenAnalytics,
      badgeBg: 'rgba(255, 255, 255, 0.08)',
      badgeText: 'var(--brand-lime)',
      icon: <BarChart3 size={15} color="var(--brand-lime)" />
    }
  ];

  return (
    <section id="screenshots" style={{ padding: '2.5rem 0 3rem 0' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
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
            <Smartphone size={14} color="var(--brand-lime)" />
            <span style={{ fontSize: '0.78rem', fontWeight: '800', color: '#FFFFFF', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              REAL APPLICATION SCREENSHOTS
            </span>
          </div>

          <h2 style={{ fontSize: '2.3rem', color: '#FFFFFF', fontWeight: '800', letterSpacing: '-0.03em', lineHeight: '1.2' }}>
            Inside the real Android application.
          </h2>

          <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', maxWidth: '600px', margin: '0.5rem auto 0 auto', fontWeight: '400', lineHeight: '1.5' }}>
            Take a look at actual, unretouched screen captures from Lifio — built for maximum clarity, fast logging, and local-first privacy.
          </p>
        </div>

        {/* Real App Screenshots Grid (5 Screens Showcase) */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '1.25rem',
          marginBottom: '2.5rem'
        }}>
          {screenshots.map((screen, idx) => (
            <div 
              key={idx}
              style={{
                backgroundColor: 'var(--bg-card)',
                borderRadius: '0px',
                padding: '0.75rem',
                border: '1px solid var(--border-app)',
                boxShadow: '0 6px 20px rgba(0,0,0,0.3)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                transition: 'transform 0.25s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              {/* Phone Mockup Frame (Clean Cropped Preview) */}
              <div style={{ 
                width: '100%', 
                height: '320px',
                borderRadius: '0px', 
                overflow: 'hidden', 
                border: '1px solid rgba(255, 255, 255, 0.12)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                backgroundColor: '#070E0A',
                marginBottom: '0.75rem',
                position: 'relative'
              }}>
                <img 
                  src={screen.img.src} 
                  alt={`Lifio ${screen.title} Screenshot`} 
                  style={{ 
                    width: '100%', 
                    height: '114%', 
                    display: 'block',
                    objectFit: 'cover',
                    objectPosition: 'center 12%',
                    marginTop: '-5%'
                  }} 
                />
              </div>

              {/* Title & Tagline */}
              <div style={{ textAlign: 'center', width: '100%' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', backgroundColor: screen.badgeBg, padding: '0.2rem 0.55rem', borderRadius: '0px', marginBottom: '0.3rem' }}>
                  {screen.icon}
                  <span style={{ fontSize: '0.72rem', fontWeight: '700', color: screen.badgeText }}>
                    {screen.category}
                  </span>
                </div>
                <h4 style={{ fontSize: '0.95rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '0.1rem' }}>
                  {screen.title}
                </h4>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '400' }}>
                  {screen.tagline}
                </span>
              </div>

            </div>
          ))}
        </div>

        {/* Feature Overview Graphic Showcase Container */}
        <div style={{ 
          maxWidth: '900px', 
          margin: '0 auto', 
          borderRadius: '0px', 
          overflow: 'hidden', 
          boxShadow: '0 20px 45px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1)',
          backgroundColor: 'var(--bg-card)',
          padding: '8px'
        }}>
          <img 
            src={featuredUpdated.src} 
            alt="Lifio Application Full Feature Showcase" 
            style={{ 
              width: '100%', 
              borderRadius: '0px', 
              display: 'block',
              objectFit: 'cover'
            }} 
          />
        </div>

      </div>
    </section>
  );
};

export default ScreenshotsSection;

