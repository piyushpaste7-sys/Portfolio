import React, { useState } from 'react';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const jobs = [
    {
      company: 'Tilak Maharashtra University',
      role: 'Bachelor of Computer Application (BCA)',
      period: '2022 — 2025',
      location: 'Pune, Maharashtra',
      accomplishments: [
        'Studied core computer application architectures, database models, data structures, and object-oriented programming principles.',
        'Obtained a final CGPA of 6.53, concentrating on project building and computational concepts.',
        'Created emergency fund management software (QuickFund) for employee assistance studies.',
        'Participated in coding labs on software design, structured database setups, and Android development.'
      ],
      skillsUsed: ['Java', 'C', 'C++', 'SQL', 'Android Studio', 'Linux']
    },
    {
      company: 'IT Education Center',
      role: 'Full-Stack Web Development Certification',
      period: 'Active Training',
      location: 'Pune, Maharashtra',
      accomplishments: [
        'Enrolled in comprehensive full-stack training covering client-side interface coding and back-end logic integrations.',
        'Designed interactive web layouts, cart modules, and blogging interfaces using React.js and Bootstrap.',
        'Studied modern database configurations using SQL and NoSQL (MongoDB) databases.',
        'Utilized Git, GitHub, and Postman to manage source code changes and test API endpoints.'
      ],
      skillsUsed: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS', 'SQL', 'MongoDB', 'Git']
    },
    {
      company: 'Rani Parvatidevi Highschool',
      role: 'Higher Secondary Schooling (HSC)',
      period: '2021 — 2022',
      location: 'Sawantwadi, Maharashtra',
      accomplishments: [
        'Completed higher secondary education in Science stream.',
        'Graduated with aggregate scoring of 61.00%.'
      ],
      skillsUsed: ['Physics', 'Chemistry', 'Mathematics', 'Computer Science basics']
    },
    {
      company: 'S.V.S.V Mangaon',
      role: 'Secondary Schooling (SSC)',
      period: '2019 — 2020',
      location: 'Mangaon, Maharashtra',
      accomplishments: [
        'Completed secondary school matriculation curriculum.',
        'Graduated with a first-class score of 82.40%.'
      ],
      skillsUsed: ['General Science', 'Algebra & Geometry', 'Information Technology']
    }
  ];

  return (
    <section id="experience" style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ textAlign: 'left', marginBottom: '40px' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '10px' }}>
          Education & <span className="gradient-text-purple">Credentials</span>
        </h2>
        <p style={{ fontSize: '16px', maxWidth: '500px' }}>
          My academic journey and professional certification milestones.
        </p>
      </div>

      <div 
        className="glass-card" 
        style={{ 
          display: 'grid', 
          gridTemplateColumns: '250px 1fr', 
          gap: '40px',
          padding: '40px',
          textAlign: 'left'
        }}
      >
        {/* Left Tabs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {jobs.map((job, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              style={{
                padding: '16px 20px',
                borderRadius: '12px',
                border: 'none',
                background: activeTab === idx ? 'rgba(139, 92, 246, 0.08)' : 'transparent',
                borderLeft: activeTab === idx ? '4px solid var(--color-accent-purple)' : '4px solid transparent',
                color: activeTab === idx ? '#fff' : 'var(--color-text-secondary)',
                fontWeight: 600,
                fontSize: '15px',
                textAlign: 'left',
                cursor: 'pointer',
                transition: 'var(--transition-fast)'
              }}
              onMouseEnter={(e) => {
                if (activeTab !== idx) e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
              }}
              onMouseLeave={(e) => {
                if (activeTab !== idx) e.currentTarget.style.background = 'transparent';
              }}
            >
              {job.company}
            </button>
          ))}
        </div>

        {/* Right Details Panel */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '10px', marginBottom: '4px' }}>
              <h3 style={{ fontSize: '22px', color: '#f3f4f6' }}>
                {jobs[activeTab].role} <span style={{ color: 'var(--color-accent-purple)' }}>@ {jobs[activeTab].company}</span>
              </h3>
              <span style={{ fontSize: '13px', fontFamily: 'var(--font-mono)', color: 'var(--color-accent-cyan)' }}>
                {jobs[activeTab].period}
              </span>
            </div>
            
            <div style={{ fontSize: '14px', color: 'var(--color-text-muted)', marginBottom: '24px' }}>
              📍 {jobs[activeTab].location}
            </div>

            <ul style={{ listStyleType: 'none', display: 'flex', flexDirection: 'column', gap: '12px', paddingLeft: '0', marginBottom: '32px' }}>
              {jobs[activeTab].accomplishments.map((acc, i) => (
                <li key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', fontSize: '15px', lineHeight: '1.6', color: 'var(--color-text-secondary)' }}>
                  <span style={{ color: 'var(--color-accent-purple)', fontSize: '16px', lineHeight: '1' }}>✦</span>
                  <span>{acc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Used */}
          <div>
            <div style={{ fontSize: '11px', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '10px' }}>
              Key Technologies Deployed:
            </div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {jobs[activeTab].skillsUsed.map((skill, i) => (
                <span 
                  key={i} 
                  style={{ 
                    fontSize: '12px', 
                    background: 'rgba(34, 211, 238, 0.05)', 
                    border: '1px solid rgba(34, 211, 238, 0.15)', 
                    padding: '4px 10px', 
                    borderRadius: '8px', 
                    color: 'var(--color-accent-cyan)',
                    fontWeight: 500
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Embedded Mobile CSS */}
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 768px) {
          #experience > .glass-card {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
            padding: 24px !important;
          }
          #experience button {
            padding: 12px 14px !important;
          }
        }
      `}} />
    </section>
  );
};

export default Experience;
