import React from 'react';
import { Lock, Mail } from 'lucide-react';
import lifioIcon from '../assets/lifio-icon.png';

const Footer = () => {
  return (
    <footer style={{ 
      backgroundColor: '#070E0A', 
      color: 'var(--text-muted)', 
      padding: '3.5rem 0 2.5rem 0',
      borderTop: '1px solid var(--border-app)'
    }}>
      <div className="container">
        
        {/* Main Grid: Clean 3-part Layout */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
          gap: '2.5rem',
          paddingBottom: '2.5rem',
          borderBottom: '1px solid var(--border-app)'
        }}>
          
          {/* Column 1: Brand & Privacy Commitment */}
          <div style={{ maxWidth: '340px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem' }}>
              <img 
                src={lifioIcon.src || "/lifio-icon.png"} 
                alt="Lifio App Icon" 
                width={32}
                height={32}
                style={{ width: '32px', height: '32px', borderRadius: '10px' }} 
              />
              <span style={{ fontSize: '1.6rem', fontWeight: '800', color: '#FFFFFF', letterSpacing: '-0.03em', fontFamily: 'var(--font-heading)' }}>
                lifio<span style={{ color: 'var(--brand-lime)' }}>.</span>
              </span>
            </div>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.55', marginBottom: '1.25rem', fontWeight: '400' }}>
              A healthier, more organized routine. Track health metrics, habits, wallet spending, and notes completely offline.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: 'var(--brand-lime)', fontSize: '0.82rem', fontWeight: '600' }}>
              <Lock size={14} color="var(--brand-lime)" />
              <span>100% On-Device Local Storage</span>
            </div>
          </div>

          {/* Column 2: Essential Quick Links */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '0.98rem', fontWeight: '700', marginBottom: '1rem', letterSpacing: '0.02em' }}>
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.88rem' }}>
              <li>
                <a href="/#features" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseOver={(e) => e.target.style.color = '#FFFFFF'} onMouseOut={(e) => e.target.style.color = 'var(--text-muted)'}>
                  Features Overview
                </a>
              </li>
              <li>
                <a href="/privacy" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseOver={(e) => e.target.style.color = '#FFFFFF'} onMouseOut={(e) => e.target.style.color = 'var(--text-muted)'}>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseOver={(e) => e.target.style.color = '#FFFFFF'} onMouseOut={(e) => e.target.style.color = 'var(--text-muted)'}>
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/contact" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseOver={(e) => e.target.style.color = '#FFFFFF'} onMouseOut={(e) => e.target.style.color = 'var(--text-muted)'}>
                  Contact Support
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Direct Contact */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '0.98rem', fontWeight: '700', marginBottom: '1rem', letterSpacing: '0.02em' }}>
              Support & Inquiries
            </h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: '1.55', marginBottom: '0.85rem' }}>
              Have questions or feedback? Reach out directly to the developer:
            </p>
            <a 
              href="mailto:imran@idexa.app" 
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.5rem', 
                backgroundColor: 'rgba(255, 255, 255, 0.05)', 
                padding: '0.65rem 1rem', 
                borderRadius: '0px', 
                border: '1px solid var(--border-app)', 
                color: 'var(--brand-lime)', 
                fontWeight: '700', 
                textDecoration: 'none', 
                fontSize: '0.88rem' 
              }}
            >
              <Mail size={15} color="var(--brand-lime)" />
              <span>imran@idexa.app</span>
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          flexWrap: 'wrap', 
          gap: '1rem', 
          paddingTop: '1.5rem', 
          fontSize: '0.8rem', 
          color: 'var(--text-subtle)' 
        }}>
          <p>© {new Date().getFullYear()} Lifio App. Built with local-first privacy.</p>
          <p>Health • Habits • Wallet • Notes</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
