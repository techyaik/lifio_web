import React from 'react';

const Hero = () => {
  return (
    <section style={{ position: 'relative', paddingTop: '6rem', paddingBottom: '4rem', overflow: 'hidden' }}>
      
      {/* Background decoration */}
      <div className="bg-blob" style={{ width: '400px', height: '400px', background: '#E0E7FF', top: '-100px', left: '-100px' }}></div>
      <div className="bg-blob" style={{ width: '300px', height: '300px', background: '#FCE7F3', bottom: '10%', right: '-50px' }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        
        {/* App Icon Mockup from Screenshot */}
        <div className="card animate-fade-up" style={{ 
          width: '120px', 
          height: '120px', 
          borderRadius: '32px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          marginBottom: '2.5rem',
          position: 'relative'
        }}>
          {/* Mocking the stylized 'L' logo */}
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 10V42C20 48.6274 25.3726 54 32 54H44" stroke="#2365B0" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="44" cy="20" r="8" fill="#EF4444" />
            <circle cx="44" cy="40" r="8" fill="#10B981" />
            <path d="M41 40L43 42L47 38" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {/* Notification Badge */}
          <div style={{ position: 'absolute', top: '-10px', right: '-10px', width: '32px', height: '32px', background: '#695FCE', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
        </div>

        <div className="pill animate-fade-up" style={{ marginBottom: '1.5rem' }}>
          BUILD GENTLE MOMENTUM
        </div>
        
        <h1 className="animate-fade-up delay-100" style={{ fontSize: '3.5rem', maxWidth: '800px', margin: '0 auto 1.5rem auto' }}>
          Turn small actions into visible progress.
        </h1>
        
        <p className="animate-fade-up delay-200" style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
          Complete habit checklists, watch streaks grow, and see the week at a glance.
        </p>
        
        <div className="animate-fade-up delay-200" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'center' }}>
          <a href="#download" className="btn btn-purple" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            Next
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </a>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
