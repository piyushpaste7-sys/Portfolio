import React, { useState, useEffect } from 'react';
import TerminalConsole from './TerminalConsole';
import profileImg from '../assets/resumeimg.png';

const HeroSection = () => {
  const words = ['Web Developer', 'React.js Developer', 'Full-Stack Enthusiast'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer;
    const handleType = () => {
      const fullWord = words[currentWordIndex];
      
      if (!isDeleting) {
        // Typing
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        setTypingSpeed(100);
        
        if (currentText === fullWord) {
          // Pause at the end of the word
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        // Deleting
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        setTypingSpeed(50);
        
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, typingSpeed]);

  return (
    <section 
      style={{ 
        minHeight: '85vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        padding: '120px 20px 60px',
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative'
      }}
    >
      {/* Decorative Blob */}
      <div 
        className="glow-blob animate-pulse-soft" 
        style={{
          width: '350px',
          height: '350px',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
          top: '10%',
          left: '5%',
        }}
      />
      <div 
        className="glow-blob animate-pulse-soft" 
        style={{
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(34, 211, 238, 0.12) 0%, transparent 70%)',
          bottom: '10%',
          right: '5%',
          animationDelay: '2s'
        }}
      />

      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '40px',
          width: '100%',
          alignItems: 'center',
          textAlign: 'left'
        }}
        className="hero-grid"
      >
        {/* Left Column: Heading and copy */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <img 
                src={profileImg} 
                alt="Piyush Paste"
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  border: '2px solid var(--color-accent-purple)',
                  boxShadow: '0 0 15px rgba(139, 92, 246, 0.4)',
                  objectFit: 'cover',
                  display: 'inline-block'
                }}
              />
              <span 
                style={{ 
                  fontSize: '13px', 
                  fontWeight: 600, 
                  textTransform: 'uppercase', 
                  letterSpacing: '1.5px', 
                  color: 'var(--color-accent-purple)',
                  background: 'rgba(139, 92, 246, 0.08)',
                  padding: '6px 14px',
                  borderRadius: '20px',
                  border: '1px solid rgba(139, 92, 246, 0.15)',
                  display: 'inline-block'
                }}
              >
                Available for Hire
              </span>
            </div>
            
            <h1 style={{ fontSize: '52px', fontWeight: 800, lineHeight: '1.1', color: '#fff', letterSpacing: '-1.5px' }}>
              Hi, I'm Piyush. <br />
              <span className="gradient-text-rainbow">{currentText}</span>
              <span style={{ animation: 'blink 0.8s infinite', color: 'var(--color-accent-purple)' }}>|</span>
            </h1>
          </div>

          <p style={{ fontSize: '18px', color: 'var(--color-text-secondary)', lineHeight: '1.6', maxWidth: '520px' }}>
            I build responsive React.js web interfaces, custom web applications, and database configurations that create robust, performant user experiences.
          </p>

          {/* Action CTAs */}
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '8px' }}>
            <a 
              href="#projects"
              style={{
                padding: '14px 28px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)',
                color: '#fff',
                fontWeight: 700,
                fontSize: '15px',
                boxShadow: '0 4px 20px rgba(139, 92, 246, 0.4)',
                transition: 'var(--transition-fast)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 24px rgba(139, 92, 246, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(139, 92, 246, 0.4)';
              }}
            >
              Explore Projects
            </a>
            
            <a 
              href="#contact"
              style={{
                padding: '14px 28px',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                background: 'rgba(255,255,255,0.02)',
                color: '#fff',
                fontWeight: 700,
                fontSize: '15px',
                transition: 'var(--transition-fast)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
              }}
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Right Column: Terminal Console */}
        <div style={{ width: '100%' }}>
          <TerminalConsole />
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 960px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 50px !important;
          }
          #hero-section {
            padding-top: 100px !important;
          }
          h1 {
            font-size: 42px !important;
          }
        }
      `}} />
    </section>
  );
};

export default HeroSection;
