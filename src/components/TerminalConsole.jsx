import React, { useState, useRef, useEffect } from 'react';

const TerminalConsole = () => {
  const [history, setHistory] = useState([
    { type: 'input', text: 'welcome' },
    { type: 'output', text: 'Initializing Piyush_Paste_Portfolio_Console v3.0.0...' },
    { type: 'output', text: 'Type "help" to see list of available commands.' },
  ]);
  const [inputVal, setInputVal] = useState('');
  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  useEffect(() => {
    focusInput();
  }, []);

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const trimmedCmd = inputVal.trim().toLowerCase();
      const currentHistory = [...history, { type: 'input', text: trimmedCmd || '' }];

      if (!trimmedCmd) {
        setHistory(currentHistory);
        setInputVal('');
        return;
      }

      let outputs = [];

      switch (trimmedCmd) {
        case 'help':
          outputs = [
            'Available commands:',
            '  about     - Brief bio of Piyush Paste',
            '  skills    - Visual skills bars & proficiency',
            '  projects  - Featured coding accomplishments',
            '  contact   - Professional contact coordinates',
            '  socials   - Social handles and link aliases',
            '  clear     - Wipe console screen',
          ];
          break;
        case 'about':
          outputs = [
            'Name: Piyush Paste',
            'Role: Web Developer & Designer',
            'Education: Bachelor of Computer Application (BCA), Tilak Maharashtra University, Pune (GPA: 6.53)',
            'Mission: Crafting responsive web experiences and application structures using HTML, CSS, JavaScript, and React.',
            'Interest: UI components, frontend animations, data grids, and database modeling.',
          ];
          break;
        case 'skills':
          outputs = [
            'Core Stack & Competencies:',
            '  React.js & JavaScript  [████████████████░░░░] 80%',
            '  HTML5 & CSS3/Bootstrap [████████████████████] 95%',
            '  Tailwind CSS & Git     [████████████████░░░░] 80%',
            '  C, C++, Java & Android [██████████████░░░░░░] 70%',
            '  Databases (SQL/MongoDB)[██████████████░░░░░░] 70%',
            '  Linux & Command Line   [████████████████░░░░] 80%',
          ];
          break;
        case 'projects':
          outputs = [
            'Featured Projects:',
            '  1. QuickFund - A medical emergency fund management system for employees. Offers request status tracking and notifications.',
            '  2. E-commerce Fashion sales platform - Built with HTML, CSS, JS, and Bootstrap.',
            '  3. E-commerce Blogging site - Built with React.js, HTML, CSS, and Bootstrap.',
            'Type "projects" inside the webpage scroll layout below to see full details.'
          ];
          break;
        case 'contact':
          outputs = [
            'Let\'s Collaborate:',
            '  Email: piyushpaste7@gmail.com',
            '  Phone: +91 7796835783',
            '  Address: Narayan Peth, Pune 411030',
            '  Status: Open to frontend and full-stack web developer opportunities.',
          ];
          break;
        case 'socials':
          outputs = [
            'Follow my work:',
            '  GitHub: github.com/piyushpaste',
            '  LinkedIn: linkedin.com/in/piyush-paste',
          ];
          break;
        case 'clear':
          setHistory([]);
          setInputVal('');
          return;
        default:
          outputs = [`Command not found: "${trimmedCmd}". Type "help" to see options.`];
      }

      setHistory([...currentHistory, ...outputs.map(txt => ({ type: 'output', text: txt }))]);
      setInputVal('');
    }
  };

  return (
    <div 
      className="glass-card" 
      onClick={focusInput} 
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '14px',
        padding: '0px',
        border: '1px solid rgba(139, 92, 246, 0.2)',
        backgroundColor: '#0a0a0f',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-glow)',
        cursor: 'text',
        textAlign: 'left'
      }}
    >
      {/* Terminal Title Bar */}
      <div 
        style={{
          background: '#13131c',
          padding: '12px 16px',
          display: 'flex',
          alignItems: 'center',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
          gap: '8px',
          userSelect: 'none'
        }}
      >
        <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56', display: 'inline-block' }} />
        <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e', display: 'inline-block' }} />
        <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f', display: 'inline-block' }} />
        <span 
          style={{ 
            color: '#6b7280', 
            marginLeft: 'auto', 
            fontSize: '12px', 
            fontWeight: 500,
            fontFamily: 'var(--font-sans)',
            letterSpacing: '0.5px' 
          }}
        >
          visitor@piyushpaste:~
        </span>
      </div>

      {/* Terminal Content Screen */}
      <div 
        style={{
          padding: '20px',
          minHeight: '280px',
          maxHeight: '360px',
          overflowY: 'auto',
          lineHeight: '1.7',
          color: '#e5e7eb'
        }}
      >
        {history.map((line, idx) => (
          <div key={idx} style={{ marginBottom: line.type === 'input' ? '8px' : '4px' }}>
            {line.type === 'input' ? (
              <div>
                <span style={{ color: 'var(--color-accent-cyan)', marginRight: '8px' }}>visitor@piyushpaste:~$</span>
                <span>{line.text}</span>
              </div>
            ) : (
              <div 
                style={{ 
                  color: line.text.includes('[████████████') ? 'var(--color-accent-purple)' : '#d1d5db',
                  whiteSpace: 'pre-wrap'
                }}
              >
                {line.text}
              </div>
            )}
          </div>
        ))}

        {/* Input Prompter */}
        <div style={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>
          <span style={{ color: 'var(--color-accent-cyan)', marginRight: '8px' }}>visitor@piyushpaste:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleCommand}
            autoComplete="off"
            spellCheck="false"
            style={{
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: 'var(--color-text-primary)',
              fontFamily: 'var(--font-mono)',
              fontSize: '14px',
              flexGrow: 1,
              caretColor: 'var(--color-accent-purple)',
              padding: 0,
              margin: 0
            }}
          />
        </div>
        <div ref={terminalEndRef} />
      </div>
    </div>
  );
};

export default TerminalConsole;
