import React from 'react';

const Footer = () => {
  return (
    <footer 
      style={{ 
        padding: '40px 20px', 
        borderTop: '1px solid rgba(255, 255, 255, 0.05)', 
        maxWidth: '1200px', 
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '16px'
      }}
    >
      <div 
        style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          width: '100%', 
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
          fontSize: '14px',
          color: 'var(--color-text-muted)'
        }}
        className="footer-content"
      >
        <div>
          © {new Date().getFullYear()} Piyush Paste. All rights reserved.
        </div>
        
        <div style={{ display: 'flex', gap: '20px' }}>
          {['About', 'Projects', 'Experience', 'Contact'].map((item, i) => (
            <a 
              key={i} 
              href={`#${item.toLowerCase()}`}
              style={{
                transition: 'var(--transition-fast)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-muted)'}
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      <div style={{ fontSize: '11px', color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}>
        Built with React 19 • Vite • Custom Glassmorphism CSS
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 640px) {
          .footer-content {
            flex-direction: column !important;
            text-align: center !important;
            gap: 12px !important;
          }
        }
      `}} />
    </footer>
  );
};

export default Footer;
