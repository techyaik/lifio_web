import React from 'react';
import { IoLogoGooglePlaystore } from 'react-icons/io5';

const AppShowcase = () => {
  return (
    <section id="download" style={{ padding: '2rem 0 4rem 0' }}>
      <div className="container">
        
        <div style={{ 
          backgroundColor: 'var(--bg-card)', 
          borderRadius: '0px', 
          padding: '3rem 1.75rem',
          color: '#FFFFFF',
          textAlign: 'center',
          border: '1px solid var(--border-app)',
          boxShadow: '0 12px 35px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(188, 228, 125, 0.15)'
        }}>
          
          <h2 style={{ fontSize: '2.5rem', color: '#FFFFFF', marginBottom: '0.85rem', fontWeight: '800' }}>
            No account setup. 100% Private.
          </h2>

          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', maxWidth: '520px', margin: '0 auto 2rem auto', fontWeight: '400' }}>
            All your health metrics, habit streaks, expenses, and notes stay saved on your smartphone.
          </p>

          <a 
            href="#" 
            style={{ 
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              backgroundColor: 'var(--brand-lime)',
              color: '#0B130F',
              padding: '0.85rem 1.8rem',
              borderRadius: '9999px',
              textDecoration: 'none',
              fontWeight: '800',
              boxShadow: '0 8px 24px rgba(188, 228, 125, 0.3)',
              transition: 'transform 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <IoLogoGooglePlaystore size={24} color="#0B130F" />
            <span style={{ fontSize: '1.05rem' }}>Download on Google Play</span>
          </a>

        </div>

      </div>
    </section>
  );
};

export default AppShowcase;

