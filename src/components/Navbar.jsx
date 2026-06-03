import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'calc(100% - 40px)',
        maxWidth: '1000px',
        zIndex: 100,
        borderRadius: '16px',
        border: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(255, 255, 255, 0.04)',
        background: scrolled ? 'rgba(8, 8, 12, 0.75)' : 'rgba(8, 8, 12, 0.3)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        padding: scrolled ? '12px 24px' : '16px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        transition: 'var(--transition-smooth)',
        boxShadow: scrolled ? '0 10px 30px -10px rgba(0,0,0,0.5)' : 'none'
      }}
    >
      {/* Brand Logo */}
      <a 
        href="#"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontWeight: 800,
          fontSize: '18px',
          letterSpacing: '-0.5px'
        }}
      >
        <span 
          style={{ 
            background: 'linear-gradient(135deg, #a78bfa 0%, #22d3ee 100%)',
            color: '#000',
            width: '28px',
            height: '28px',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '13px',
            fontWeight: 900
          }}
        >
          PP
        </span>
        <span style={{ color: '#fff' }}>piyush.dev</span>
      </a>


      {/* Nav Menu Links */}
      <div style={{ display: 'flex', gap: '28px', alignItems: 'center' }} className="nav-menu">
        {[
          { name: 'About', href: '#about' },
          { name: 'Projects', href: '#projects' },
          { name: 'Experience', href: '#experience' }
        ].map((item, i) => (
          <a
            key={i}
            href={item.href}
            style={{
              fontSize: '14px',
              fontWeight: 500,
              color: 'var(--color-text-secondary)',
              transition: 'var(--transition-fast)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#fff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--color-text-secondary)';
            }}
          >
            {item.name}
          </a>
        ))}

        {/* CTA Contact Button */}
        <a
          href="#contact"
          style={{
            fontSize: '13px',
            fontWeight: 700,
            padding: '8px 16px',
            borderRadius: '10px',
            background: 'rgba(139, 92, 246, 0.1)',
            border: '1px solid rgba(139, 92, 246, 0.25)',
            color: 'var(--color-accent-purple)',
            transition: 'var(--transition-fast)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--color-accent-purple)';
            e.currentTarget.style.color = '#000';
            e.currentTarget.style.borderColor = 'var(--color-accent-purple)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(139, 92, 246, 0.1)';
            e.currentTarget.style.color = 'var(--color-accent-purple)';
            e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.25)';
          }}
        >
          Let's Talk
        </a>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 640px) {
          .nav-menu a:not(:last-child) {
            display: none !important;
          }
        }
      `}} />
    </nav>
  );
};

export default Navbar;
