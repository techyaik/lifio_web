import React, { useState, useEffect } from 'react';
import lifioIcon from '../assets/lifio-icon.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      padding: scrolled ? '0.7rem 0' : '1rem 0',
      backgroundColor: scrolled ? 'rgba(11, 19, 15, 0.88)' : 'rgba(11, 19, 15, 0.65)',
      backdropFilter: 'blur(16px)',
      borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* Brand Logo Header */}
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }}>
          <img 
            src={lifioIcon.src} 
            alt="Lifio Logo" 
            style={{ width: '32px', height: '32px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(188, 228, 125, 0.2)' }} 
          />
          <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#FFFFFF', letterSpacing: '-0.03em', fontFamily: 'var(--font-heading)' }}>
            lifio<span style={{ color: 'var(--brand-lime)' }}>.</span>
          </span>
        </a>

        {/* Navigation Links */}
        <nav style={{ display: 'flex', gap: '1.2rem', alignItems: 'center' }}>
          <a href="/#features" className="nav-item">Features</a>
          <a href="/#screenshots" className="nav-item">Screenshots</a>
          <a href="/#health-connect" className="nav-item">Health Connect</a>
          <a href="/privacy" className="nav-item">Privacy Policy</a>
          <a href="/contact" className="nav-item">Contact</a>
        </nav>

        {/* Primary Get App Action Button */}
        <a 
          href="/#download" 
          style={{ 
            backgroundColor: 'var(--brand-lime)',
            color: '#0B130F',
            padding: '0.55rem 1.25rem',
            borderRadius: '9999px',
            textDecoration: 'none',
            fontSize: '0.88rem',
            fontWeight: '800',
            boxShadow: '0 4px 14px rgba(188, 228, 125, 0.25)',
            transition: 'transform 0.2s ease, background-color 0.2s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-1px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          Get App
        </a>

      </div>
    </header>
  );
};

export default Navbar;

