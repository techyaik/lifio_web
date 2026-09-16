import React from 'react';
import { Activity, ShieldCheck, Cpu, Lock, RefreshCw } from 'lucide-react';

const HealthConnectSection = () => {
  return (
    <section id="health-connect" style={{ padding: '2.5rem 0 3rem 0', backgroundColor: 'var(--bg-app-alt)', borderTop: '1px solid var(--border-app)', borderBottom: '1px solid var(--border-app)' }}>
      <div className="container">
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '2.5rem',
          alignItems: 'center'
        }}>
          
          {/* Left Column: Visual Card */}
          <div style={{ 
            backgroundColor: 'var(--bg-card)', 
            borderRadius: '0px', 
            padding: '1.5rem', 
            border: '1px solid var(--border-app)',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{ 
                width: '40px', 
                height: '40px', 
                borderRadius: '0px', 
                backgroundColor: 'var(--color-health-bg)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                border: '1px solid var(--color-health-border)'
              }}>
                <Cpu size={20} color="var(--color-health-text)" />
              </div>
              <div>
                <h4 style={{ fontSize: '1.05rem', color: '#FFFFFF', fontWeight: '800' }}>
                  Google Health Connect
                </h4>
                <span style={{ fontSize: '0.78rem', color: 'var(--color-health-text)', fontWeight: '700' }}>
                  Native Android Sync API
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.25rem' }}>
              <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.04)', padding: '0.7rem 0.9rem', borderRadius: '0px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Activity size={15} color="var(--brand-lime)" />
                  <span style={{ fontSize: '0.85rem', fontWeight: '600', color: '#FFFFFF' }}>Steps & Active Calories</span>
                </div>
                <span style={{ fontSize: '0.72rem', fontWeight: '700', color: 'var(--color-health-text)', backgroundColor: 'var(--color-health-bg)', padding: '0.15rem 0.45rem', borderRadius: '0px' }}>Read-Only</span>
              </div>

              <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.04)', padding: '0.7rem 0.9rem', borderRadius: '0px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <RefreshCw size={15} color="var(--brand-lime)" />
                  <span style={{ fontSize: '0.85rem', fontWeight: '600', color: '#FFFFFF' }}>Heart Rate (BPM) & Sleep</span>
                </div>
                <span style={{ fontSize: '0.72rem', fontWeight: '700', color: 'var(--color-health-text)', backgroundColor: 'var(--color-health-bg)', padding: '0.15rem 0.45rem', borderRadius: '0px' }}>Read-Only</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '400' }}>
              <Lock size={14} color="var(--brand-lime)" />
              <span>Data stays on your device database sandbox</span>
            </div>
          </div>

          {/* Right Column: Content Explanation */}
          <div>
            <div style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.4rem', 
              backgroundColor: 'var(--color-health-bg)', 
              padding: '0.3rem 0.85rem', 
              borderRadius: '99px',
              marginBottom: '0.85rem',
              border: '1px solid var(--color-health-border)'
            }}>
              <ShieldCheck size={14} color="var(--color-health-text)" />
              <span style={{ fontSize: '0.78rem', fontWeight: '800', color: 'var(--color-health-text)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                OFFICIAL ANDROID INTEGRATION
              </span>
            </div>

            <h2 style={{ fontSize: '2.2rem', color: '#FFFFFF', fontWeight: '800', letterSpacing: '-0.03em', lineHeight: '1.2', marginBottom: '0.85rem' }}>
              Health data, connected simply & securely.
            </h2>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', lineHeight: '1.6', fontWeight: '400', marginBottom: '1.25rem' }}>
              Lifio seamlessly reads supported physical wellness data using Google Health Connect on Android when granted permissions. No third-party servers receive your vitals.
            </p>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.88rem', color: 'var(--text-muted)', fontWeight: '400' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                <ShieldCheck size={16} color="var(--brand-lime)" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                <span><strong style={{ color: '#FFFFFF' }}>User Controlled Access:</strong> You choose which health metrics (Steps, Sleep, Calories, Heart Rate) Lifio can read. Revoke access anytime in Android settings.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                <ShieldCheck size={16} color="var(--brand-lime)" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                <span><strong style={{ color: '#FFFFFF' }}>No Cloud Upload:</strong> Synced Health Connect records flow directly into your app's encrypted local database without cloud intermediaries.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                <ShieldCheck size={16} color="var(--brand-lime)" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                <span><strong style={{ color: '#FFFFFF' }}>Offline Manual Fallback:</strong> If Health Connect is unavailable, you can manually log all vitals and metrics anytime.</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};

export default HealthConnectSection;

