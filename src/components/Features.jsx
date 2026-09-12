import React from 'react';

const Features = () => {
  return (
    <section id="features" style={{ padding: '6rem 0', background: 'var(--color-bg)' }}>
      <div className="container">
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '2rem' 
        }}>
          
          <div className="card" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'white' }}>Capture and find ideas</h3>
            <p style={{ color: 'var(--color-text-muted)' }}>Search notes by title or body, filter by tags, and pin important notes to keep them visible.</p>
          </div>

          <div className="card" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'white' }}>Personalized for you</h3>
            <p style={{ color: 'var(--color-text-muted)' }}>No account setup, no password. Just your name, saved on this device, so the app feels more personal from the start.</p>
          </div>

          <div className="card" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'white' }}>Holistic Tracking</h3>
            <p style={{ color: 'var(--color-text-muted)' }}>Seamlessly move between Health, Habits, Home, Notes, and Wallet all in one unified interface.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;
