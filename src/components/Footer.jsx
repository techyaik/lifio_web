import React from 'react';

const Footer = () => {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.1)', padding: '2rem 0', backgroundColor: 'var(--color-bg)' }}>
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', textAlign: 'center' }}>
          
          <div style={{ fontWeight: 'bold', color: 'white' }}>Lifio</div>
          
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
            © {new Date().getFullYear()} Lifio App. All rights reserved.
          </p>
          
          <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.85rem' }}>
            <a href="/privacy" style={{ color: 'var(--color-text-muted)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color='white'} onMouseLeave={(e) => e.target.style.color='var(--color-text-muted)'}>Privacy Policy</a>
            <a href="mailto:support@lifio.app" style={{ color: 'var(--color-text-muted)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color='white'} onMouseLeave={(e) => e.target.style.color='var(--color-text-muted)'}>Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
