import React from 'react';

const FeatureCard = ({ title, subtitle, description, iconColor, iconBg, children }) => (
  <div className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
      <div style={{ 
        width: '48px', 
        height: '48px', 
        borderRadius: '12px', 
        background: iconBg, 
        color: iconColor,
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center'
      }}>
        {children}
      </div>
      <div>
        <div style={{ fontSize: '0.75rem', fontWeight: 'bold', letterSpacing: '0.05em', color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>
          {subtitle}
        </div>
        <h3 style={{ fontSize: '1.25rem' }}>{title}</h3>
      </div>
    </div>
    <p style={{ color: 'var(--color-text-muted)', flexGrow: 1 }}>{description}</p>
  </div>
);

const Features = () => {
  return (
    <section id="features" style={{ padding: '4rem 0', background: 'var(--color-bg)' }}>
      <div className="container">
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem' 
        }}>
          
          <FeatureCard 
            title="Capture and find ideas" 
            subtitle="NOTES" 
            description="Search notes by title or body, filter by tags, and pin important notes to keep them visible."
            iconColor="#2365B0"
            iconBg="#EBF3FC"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
          </FeatureCard>

          <FeatureCard 
            title="Personalized for you" 
            subtitle="YOUR PROFILE" 
            description="No account setup, no password. Just your name, saved on this device, so the app feels more personal from the start."
            iconColor="#695FCE"
            iconBg="#F0EEFA"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          </FeatureCard>

          <FeatureCard 
            title="Holistic Tracking" 
            subtitle="DASHBOARD" 
            description="Seamlessly move between Health, Habits, Home, Notes, and Wallet all in one unified interface."
            iconColor="#10B981"
            iconBg="#ECFDF5"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
          </FeatureCard>

        </div>
      </div>
    </section>
  );
};

export default Features;
