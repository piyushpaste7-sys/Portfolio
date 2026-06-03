import React, { useState, useEffect } from 'react';
import profileImg from '../assets/resumeimg.png';

const BentoGrid = () => {
  const [currentTime, setCurrentTime] = useState('');
  const [downloadState, setDownloadState] = useState('idle'); // idle -> loading -> success
  const [activeCell, setActiveCell] = useState(null);

  // Digital Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format: 10:24:05 PM
      const formatted = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      setCurrentTime(formatted);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Resume Download Handler
  const handleDownload = () => {
    if (downloadState !== 'idle') return;
    setDownloadState('loading');
    setTimeout(() => {
      setDownloadState('success');
      // Reset back to idle after 3 seconds
      setTimeout(() => setDownloadState('idle'), 3000);
    }, 1800);
  };

  // Mock Contributions Data
  const days = Array.from({ length: 42 }, (_, i) => {
    const commitCount = Math.floor(Math.random() * 8);
    let color = 'rgba(255,255,255,0.05)';
    if (commitCount > 0 && commitCount <= 2) color = '#1e3a24';
    else if (commitCount > 2 && commitCount <= 4) color = '#14532d';
    else if (commitCount > 4 && commitCount <= 6) color = '#15803d';
    else if (commitCount > 6) color = '#22c55e';
    return { id: i, count: commitCount, color };
  });

  return (
    <section id="about" style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ textAlign: 'left', marginBottom: '40px' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '10px' }}>
          <span className="gradient-text-purple">Bento Overview</span> & Experience
        </h2>
        <p style={{ fontSize: '16px', maxWidth: '600px' }}>
          A snapshot of my technological framework, daily work activity, and real-time availability.
        </p>
      </div>

      <div className="bento-grid">
        
        {/* Core Tech Stack (Large Card: Cols 1-2, Rows 1-2) */}
        <div 
          className="glass-card glow-border-purple" 
          style={{ 
            gridColumn: 'span 2', 
            gridRow: 'span 2', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'space-between',
            minHeight: '380px'
          }}
        >
          <div>
            <h3 style={{ fontSize: '20px', marginBottom: '8px', color: 'var(--color-text-primary)' }}>Tech Stack</h3>
            <p style={{ fontSize: '14px', marginBottom: '24px' }}>Languages and architectures I specialize in building.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', flexGrow: 1, alignContent: 'center' }}>
            {[
              { name: 'React.js', color: 'rgba(34, 211, 238, 0.1)', border: 'rgba(34, 211, 238, 0.3)', textColor: '#22d3ee' },
              { name: 'JavaScript', color: 'rgba(251, 191, 36, 0.1)', border: 'rgba(251, 191, 36, 0.3)', textColor: '#fbbf24' },
              { name: 'Tailwind CSS', color: 'rgba(6, 182, 212, 0.1)', border: 'rgba(6, 182, 212, 0.3)', textColor: '#22d3ee' },
              { name: 'Bootstrap', color: 'rgba(139, 92, 246, 0.1)', border: 'rgba(139, 92, 246, 0.3)', textColor: '#a78bfa' },
              { name: 'HTML5 / CSS3', color: 'rgba(244, 114, 182, 0.1)', border: 'rgba(244, 114, 182, 0.3)', textColor: '#f472b6' },
              { name: 'SQL & MongoDB', color: 'rgba(16, 185, 129, 0.1)', border: 'rgba(16, 185, 129, 0.3)', textColor: '#34d399' }
            ].map((tech, i) => (
              <div 
                key={i} 
                style={{ 
                  background: tech.color, 
                  border: `1px solid ${tech.border}`, 
                  borderRadius: '12px', 
                  padding: '14px', 
                  textAlign: 'center',
                  transition: 'var(--transition-fast)',
                  cursor: 'pointer'
                }}
                className="tech-badge"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = `0 4px 15px ${tech.border}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ color: tech.textColor, fontSize: '14px', fontWeight: 600 }}>{tech.name}</div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '20px' }}>
            {['C', 'C++', 'Java', 'Android Development', 'Git', 'GitHub', 'Postman', 'VS Code'].map((t, idx) => (
              <span key={idx} style={{ fontSize: '12px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', padding: '4px 10px', borderRadius: '20px', color: 'var(--color-text-secondary)' }}>{t}</span>
            ))}
          </div>
        </div>

        {/* Available for Hire & Local Time (Medium Card: Col 3, Row 1) */}
        <div className="glass-card glow-border-cyan" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <span style={{ position: 'relative', display: 'flex', width: '10px', height: '10px' }}>
                <span className="animate-pulse-soft" style={{ position: 'absolute', display: 'inline-flex', height: '100%', width: '100%', borderRadius: '50%', backgroundColor: '#10b981', opacity: 0.75 }}></span>
                <span style={{ position: 'relative', display: 'inline-flex', borderRadius: '50%', height: '10px', width: '10px', backgroundColor: '#10b981' }}></span>
              </span>
              <span style={{ fontSize: '13px', color: '#10b981', fontWeight: 600 }}>Active for Work</span>
            </div>
            <h4 style={{ fontSize: '16px', color: 'var(--color-text-primary)' }}>Pune, Maharashtra</h4>
            <p style={{ fontSize: '13px', marginTop: '4px' }}>Open to on-site roles in Pune/Mumbai & remote.</p>
          </div>

          <div style={{ marginTop: '16px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '12px' }}>
            <div style={{ fontSize: '11px', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>My Local Time</div>
            <div style={{ fontSize: '20px', fontWeight: 700, fontFamily: 'var(--font-mono)', color: 'var(--color-accent-cyan)', marginTop: '2px' }}>{currentTime || '--:--:--'}</div>
          </div>
        </div>

        {/* Stats Card (Medium Card: Col 4, Row 1) */}
        <div className="glass-card glow-border-purple" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <h4 style={{ fontSize: '16px', marginBottom: '16px' }}>Academic & Projects</h4>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div>
              <div style={{ fontSize: '20px', fontWeight: 800, color: 'var(--color-accent-purple)' }}>BCA</div>
              <div style={{ fontSize: '11px', color: 'var(--color-text-secondary)' }}>2022-2025</div>
            </div>
            <div>
              <div style={{ fontSize: '20px', fontWeight: 800, color: 'var(--color-accent-pink)' }}>3+</div>
              <div style={{ fontSize: '11px', color: 'var(--color-text-secondary)' }}>Key Projects</div>
            </div>
            <div>
              <div style={{ fontSize: '20px', fontWeight: 800, color: 'var(--color-accent-cyan)' }}>82.4%</div>
              <div style={{ fontSize: '11px', color: 'var(--color-text-secondary)' }}>SSC Percentage</div>
            </div>
            <div>
              <div style={{ fontSize: '20px', fontWeight: 800, color: '#f3f4f6' }}>1</div>
              <div style={{ fontSize: '11px', color: 'var(--color-text-secondary)' }}>Development Cert</div>
            </div>
          </div>
        </div>

        {/* Git Contribution Activity Chart (Large Card: Cols 3-4, Row 2) */}
        <div 
          className="glass-card glow-border-cyan" 
          style={{ 
            gridColumn: 'span 2', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'space-between',
            position: 'relative'
          }}
        >
          <div>
            <h3 style={{ fontSize: '16px', color: 'var(--color-text-primary)', marginBottom: '4px' }}>Weekly Contributions</h3>
            <p style={{ fontSize: '12px' }}>Interactive view of commits pushed this month.</p>
          </div>

          <div style={{ margin: '16px 0' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(14, 1fr)', gap: '6px' }}>
              {days.map((day) => (
                <div
                  key={day.id}
                  style={{
                    backgroundColor: day.color,
                    aspectRatio: '1',
                    borderRadius: '3px',
                    cursor: 'pointer',
                    transition: 'transform 0.15s ease',
                    transform: activeCell === day.id ? 'scale(1.25)' : 'scale(1)',
                    border: activeCell === day.id ? '1px solid #fff' : 'none',
                    zIndex: activeCell === day.id ? 2 : 1
                  }}
                  onMouseEnter={() => setActiveCell(day.id)}
                  onMouseLeave={() => setActiveCell(null)}
                />
              ))}
            </div>
            {activeCell !== null && (
              <div 
                style={{ 
                  position: 'absolute', 
                  bottom: '12px', 
                  right: '24px', 
                  fontSize: '11px', 
                  background: 'rgba(0,0,0,0.8)', 
                  border: '1px solid rgba(255,255,255,0.1)', 
                  padding: '4px 8px', 
                  borderRadius: '6px',
                  color: '#fff',
                  pointerEvents: 'none',
                  fontFamily: 'var(--font-mono)'
                }}
              >
                {days[activeCell].count === 0 ? 'No commits' : `${days[activeCell].count} commits`} on day {activeCell + 1}
              </div>
            )}
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '11px', color: 'var(--color-text-muted)' }}>
            <span>Less code</span>
            <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '1px', background: 'rgba(255,255,255,0.05)' }} />
              <span style={{ width: '8px', height: '8px', borderRadius: '1px', background: '#1e3a24' }} />
              <span style={{ width: '8px', height: '8px', borderRadius: '1px', background: '#14532d' }} />
              <span style={{ width: '8px', height: '8px', borderRadius: '1px', background: '#15803d' }} />
              <span style={{ width: '8px', height: '8px', borderRadius: '1px', background: '#22c55e' }} />
            </div>
            <span>More code</span>
          </div>
        </div>

        {/* Resume Download CTA (Medium Card: Col 1, Row 3) */}
        <div 
          className="glass-card glow-border-purple" 
          style={{ 
            gridColumn: 'span 2', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            padding: '24px 32px'
          }}
        >
          <div style={{ textAlign: 'left' }}>
            <h4 style={{ fontSize: '18px', color: 'var(--color-text-primary)', marginBottom: '4px' }}>Need the full credentials?</h4>
            <p style={{ fontSize: '13px' }}>Download my full resume dossier in PDF format.</p>
          </div>

          <button
            onClick={handleDownload}
            disabled={downloadState === 'loading'}
            style={{
              padding: '12px 24px',
              borderRadius: '12px',
              border: 'none',
              background: downloadState === 'success' 
                ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)' 
                : 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)',
              color: '#fff',
              fontSize: '14px',
              fontWeight: 600,
              cursor: downloadState === 'loading' ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'var(--transition-fast)',
              boxShadow: downloadState === 'success' 
                ? '0 4px 15px rgba(16, 185, 129, 0.3)' 
                : '0 4px 15px rgba(139, 92, 246, 0.3)'
            }}
            onMouseEnter={(e) => {
              if (downloadState === 'idle') {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(139, 92, 246, 0.5)';
              }
            }}
            onMouseLeave={(e) => {
              if (downloadState === 'idle') {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(139, 92, 246, 0.3)';
              }
            }}
          >
            {downloadState === 'idle' && (
              <>
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                <span>Download CV</span>
              </>
            )}
            {downloadState === 'loading' && (
              <>
                <svg className="animate-pulse-soft" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" style={{ animation: 'spin 1s linear infinite' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
                <span>Generating...</span>
              </>
            )}
            {downloadState === 'success' && (
              <>
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span>Downloaded!</span>
              </>
            )}
          </button>
        </div>

        {/* Profile Details Card (Cols 3-4, Row 3) */}
        <div 
          className="glass-card glow-border-cyan" 
          style={{ 
            gridColumn: 'span 2', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'flex-start',
            padding: '24px 32px',
            gap: '20px',
            textAlign: 'left'
          }}
        >
          <img 
            src={profileImg} 
            alt="Piyush Paste"
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              border: '2px solid var(--color-accent-cyan)',
              boxShadow: '0 0 15px rgba(34, 211, 238, 0.4)',
              objectFit: 'cover'
            }}
          />
          <div>
            <h4 style={{ fontSize: '18px', color: '#f3f4f6', marginBottom: '4px' }}>Piyush Paste</h4>
            <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)' }}>
              Completed Full-Stack Web Development certification at IT Education Center, Pune. Focuses on building clean layouts with JavaScript, CSS, and React.js.
            </p>
          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}} />
    </section>
  );
};

export default BentoGrid;
