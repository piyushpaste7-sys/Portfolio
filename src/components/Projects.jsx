import React, { useState } from 'react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projectList = [
    {
      id: 1,
      title: 'QuickFund Management',
      category: 'fullstack',
      description: 'A medical emergency fund management system for employees. Features request placement, status logs, admin approvals, and automatic notifications.',
      imageGradient: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
      tags: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
      codeLink: 'https://github.com/piyushpaste/quick-fund',
      liveLink: '#',
    },
    {
      id: 2,
      title: 'Fashion E-commerce Site',
      category: 'frontend',
      description: 'An interactive online fashion sales catalog. Features catalog cards, shopping cart simulations, product sorting, and responsive layout panels.',
      imageGradient: 'linear-gradient(135deg, #a855f7 0%, #6d28d9 100%)',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
      codeLink: 'https://github.com/piyushpaste/fashion-ecommerce',
      liveLink: '#',
    },
    {
      id: 3,
      title: 'E-commerce Blogging Portal',
      category: 'frontend',
      description: 'A combination blog and fashion marketing interface. Built with state-based category filters, detail modals, and article logs.',
      imageGradient: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)',
      tags: ['React.js', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
      codeLink: 'https://github.com/piyushpaste/ecommerce-blog',
      liveLink: '#',
    }
  ];


  const filteredProjects = filter === 'all' 
    ? projectList 
    : projectList.filter(p => p.category === filter);

  return (
    <section id="projects" style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ display: 'flex', flexDirection: 'column', mdDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '40px', gap: '20px' }}>
        <div style={{ textAlign: 'left' }}>
          <h2 style={{ fontSize: '32px', marginBottom: '10px' }}>
            Featured <span className="gradient-text-cyan">Projects</span>
          </h2>
          <p style={{ fontSize: '16px', maxWidth: '500px' }}>
            Explore my latest open-source applications and commercial software releases.
          </p>
        </div>

        {/* Filters */}
        <div style={{ display: 'flex', gap: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', padding: '4px', borderRadius: '12px' }}>
          {['all', 'fullstack', 'frontend'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                padding: '8px 16px',
                borderRadius: '8px',
                border: 'none',
                background: filter === cat ? 'rgba(139, 92, 246, 0.2)' : 'transparent',
                color: filter === cat ? 'var(--color-accent-purple)' : 'var(--color-text-secondary)',
                fontSize: '14px',
                fontWeight: 600,
                textTransform: 'capitalize',
                cursor: 'pointer',
                transition: 'var(--transition-fast)'
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
        {filteredProjects.map((project) => (
          <div 
            key={project.id}
            className="glass-card glow-border-purple"
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              height: '100%', 
              padding: '0', 
              overflow: 'hidden',
              textAlign: 'left'
            }}
          >
            {/* Visual Header Mockup */}
            <div 
              style={{ 
                height: '180px', 
                background: project.imageGradient, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div 
                style={{ 
                  color: 'rgba(255,255,255,0.9)', 
                  fontSize: '28px', 
                  fontWeight: 800, 
                  letterSpacing: '1px',
                  fontFamily: 'var(--font-mono)' 
                }}
              >
                &lt;{project.title.split(' ')[0]}/&gt;
              </div>
              <div 
                style={{ 
                  position: 'absolute', 
                  bottom: '12px', 
                  right: '12px', 
                  fontSize: '11px', 
                  background: 'rgba(0,0,0,0.4)', 
                  padding: '4px 8px', 
                  borderRadius: '20px', 
                  color: '#fff',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px' 
                }}
              >
                {project.category}
              </div>
            </div>

            {/* Info details */}
            <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
              <div>
                <h3 style={{ fontSize: '20px', color: '#f3f4f6', marginBottom: '8px' }}>{project.title}</h3>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', marginBottom: '20px', minHeight: '60px' }}>
                  {project.description}
                </p>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '24px' }}>
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      style={{ 
                        fontSize: '11px', 
                        background: 'rgba(255,255,255,0.03)', 
                        border: '1px solid rgba(255,255,255,0.05)', 
                        padding: '4px 8px', 
                        borderRadius: '6px',
                        color: 'var(--color-text-secondary)'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div style={{ display: 'flex', gap: '12px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '16px' }}>
                <a 
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    flex: '1',
                    textAlign: 'center',
                    padding: '10px',
                    borderRadius: '8px',
                    border: '1px solid rgba(255,255,255,0.08)',
                    background: 'rgba(255,255,255,0.02)',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: 'var(--color-text-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    transition: 'var(--transition-fast)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-accent-purple)';
                    e.currentTarget.style.background = 'rgba(139, 92, 246, 0.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                  }}
                >
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                  </svg>
                  <span>Code</span>
                </a>
                <a 
                  href={project.liveLink}
                  style={{
                    flex: '1',
                    textAlign: 'center',
                    padding: '10px',
                    borderRadius: '8px',
                    background: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    transition: 'var(--transition-fast)',
                    boxShadow: '0 2px 10px rgba(139, 92, 246, 0.2)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-1px)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(139, 92, 246, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 10px rgba(139, 92, 246, 0.2)';
                  }}
                >
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                  <span>Demo</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
