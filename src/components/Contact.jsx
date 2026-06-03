import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle -> loading -> success

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setStatus('loading');
    
    // Simulate API request
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 1800);
  };

  return (
    <section id="contact" style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ textAlign: 'left', marginBottom: '40px' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '10px' }}>
          Get In <span className="gradient-text-rainbow">Touch</span>
        </h2>
        <p style={{ fontSize: '16px', maxWidth: '500px' }}>
          Have a project in mind, a job opportunity, or just want to chat engineering? Drop a line.
        </p>
      </div>

      <div 
        style={{ 
          display: 'grid', 
          gridTemplateColumns: '1.2fr 1.8fr', 
          gap: '40px',
          textAlign: 'left'
        }}
        className="contact-container"
      >
        {/* Left Side: Contact Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          <div className="glass-card glow-border-purple" style={{ padding: '24px' }}>
            <div style={{ fontSize: '13px', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Direct Email</div>
            <a 
              href="mailto:piyushpaste7@gmail.com" 
              style={{ 
                fontSize: '18px', 
                fontWeight: 600, 
                color: 'var(--color-accent-purple)', 
                marginTop: '6px', 
                display: 'inline-block',
                transition: 'var(--transition-fast)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-accent-purple)'}
            >
              piyushpaste7@gmail.com
            </a>
          </div>

          <div className="glass-card glow-border-pink" style={{ padding: '24px' }}>
            <div style={{ fontSize: '13px', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Call / WhatsApp</div>
            <a 
              href="tel:+917796835783" 
              style={{ 
                fontSize: '18px', 
                fontWeight: 600, 
                color: 'var(--color-accent-pink)', 
                marginTop: '6px', 
                display: 'inline-block',
                transition: 'var(--transition-fast)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-accent-pink)'}
            >
              +91 7796835783
            </a>
          </div>

          <div className="glass-card glow-border-cyan" style={{ padding: '24px' }}>
            <div style={{ fontSize: '13px', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Current Base</div>
            <div style={{ fontSize: '18px', fontWeight: 600, color: 'var(--color-text-primary)', marginTop: '6px' }}>
              Narayan Peth, Pune 411030
            </div>
            <span style={{ fontSize: '13px', color: '#10b981', display: 'flex', alignItems: 'center', gap: '6px', marginTop: '6px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
              Open to on-site roles & hybrid setups
            </span>
          </div>

          {/* Social connections */}
          <div style={{ display: 'flex', gap: '12px' }}>
            {[
              { name: 'GitHub', link: 'https://github.com/piyushpaste', icon: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12', color: 'rgba(255,255,255,0.03)', border: 'rgba(255,255,255,0.08)' },
              { name: 'LinkedIn', link: 'https://linkedin.com/in/piyush-paste', icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z', color: 'rgba(59,130,246,0.05)', border: 'rgba(59,130,246,0.2)' }
            ].map((soc, i) => (
              <a 
                key={i} 
                href={soc.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  flex: '1',
                  background: soc.color,
                  border: `1px solid ${soc.border}`,
                  borderRadius: '12px',
                  padding: '12px',
                  textAlign: 'center',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  fontSize: '13px',
                  fontWeight: 600,
                  transition: 'var(--transition-fast)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.borderColor = 'var(--color-accent-purple)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = soc.border;
                }}
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d={soc.icon} />
                </svg>
                <span>{soc.name}</span>
              </a>
            ))}
          </div>

        </div>

        {/* Right Side: Message Form */}
        <div className="glass-card glow-border-cyan">
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="form-row-split">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '13px', color: 'var(--color-text-secondary)', fontWeight: 500 }}>Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Sarah Connor"
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '8px',
                    padding: '12px 16px',
                    fontSize: '14px',
                    color: '#fff',
                    outline: 'none',
                    transition: 'var(--transition-fast)'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'var(--color-accent-cyan)';
                    e.target.style.background = 'rgba(255,255,255,0.04)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255,255,255,0.08)';
                    e.target.style.background = 'rgba(255,255,255,0.02)';
                  }}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '13px', color: 'var(--color-text-secondary)', fontWeight: 500 }}>Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="e.g. sarah@cyberdyne.com"
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '8px',
                    padding: '12px 16px',
                    fontSize: '14px',
                    color: '#fff',
                    outline: 'none',
                    transition: 'var(--transition-fast)'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'var(--color-accent-cyan)';
                    e.target.style.background = 'rgba(255,255,255,0.04)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255,255,255,0.08)';
                    e.target.style.background = 'rgba(255,255,255,0.02)';
                  }}
                />
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={{ fontSize: '13px', color: 'var(--color-text-secondary)', fontWeight: 500 }}>Message</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="What are we building?"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '8px',
                  padding: '12px 16px',
                  fontSize: '14px',
                  color: '#fff',
                  outline: 'none',
                  resize: 'none',
                  transition: 'var(--transition-fast)'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'var(--color-accent-cyan)';
                  e.target.style.background = 'rgba(255,255,255,0.04)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(255,255,255,0.08)';
                  e.target.style.background = 'rgba(255,255,255,0.02)';
                }}
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              style={{
                width: '100%',
                padding: '14px',
                borderRadius: '8px',
                border: 'none',
                background: status === 'success'
                  ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
                  : 'linear-gradient(135deg, #22d3ee 0%, #0891b2 100%)',
                color: '#fff',
                fontSize: '14px',
                fontWeight: 700,
                cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                transition: 'var(--transition-fast)',
                boxShadow: status === 'success'
                  ? '0 4px 15px rgba(16,185,129,0.3)'
                  : '0 4px 15px rgba(34,211,238,0.3)'
              }}
              onMouseEnter={(e) => {
                if (status === 'idle') {
                  e.currentTarget.style.transform = 'translateY(-1px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(34,211,238,0.5)';
                }
              }}
              onMouseLeave={(e) => {
                if (status === 'idle') {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(34,211,238,0.3)';
                }
              }}
            >
              {status === 'idle' && (
                <>
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                  <span>Send Message</span>
                </>
              )}
              {status === 'loading' && (
                <>
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" style={{ animation: 'spin 1s linear infinite' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                  </svg>
                  <span>Sending Message...</span>
                </>
              )}
              {status === 'success' && (
                <>
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Message Sent Successfully!</span>
                </>
              )}
            </button>
          </form>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 768px) {
          .contact-container {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
          .form-row-split {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
      `}} />
    </section>
  );
};

export default Contact;
