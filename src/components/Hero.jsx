import React from 'react';
import featureGraphic from '../assets/Feature Graphic.png';
import lifioIcon from '../assets/lifio-icon.png';

const Hero = () => {
  return (
    <section style={{ 
      paddingTop: '8rem', 
      paddingBottom: '4rem',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center'
    }}>
      <div className="container" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '4rem', 
        alignItems: 'center' 
      }}>
        
        {/* Left Column: Text & Badges */}
        <div style={{ textAlign: 'left' }}>
          
          <img 
            src={lifioIcon.src} 
            alt="Lifio Logo" 
            style={{ 
              width: '80px', 
              height: '80px', 
              marginBottom: '2rem',
              borderRadius: '20px',
              objectFit: 'contain',
              background: 'white',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
            }} 
          />

          <h1 style={{ 
            fontSize: '3.5rem', 
            marginBottom: '1rem',
            fontFamily: 'var(--font-heading)',
            color: 'white',
            lineHeight: '1.1'
          }}>
            Take control of your life.
          </h1>
          
          <p style={{ 
            fontSize: '1.25rem', 
            color: 'var(--color-text-muted)', 
            marginBottom: '2rem',
            fontFamily: 'var(--font-main)'
          }}>
            Turn small actions into visible progress. Complete habit checklists, watch streaks grow, and see the week at a glance — every day.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#download" className="store-badge">
              <span className="store-badge-icon">
                <svg viewBox="0 0 1024 1024" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#2196F3" d="M106.3 32.8C91.5 47.9 83 71.3 83 103v818c0 31.7 8.5 55 23.3 70.1L111 995l473-473v-20L111 29l-4.7 3.8z"/>
                  <path fill="#4CAF50" d="M741.5 660l-157.5-158v-20L741.5 324l5.1 2.9 187.7 106.7c53.5 30.4 53.5 80 0 110.5L746.6 657l-5.1 3z"/>
                  <path fill="#F44336" d="M741.5 660l-157.5-158L106.3 991.1c20 21.2 52.5 24 90.7 2.3l544.5-333.4z"/>
                  <path fill="#FFC107" d="M741.5 324l-544.5-333.4c-38.2-21.7-70.7-18.9-90.7 2.3L584 502l157.5-178z"/>
                </svg>
              </span>
              <div>
                <span className="store-badge-text-small">GET IT ON</span>
                <span className="store-badge-text-large">Google Play</span>
              </div>
            </a>
          </div>
          
        </div>
        
        {/* Right Column: Feature Graphic */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img 
            src={featureGraphic.src} 
            alt="Lifio Feature Graphic" 
            style={{ 
              width: '100%', 
              maxWidth: '500px', 
              borderRadius: '24px', 
              boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
              objectFit: 'contain'
            }} 
          />
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
