import React from 'react';

const AppShowcase = () => {
  return (
    <section id="download" style={{ padding: '6rem 0', paddingBottom: '8rem', background: 'var(--color-bg)' }}>
      <div className="container">
        <div className="card" style={{ textAlign: 'center', padding: '4rem 2rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'white' }}>No account setup. No passwords.</h2>
          <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
            Just your name, saved on this device, so the app feels more personal from the start. Your data stays entirely on your device.
          </p>
          <a href="#" className="store-badge" style={{ backgroundColor: 'white', color: 'black', borderColor: 'white' }}>
            <span className="store-badge-text-large">Get started with Lifio</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
