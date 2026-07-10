"use client";

import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');

  // Handle active section tracking
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 300) {
          current = section.getAttribute('id');
        }
      });
      
      if (window.scrollY < 100) current = 'home';
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Unique Logo at top left - Inline SVG to bypass CSS cache issues */}
      <div style={{ position: 'fixed', top: '1.5rem', left: '1.5rem', zIndex: 50 }}>
        <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }} aria-label="Home">
          <svg width="46" height="46" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0 4px 12px rgba(37,99,235,0.25))' }}>
            <defs>
              <linearGradient id="jhGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
            <rect width="100" height="100" rx="24" fill="rgba(255,255,255,0.8)" stroke="url(#jhGrad)" strokeWidth="4" />
            <path d="M40 35 V60 Q40 68 33 68 Q28 68 28 64" fill="none" stroke="url(#jhGrad)" strokeWidth="8" strokeLinecap="round" />
            <path d="M55 35 V65 M55 50 H75 M75 35 V65" fill="none" stroke="url(#jhGrad)" strokeWidth="8" strokeLinecap="round" />
          </svg>
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: '1.4rem', color: '#1e293b', letterSpacing: '-0.5px' }}>
            Jawad<span style={{ color: '#3b82f6' }}>.</span>
          </span>
        </a>
      </div>

      {/* Floating Bottom Dock */}
      <div className="floating-dock">
        <a href="#home" className={`dock-item ${activeSection === 'home' ? 'active' : ''}`} aria-label="Home">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
          </svg>
        </a>
        
        <a href="#about" className={`dock-item ${activeSection === 'about' ? 'active' : ''}`} aria-label="About">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
        </a>
        
        <a href="#projects" className={`dock-item ${activeSection === 'projects' ? 'active' : ''}`} aria-label="Projects">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="14" x="2" y="7" rx="2" ry="2"/>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
          </svg>
        </a>
        
        <a href="#contact" className={`dock-item ${activeSection === 'contact' ? 'active' : ''}`} aria-label="Contact">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="16" x="2" y="4" rx="2"/>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
          </svg>
        </a>
      </div>
    </>
  );
}
