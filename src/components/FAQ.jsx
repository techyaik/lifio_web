import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: 'Do I need an account or password to use Lifio?',
      a: 'No. Lifio requires zero account setup and no password. Just enter your name on first launch, and the app is ready.'
    },
    {
      q: 'Where is my health, habit, and expense data stored?',
      a: 'All data stays 100% local on your smartphone. Lifio does not upload your sensitive health metrics, wallet history, or notes to external servers.'
    },
    {
      q: 'What features are included in Lifio?',
      a: 'Lifio includes daily Health metrics tracking (steps, heart rate, sleep, calories), Habit checklists with streak counters, a private Expense Tracker wallet, and local Notes.'
    },
    {
      q: 'Is Lifio free to download on Android?',
      a: 'Yes! You can download Lifio on Google Play Store and start tracking your daily progress immediately.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" style={{ padding: '2.5rem 0 3rem 0' }}>
      <div className="container">
        
        {/* Clean Header */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <span style={{ 
            color: 'var(--brand-lime)', 
            fontWeight: '800', 
            fontSize: '0.78rem',
            letterSpacing: '0.08em',
            display: 'block',
            marginBottom: '0.4rem',
            textTransform: 'uppercase'
          }}>
            FREQUENTLY ASKED QUESTIONS
          </span>
          
          <h2 style={{ fontSize: '2.2rem', color: '#FFFFFF', fontWeight: '800' }}>
            Got Questions? We’ve Got Answers.
          </h2>
        </div>

        {/* Accordion FAQ Layout */}
        <div style={{ 
          maxWidth: '740px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.85rem'
        }}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                onClick={() => toggleFAQ(index)}
                style={{ 
                  backgroundColor: 'var(--bg-card)', 
                  borderRadius: '0px', 
                  padding: '1.1rem 1.35rem',
                  border: '1px solid var(--border-app)',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                  <h3 style={{ fontSize: '1.02rem', color: '#FFFFFF', fontWeight: '700', lineHeight: '1.4' }}>
                    {faq.q}
                  </h3>
                  <div style={{ 
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', 
                    transition: 'transform 0.25s ease',
                    color: 'var(--brand-lime)'
                  }}>
                    <ChevronDown size={18} />
                  </div>
                </div>

                {isOpen && (
                  <p style={{ 
                    marginTop: '0.85rem', 
                    paddingTop: '0.75rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                    color: 'var(--text-muted)', 
                    fontSize: '0.92rem', 
                    lineHeight: '1.55', 
                    fontWeight: '400' 
                  }}>
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;

