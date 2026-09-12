import React from 'react';

const AppShowcase = () => {
  return (
    <section id="download" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Personalized for you.</h2>
          <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px' }}>
            No account setup. No passwords. Your data stays on your device. Just tell us your name and you're ready to go.
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          
          <div style={{ width: '100%', maxWidth: '400px' }}>
            {/* The Setup Card from Screenshot */}
            <div className="card" style={{ padding: '2rem', marginBottom: '1rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 'bold', color: 'var(--color-primary-blue)', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
                YOUR NAME
              </div>
              <div style={{ 
                border: '1px solid #E4E4E7', 
                borderRadius: '12px', 
                padding: '1rem',
                color: 'var(--color-text-muted)',
                marginBottom: '1rem'
              }}>
                Enter your name
              </div>
              
              <div style={{
                background: '#F8F9FA',
                borderRadius: '12px',
                padding: '1rem',
                display: 'flex',
                gap: '0.75rem',
                alignItems: 'flex-start',
                marginBottom: '1.5rem',
                fontSize: '0.875rem',
                color: 'var(--color-text-muted)'
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary-blue)" strokeWidth="2" style={{ flexShrink: 0, marginTop: '2px' }}>
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
                We will use your name to personalize Lifio locally on this device.
              </div>
              
              <button className="btn btn-blue" style={{ width: '100%', display: 'flex', gap: '0.5rem' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                Continue
              </button>
              
              <div style={{ textAlign: 'center', fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '1rem' }}>
                You can change this later from Settings.
              </div>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
};

export default AppShowcase;
