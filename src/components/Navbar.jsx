import React, { useState, useEffect } from 'react';
import lifioIcon from '../assets/lifio-icon.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      padding: scrolled ? '1rem 0' : '1.5rem 0',
      backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
      transition: 'all 0.3s ease'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '800', fontSize: '1.25rem', color: 'white' }}>
          <img src={lifioIcon.src} alt="Lifio Logo" style={{ width: '32px', height: '32px', borderRadius: '8px', objectFit: 'contain' }} />
          Lifio
        </a>
        
        <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', fontWeight: '600', color: 'var(--color-text-muted)' }}>
          <a href="#features" className="nav-link">Features</a>
          <a href="#download" className="nav-link">Get Started</a>
          <a href="/privacy" className="nav-link">Privacy</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
