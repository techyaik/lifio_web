import React from 'react';
import { IoLogoGooglePlaystore } from 'react-icons/io5';
import featuredGraphic from '../assets/Featured Imgae.jpeg';

const Hero = () => {
  return (
    <section style={{ paddingTop: '5.5rem', paddingBottom: '2.5rem' }}>
      <div className="container">
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '2rem',
          alignItems: 'center'
        }}>
          
          {/* Left Column: Clear Value Proposition */}
          <div>
            {/* App Category Badge */}
            <div style={{ 
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              backgroundColor: 'var(--color-health-bg)',
              color: 'var(--color-health-text)',
              padding: '0.3rem 0.85rem',
              borderRadius: '9999px',
              fontSize: '0.78rem',
              fontWeight: '700',
              marginBottom: '1rem',
              border: '1px solid var(--color-health-border)'
            }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: 'var(--color-health-text)' }}></span>
              ALL-IN-ONE PERSONAL LIFE TRACKER
            </div>

            <h1 style={{ 
              fontSize: 'clamp(2.3rem, 4.5vw, 3.5rem)', 
              lineHeight: '1.12', 
              marginBottom: '1rem',
              color: '#FFFFFF',
              fontWeight: '800',
              letterSpacing: '-0.03em'
            }}>
              A healthier, more<br />
              organized you<span style={{ color: 'var(--brand-lime)' }}>.</span>
            </h1>

            <p style={{ 
              fontSize: '1.08rem', 
              color: 'var(--text-muted)', 
              marginBottom: '1.8rem',
              maxWidth: '480px',
              lineHeight: '1.6',
              fontWeight: '400'
            }}>
              Lifio seamlessly combines physical health monitoring, daily habit checklists, private expense tracking, and personal notes into one clean, offline Android application.
            </p>

            <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <a 
                href="#download" 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  backgroundColor: 'var(--brand-lime)',
                  color: '#0B130F',
                  padding: '0.75rem 1.6rem',
                  borderRadius: '9999px',
                  textDecoration: 'none',
                  fontWeight: '800',
                  boxShadow: '0 8px 24px rgba(188, 228, 125, 0.25)',
                  transition: 'transform 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <IoLogoGooglePlaystore size={24} color="#0B130F" />
                <div style={{ textAlign: 'left' }}>
                  <span style={{ fontSize: '0.6rem', display: 'block', opacity: 0.8, letterSpacing: '0.06em', fontWeight: '800' }}>GET IT ON</span>
                  <span style={{ fontSize: '1.02rem', fontWeight: '800', lineHeight: 1 }}>Google Play</span>
                </div>
              </a>

              <span className="handwriting" style={{ transform: 'rotate(-2deg)', fontSize: '1.5rem' }}>
                Small Steps. Brighter Days ~
              </span>
            </div>
          </div>

          {/* Right Column: Clean App Feature Mockup */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1)',
              background: 'var(--bg-card)',
              padding: '6px'
            }}>
              <img 
                src="/hero.jpeg" 
                alt="Lifio Mobile App - Health, Habits, Finances, Notes" 
                style={{ 
                  width: '100%', 
                  maxWidth: '440px', 
                  borderRadius: '18px', 
                  display: 'block',
                  objectFit: 'cover'
                }} 
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;

