"use client";

import React from 'react';
import Link from 'next/link';

export default function CVPage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <main className="cv-page-wrapper">
      {/* Top Floating Control Bar */}
      <div className="cv-actions-bar container no-print">
        <Link href="/" className="cv-action-btn secondary">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back to Portfolio
        </Link>
        <div className="cv-actions-right">
          <button onClick={handlePrint} className="cv-action-btn secondary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 6 2 18 2 18 9"></polyline>
              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
              <rect x="6" y="14" width="12" height="8"></rect>
            </svg>
            Print / Save as PDF
          </button>
          <a href="/Jawad_Hakimi_CV.pdf" download="Jawad_Hakimi_CV.pdf" className="cv-action-btn primary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Download PDF
          </a>
        </div>
      </div>

      {/* Printable / Viewable CV Sheet */}
      <div className="cv-paper-container">
        <div className="cv-document">
          
          {/* Header Banner */}
          <header className="cv-header">
            <div className="cv-header-content">
              <h1 className="cv-name">JAWAD HAKIMI</h1>
              <p className="cv-headline">FULL-STACK DEVELOPER</p>
              <div className="cv-contact-row">
                <span>Kabul, Afghanistan</span>
                <span className="separator">•</span>
                <a href="tel:+93770127606">+93 770 127 606</a>
                <span className="separator">•</span>
                <a href="mailto:jawadhakimee1401@gmail.com">jawadhakimee1401@gmail.com</a>
              </div>
              <div className="cv-links-row">
                <a href="https://portfolio-dvmb.vercel.app" target="_blank" rel="noreferrer">portfolio-dvmb.vercel.app</a>
                <span className="separator">•</span>
                <a href="https://github.com/jawad-hakimee" target="_blank" rel="noreferrer">github.com/jawad-hakimee</a>
              </div>
            </div>
          </header>

          {/* Body Content 2 Columns */}
          <div className="cv-body-grid">
            
            {/* Left Column */}
            <aside className="cv-left-col">
              
              {/* Core Skills */}
              <section className="cv-section">
                <h2 className="cv-section-title">CORE SKILLS</h2>
                
                <div className="cv-skill-group">
                  <h3 className="cv-skill-heading">Frontend</h3>
                  <ul className="cv-bullet-list">
                    <li>HTML5, CSS, JavaScript</li>
                    <li>React, Next.js</li>
                    <li>Tailwind CSS</li>
                    <li>Responsive Web Design</li>
                  </ul>
                </div>

                <div className="cv-skill-group">
                  <h3 className="cv-skill-heading">Backend</h3>
                  <ul className="cv-bullet-list">
                    <li>Node.js, Express.js</li>
                    <li>PHP, Laravel (basic)</li>
                    <li>REST API integration</li>
                  </ul>
                </div>

                <div className="cv-skill-group">
                  <h3 className="cv-skill-heading">Data & Platforms</h3>
                  <ul className="cv-bullet-list">
                    <li>MongoDB, SQL, SQL Server</li>
                    <li>WordPress</li>
                    <li>Git, GitHub, Vercel, Hostinger</li>
                  </ul>
                </div>
              </section>

              {/* Education */}
              <section className="cv-section">
                <h2 className="cv-section-title">EDUCATION</h2>
                
                <div className="cv-edu-item">
                  <h3 className="cv-item-title">Full-Stack Development</h3>
                  <p className="cv-institution">CodeWeekend Community</p>
                  <p className="cv-date">Oct 2023 - Oct 2024</p>
                </div>

                <div className="cv-edu-item">
                  <h3 className="cv-item-title">Bachelor's Degree</h3>
                  <p className="cv-institution">Kateb University</p>
                  <p className="cv-date">Mar 2023 - Present</p>
                </div>

                <div className="cv-edu-item">
                  <h3 className="cv-item-title">High School Diploma</h3>
                  <p className="cv-institution">Istiqlal High School</p>
                  <p className="cv-date">Completed Dec 2022</p>
                </div>
              </section>

              {/* Languages */}
              <section className="cv-section">
                <h2 className="cv-section-title">LANGUAGES</h2>
                <ul className="cv-bullet-list">
                  <li><strong>Dari:</strong> Native</li>
                  <li><strong>Pashto:</strong> Proficient (C2)</li>
                  <li><strong>English:</strong> Upper-Intermediate (B2)</li>
                </ul>
              </section>

              {/* Strengths */}
              <section className="cv-section">
                <h2 className="cv-section-title">STRENGTHS</h2>
                <ul className="cv-bullet-list">
                  <li>Problem-solving</li>
                  <li>Team collaboration</li>
                  <li>Team leadership</li>
                  <li>Time management</li>
                  <li>Remote work discipline</li>
                </ul>
              </section>

            </aside>

            {/* Right Column */}
            <div className="cv-right-col">
              
              {/* Professional Profile */}
              <section className="cv-section">
                <h2 className="cv-section-title">PROFESSIONAL PROFILE</h2>
                <p className="cv-profile-text">
                  Full-Stack Developer with hands-on experience building and maintaining responsive websites and web applications using React, Next.js, Node.js, Express.js, MongoDB, WordPress, PHP, and Laravel. Skilled in API integration, database management, troubleshooting, deployment, and performance optimization. Comfortable translating business requirements into reliable, user-friendly digital products in both office and remote environments.
                </p>
              </section>

              {/* Professional Experience */}
              <section className="cv-section">
                <h2 className="cv-section-title">PROFESSIONAL EXPERIENCE</h2>
                
                <div className="cv-job-item">
                  <div className="cv-job-header">
                    <h3 className="cv-job-title">WordPress & Full-Stack Developer</h3>
                    <span className="cv-job-meta">Abdal Azami Ltd. | Kabul, Afghanistan | Mar 2026 - Aug 2026</span>
                  </div>
                  <ul className="cv-bullet-list">
                    <li>Manage and improve company websites through WordPress customization and frontend/backend development.</li>
                    <li>Customize themes and features, resolve technical issues, and improve responsiveness, usability, and performance.</li>
                    <li>Administer the company’s management system, including product updates, data entry, record removal, user management, and daily system operations.</li>
                  </ul>
                </div>

                <div className="cv-job-item">
                  <div className="cv-job-header">
                    <h3 className="cv-job-title">MERN Full-Stack Developer</h3>
                    <span className="cv-job-meta">Sheen Agency | Remote | Sep 2025 - Present</span>
                  </div>
                  <ul className="cv-bullet-list">
                    <li>Build and maintain web applications using React, Next.js, Node.js, Express.js, and MongoDB.</li>
                    <li>Develop responsive interfaces, backend services, APIs, and database structures based on project requirements.</li>
                    <li>Integrate APIs, troubleshoot defects, and collaborate with team members to improve application functionality.</li>
                    <li>Design and maintain MongoDB collections and support application deployment and ongoing maintenance.</li>
                  </ul>
                </div>

                <div className="cv-job-item">
                  <div className="cv-job-header">
                    <h3 className="cv-job-title">Full-Stack Developer</h3>
                    <span className="cv-job-meta">Galaxy Technology | Remote | Jan 2026 - Apr 2026</span>
                  </div>
                  <ul className="cv-bullet-list">
                    <li>Developed web applications and management-system features using PHP, Laravel, and SQL databases.</li>
                    <li>Built backend functionality and database structures while supporting troubleshooting and performance improvements.</li>
                    <li>Collaborated with team members to implement features and maintain smooth system operation.</li>
                  </ul>
                </div>
              </section>

              {/* Selected Projects */}
              <section className="cv-section">
                <h2 className="cv-section-title">SELECTED PROJECTS</h2>
                
                <div className="cv-project-item">
                  <h3 className="cv-project-heading">
                    <strong>Portfolio Website</strong> | Official Portfolio | Next.js | <a href="https://portfolio-dvmb.vercel.app" target="_blank" rel="noreferrer">portfolio-dvmb.vercel.app</a>
                  </h3>
                  <p className="cv-project-desc">
                    Official developer portfolio presenting additional projects, technical skills, services, live demonstrations, and detailed information about my web-development experience.
                  </p>
                </div>

                <div className="cv-project-item">
                  <h3 className="cv-project-heading">
                    <strong>Abdal Azami Official Website</strong> | WordPress | PHP | Responsive Design | <a href="https://abdashoes.com" target="_blank" rel="noreferrer">abdashoes.com</a>
                  </h3>
                  <p className="cv-project-desc">
                    Maintained and optimized a customer-facing retail website through theme customization, product and content management, troubleshooting, responsive improvements, and regular operational updates.
                  </p>
                </div>

                <div className="cv-project-item">
                  <h3 className="cv-project-heading">
                    <strong>EdvoraTech</strong> | Education Platform | Responsive Web | <a href="https://edvoratech.com" target="_blank" rel="noreferrer">edvoratech.com</a>
                  </h3>
                  <p className="cv-project-desc">
                    Built a responsive educational platform featuring course discovery, teacher and student accounts, events, learning roadmaps, progress-focused content, and community resources.
                  </p>
                </div>

                <div className="cv-project-item">
                  <h3 className="cv-project-heading">
                    <strong>ACA US Procurement Website</strong> | Next.js | Vercel | <a href="https://acaglobalreach.com/" target="_blank" rel="noreferrer">acaglobalreach.com</a>
                  </h3>
                  <p className="cv-project-desc">
                    Built a responsive corporate procurement website with reusable React components, mobile navigation, service and past-performance pages, and deployment through GitHub and Vercel.
                  </p>
                </div>

                <div className="cv-project-item">
                  <h3 className="cv-project-heading">
                    <strong>Alone Hijab Web Interface</strong> | Next.js | React | Responsive UI | <a href="https://alone-hijab-scon.vercel.app/" target="_blank" rel="noreferrer">alone-hijab-scon.vercel.app</a>
                  </h3>
                  <p className="cv-project-desc">
                    Developed responsive storefront pages, navigation, hero sections, category-focused layouts, and reusable components for a modern fashion and e-commerce website concept.
                  </p>
                </div>

              </section>

            </div>
          </div>

          {/* Footer Bar */}
          <footer className="cv-footer">
            MORE PROJECTS & CODE | <a href="https://portfolio-dvmb.vercel.app">portfolio-dvmb.vercel.app</a> | <a href="mailto:jawadhakimee1401@gmail.com">jawadhakimee1401@gmail.com</a>
          </footer>

        </div>
      </div>
    </main>
  );
}
