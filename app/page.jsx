"use client";

import React, { useState } from 'react';

export default function Home() {
  const [formStatus, setFormStatus] = useState('idle');
  const [isCvOpen, setIsCvOpen] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    const formData = new FormData(e.target);
    // Add Web3Forms access key
    formData.append("access_key", "cfdde8f0-0691-4ab1-8706-48973c6704f4");
    const data = Object.fromEntries(formData.entries());
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setFormStatus('success');
        e.target.reset();
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        setFormStatus('error');
        setTimeout(() => setFormStatus('idle'), 5000);
      }
    } catch (error) {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  const skills = [
    'JavaScript', 'React', 'Tailwind CSS', 'Node.js', 'Express.js', 
    'Laravel', 'PHP', 'Wordpress', 'SEO Optimization', 'Security Optimization', 
    'Woocommerce', 'Next.js', 'RestAPI', 'JWT Auth', 'MySQL', 'Git', 
    'GitHub', 'Figma', 'SQL', 'NoSQL', 'Responsive Design', 'AWS'
  ];

  const experiences = [
    {
      role: "MERN Full-Stack Developer",
      company: "Sheen Agency",
      location: "Remote",
      period: "Sep 2025 - Present",
      isCurrent: true,
      points: [
        "Build and maintain responsive web applications using React, Next.js, Node.js, Express.js, and MongoDB.",
        "Develop scalable interfaces, backend services, RESTful APIs, and optimized database structures based on project requirements.",
        "Integrate APIs, troubleshoot technical bottlenecks, and collaborate across teams to enhance system capabilities.",
        "Design and maintain MongoDB collections while supporting cloud deployment and ongoing maintenance."
      ],
      skills: ["React", "Next.js", "Node.js", "Express.js", "MongoDB", "REST APIs"]
    },
    {
      role: "WordPress & Full-Stack Developer",
      company: "Abdal Azami Ltd.",
      location: "Kabul, Afghanistan",
      period: "Mar 2026 - Aug 2026",
      isCurrent: false,
      points: [
        "Managed and improved company websites through WordPress customization and full-stack development.",
        "Customized themes and features, resolved technical issues, and improved responsiveness, usability, and speed.",
        "Administered the company's management system, including product updates, data entry, record removal, user management, and daily operations."
      ],
      skills: ["WordPress", "PHP", "Full-Stack Dev", "SEO", "System Administration"]
    },
    {
      role: "Full-Stack Developer",
      company: "Galaxy Technology",
      location: "Remote",
      period: "Jan 2026 - Apr 2026",
      isCurrent: false,
      points: [
        "Developed web applications and management-system features using PHP, Laravel, and SQL databases.",
        "Built backend functionality and database structures while supporting troubleshooting and performance improvements.",
        "Collaborated with team members to implement new features and ensure smooth, reliable system operation."
      ],
      skills: ["PHP", "Laravel", "SQL", "Database Design", "REST APIs"]
    }
  ];

  const projects = [
    {
        title: "Abdal Azami Official",
        desc: "Abdal Azami Official Website offers elegant, high-quality Skechers Shoes designed for comfort, and everyday wear.",
        tags: ["Wordpress", "Woocommerce", "SEO", "Security"],
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&auto=format&fit=crop&q=75",
        githubLink: "https://abdashoes.com/",
        liveLink: "https://abdashoes.com/"
    },
    {
        title: "Edvora Tech",
        desc: "Empowering students with flexible online learning, expert guidance, and interactive educational resources.",
        tags: ["Laravel", "PHP", "MySQL", "REST API", "JWT"],
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=75",
        githubLink: "https://edvoratech.com/",
        liveLink: "https://edvoratech.com/"
    },
    {
        title: "ACA Global Reach",
        desc: "Delivering mission-critical supplies, equipment, and global logistics solutions for government and institutional operations.",
        tags: ["Next.js", "React", "Logistics", "Procurement"],
        image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&auto=format&fit=crop&q=75",
        githubLink: "https://github.com/jawad-hakimee/aca_website",
        liveLink: "https://acaglobalreach.com/"
    },
    {
        title: "Saya Management System",
        desc: "A powerful enterprise management system designed for streamlining workflow, data tracking, and operations management.",
        tags: ["Laravel", "React", "MySQL", "Management"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=75",
        githubLink: "https://github.com/jawad-hakimee/saya-management-system",
        liveLink: "https://saya.jawadhakimi.com"
    },
    {
        title: "Alone Hijab",
        desc: "Alone Hijab Store offers elegant, high-quality hijabs designed for comfort, modesty, and everyday wear.",
        tags: ["Next.js", "JavaScript", "Tailwind"],
        image: "https://t4.ftcdn.net/jpg/04/42/52/59/360_F_442525963_7F1PYJnhv0ABoiXO6o1KSmeAKgJt0dJf.jpg",
        githubLink: "https://github.com/jawad-hakimee/Alone-Hijab",
        liveLink: "https://alone-hijab-scon.vercel.app/"
    },
    {
        title: "CodeWeekend Members",
        desc: "Community Members is a platform that helps members connect with each other and share their experiences.",
        tags: ["JavaScript", "Next.js", "Tailwind"],
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=75",
        liveLink: "https://code-weekend-community-members-2023.netlify.app/"
    },
    {
        title: "Alone Gym6",
        desc: "A modern gym website featuring workout programs, membership plans, trainer profiles, and a responsive design.",
        tags: ["JavaScript", "Next.js", "Tailwind"],
        image: "https://linkspaces.co.uk/wp-content/uploads/2024/05/gb-botanica-gym-link-spaces-slough.jpg",
        githubLink: "https://github.com/jawad-hakimee/Gym6",
        liveLink: "https://gym6-xi.vercel.app/"
    },
    {
        title: "JK Online Store",
        desc: "Provides convenient online shopping with quality products, secure transactions, and reliable customer service.",
        tags: ["React", "Tailwind"],
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=75",
        githubLink: "#",
        liveLink: "https://jk-online-store.netlify.app/"
    },
    {
        title: "Coming Soon",
        desc: "New exciting projects are on the way. Stay tuned!",
        tags: ["Future"],
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=75",
        githubLink: "#",
        liveLink: "#"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="hero-section container">
        <div className="w-full">
          <div className="hero-badge">
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e', marginRight: '6px' }}></span>
            Available for Freelance Work
          </div>
          <h1 className="hero-title">
            Hi, I'm <span className="text-gradient">Jawad Hakimi</span>.<br />
            Web Developer.
          </h1>
          <p className="hero-subtitle">
            I craft exceptionally fast, highly secure, and perfectly accessible digital experiences. 
            Transforming your ideas into premium web products.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn-primary">See My Work</a>
            <a 
              href="/Jawad_Hakimi_CV.pdf" 
              download="Jawad_Hakimi_CV.pdf" 
              className="btn-primary" 
              style={{ background: 'linear-gradient(135deg, var(--accent-1), var(--accent-2))', boxShadow: '0 10px 20px rgba(37, 99, 235, 0.25)' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '4px' }}>
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download CV
            </a>
            <button 
              type="button" 
              onClick={() => setIsCvOpen(true)} 
              className="btn-secondary"
              style={{ cursor: 'pointer' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '4px' }}>
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              View CV
            </button>
            <a href="#contact" className="btn-secondary">Get In Touch</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding container">
        <h2 className="section-title">About Me</h2>
        <div className="glass glass-card" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
            I am a Full-Stack & WordPress Developer with 4 years of experience in designing and developing modern web applications and websites.
          </p>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
            Skilled in Node.js, Express.js, MongoDB, Laravel, PHP, MySQL, JavaScript, React.js, Next.js, and WordPress.
          </p>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '2rem' }}>
            Experienced in building scalable, responsive, and user-friendly solutions, from custom business applications to eCommerce platforms, with a strong focus on performance, functionality, and client satisfaction.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)', alignItems: 'center' }}>
            <a 
              href="/Jawad_Hakimi_CV.pdf" 
              download="Jawad_Hakimi_CV.pdf" 
              className="cv-action-btn primary"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download CV (PDF)
            </a>
            <button 
              type="button" 
              onClick={() => setIsCvOpen(true)} 
              className="cv-action-btn secondary"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
              Preview CV Online
            </button>
            <a 
              href="/cv" 
              className="cv-action-btn secondary"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
              Open Full Page CV
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding container">
        <h2 className="section-title">Technical <span className="text-gradient">Skills</span></h2>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="section-padding container">
        <h2 className="section-title">Work <span className="text-gradient">Experience</span></h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="experience-card-header">
                <div>
                  <h3 className="experience-role-title">{exp.role}</h3>
                  <div className="experience-company-row">
                    <span>{exp.company}</span>
                    <span style={{ color: 'var(--border-color)' }}>•</span>
                    <span style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>{exp.location}</span>
                  </div>
                </div>
                <span className={`experience-period-badge ${exp.isCurrent ? 'current' : ''}`}>
                  {exp.isCurrent && (
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e', display: 'inline-block' }}></span>
                  )}
                  {exp.period}
                </span>
              </div>

              <ul className="experience-list">
                {exp.points.map((point, pIdx) => (
                  <li key={pIdx} className="experience-list-item">
                    {point}
                  </li>
                ))}
              </ul>

              <div className="experience-skills-row">
                {exp.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="tag" style={{ fontSize: '0.75rem', padding: '0.3rem 0.85rem' }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding container">
        <h2 className="section-title">Featured <span className="text-gradient">Projects</span></h2>
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className="project-card-new" 
              onClick={() => window.open(project.liveLink !== '#' ? project.liveLink : project.githubLink, '_blank')}
              style={{ cursor: 'pointer' }}
            >
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={`${project.title} - Project by Jawad Hakimi`} 
                  className="project-image"
                  loading="lazy"
                  decoding="async"
                  width="600"
                  height="340"
                />
                <div className="project-links">
                  {project.githubLink && project.githubLink !== '#' && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link-btn" title="View Source" onClick={(e) => e.stopPropagation()}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.5 5.5 0 0 0-1.5-3.8 5.5 5.5 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0C6.2 1.5 5 1.9 5 1.9a5.5 5.5 0 0 0-.1 3.8A5.5 5.5 0 0 0 3.5 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
                      </svg>
                    </a>
                  )}
                  {project.liveLink && project.liveLink !== '#' && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link-btn" title="View Live" onClick={(e) => e.stopPropagation()}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
                <div className="project-tags" style={{ marginTop: 'auto', marginBottom: 0 }}>
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding container" style={{ paddingBottom: '12rem' }}>
        <div className="grid md:grid-cols-2 gap-12" style={{ alignItems: 'stretch' }}>
          
          {/* Left Column: Info */}
          <div className="glass glass-card" style={{ borderRadius: '2rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '2.5rem', fontFamily: "'Space Grotesk', sans-serif" }}>
              Get In Touch
            </h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', flex: 1 }}>
              <div>
                <h4 style={{ fontWeight: 700, fontSize: '1.15rem', marginBottom: '0.35rem', color: 'var(--text-primary)', fontFamily: "'Space Grotesk', sans-serif" }}>Phone</h4>
                <a 
                  href="https://wa.me/93770127606" 
                  target="_blank" 
                  rel="noreferrer" 
                  style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s', fontWeight: 500 }}
                  onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-1)'}
                  onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                >
                  +93 770 127 606
                </a>
              </div>

              <div>
                <h4 style={{ fontWeight: 700, fontSize: '1.15rem', marginBottom: '0.35rem', color: 'var(--text-primary)', fontFamily: "'Space Grotesk', sans-serif" }}>Email</h4>
                <a 
                  href="mailto:info@jawadhakimi.com" 
                  style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s', fontWeight: 500 }}
                  onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-1)'}
                  onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                >
                  info@jawadhakimi.com
                </a>
              </div>

              <div>
                <h4 style={{ fontWeight: 700, fontSize: '1.15rem', marginBottom: '0.35rem', color: 'var(--text-primary)', fontFamily: "'Space Grotesk', sans-serif" }}>Business Hours</h4>
                <p style={{ color: 'var(--text-secondary)', fontWeight: 500, lineHeight: 1.6 }}>
                  Saturday - Thursday<br/>
                  9:00 AM - 6:00 PM
                </p>
              </div>

              <div>
                <h4 style={{ fontWeight: 700, fontSize: '1.15rem', marginBottom: '0.75rem', color: 'var(--text-primary)', fontFamily: "'Space Grotesk', sans-serif" }}>My Services</h4>
                <ul style={{ color: 'var(--text-secondary)', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontWeight: 500 }}>
                  <li>Custom Website Creation</li>
                  <li>Management Systems</li>
                  <li>Full-Stack Web Apps</li>
                  <li>WordPress Solutions</li>
                  <li>eCommerce Platforms</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="glass glass-card" style={{ borderRadius: '2rem', height: '100%' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '2.5rem', fontFamily: "'Space Grotesk', sans-serif" }}>
              Send Us A Message
            </h2>
            <form onSubmit={handleFormSubmit}>
              <input type="text" name="_honey" style={{ display: 'none' }} />
              <input type="hidden" name="_captcha" value="false" />
              
              <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontWeight: 700, marginBottom: '0.5rem', fontSize: '0.95rem', color: 'var(--text-primary)' }}>Full Name</label>
                <input type="text" id="name" name="name" className="form-input" required placeholder="Enter your full name" style={{ background: 'rgba(255, 255, 255, 0.8)', border: '1px solid var(--border-color)', borderRadius: '0.5rem', padding: '1rem 1.25rem' }} />
              </div>

              <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontWeight: 700, marginBottom: '0.5rem', fontSize: '0.95rem', color: 'var(--text-primary)' }}>Email Address</label>
                <input type="email" id="email" name="email" className="form-input" required placeholder="Enter your email address" style={{ background: 'rgba(255, 255, 255, 0.8)', border: '1px solid var(--border-color)', borderRadius: '0.5rem', padding: '1rem 1.25rem' }} />
              </div>

              <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontWeight: 700, marginBottom: '0.5rem', fontSize: '0.95rem', color: 'var(--text-primary)' }}>Company Name</label>
                <input type="text" id="company" name="company" className="form-input" placeholder="Enter company name" style={{ background: 'rgba(255, 255, 255, 0.8)', border: '1px solid var(--border-color)', borderRadius: '0.5rem', padding: '1rem 1.25rem' }} />
              </div>

              <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontWeight: 700, marginBottom: '0.5rem', fontSize: '0.95rem', color: 'var(--text-primary)' }}>Subject</label>
                <input type="text" id="subject" name="subject" className="form-input" required placeholder="Enter subject" style={{ background: 'rgba(255, 255, 255, 0.8)', border: '1px solid var(--border-color)', borderRadius: '0.5rem', padding: '1rem 1.25rem' }} />
              </div>

              <div className="form-group" style={{ marginBottom: '2rem' }}>
                <label style={{ display: 'block', fontWeight: 700, marginBottom: '0.5rem', fontSize: '0.95rem', color: 'var(--text-primary)' }}>Message</label>
                <textarea id="message" name="message" className="form-textarea" required placeholder="Tell us about your requirement" style={{ background: 'rgba(255, 255, 255, 0.8)', border: '1px solid var(--border-color)', borderRadius: '0.5rem', minHeight: '150px', padding: '1rem 1.25rem' }}></textarea>
              </div>

              <button type="submit" className="btn-primary" disabled={formStatus === 'submitting'} style={{ padding: '1rem 2.5rem', fontSize: '1.05rem', borderRadius: '0.5rem', opacity: formStatus === 'submitting' ? 0.7 : 1, cursor: formStatus === 'submitting' ? 'not-allowed' : 'pointer' }}>
                {formStatus === 'submitting' ? 'Sending...' : 'Submit Inquiry'}
              </button>

              {formStatus === 'submitting' && (
                <div style={{ color: '#16a34a', marginTop: '1rem', fontWeight: '500' }}>Submitting...</div>
              )}
              {formStatus === 'success' && (
                <div style={{ color: '#16a34a', marginTop: '1rem', fontWeight: '500' }}>Success: Your inquiry has been sent!</div>
              )}
              {formStatus === 'error' && (
                <div style={{ color: '#dc2626', marginTop: '1rem', fontWeight: '500' }}>Error: Something went wrong. Please try again.</div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* CV Quick View Modal */}
      {isCvOpen && (
        <div className="cv-modal-backdrop" onClick={() => setIsCvOpen(false)}>
          <div className="cv-modal-window" onClick={(e) => e.stopPropagation()}>
            <div className="cv-modal-header">
              <div className="cv-modal-title">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent-1)' }}>
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                Jawad Hakimi — Curriculum Vitae
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <a 
                  href="/Jawad_Hakimi_CV.pdf" 
                  download="Jawad_Hakimi_CV.pdf" 
                  className="cv-action-btn primary"
                  style={{ padding: '0.5rem 1.25rem', fontSize: '0.88rem' }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  Download PDF
                </a>
                <a 
                  href="/cv" 
                  target="_blank"
                  className="cv-action-btn secondary"
                  style={{ padding: '0.5rem 1rem', fontSize: '0.88rem' }}
                >
                  Full Page ↗
                </a>
                <button 
                  onClick={() => setIsCvOpen(false)} 
                  className="cv-modal-close-btn"
                  aria-label="Close CV Modal"
                >
                  &times;
                </button>
              </div>
            </div>

            <div className="cv-modal-body">
              <div className="cv-document" style={{ boxShadow: 'none' }}>
                
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
                      <a href="mailto:info@jawadhakimi.com">info@jawadhakimi.com</a>
                    </div>
                    <div className="cv-links-row">
                      <a href="https://jawadhakimi.com" target="_blank" rel="noreferrer">jawadhakimi.com</a>
                      <span className="separator">•</span>
                      <a href="https://github.com/jawad-hakimee" target="_blank" rel="noreferrer">github.com/jawad-hakimee</a>
                    </div>
                  </div>
                </header>

                {/* Body 2 Columns */}
                <div className="cv-body-grid">
                  
                  {/* Left Column */}
                  <aside className="cv-left-col">
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

                    <section className="cv-section">
                      <h2 className="cv-section-title">LANGUAGES</h2>
                      <ul className="cv-bullet-list">
                        <li><strong>Dari:</strong> Native</li>
                        <li><strong>Pashto:</strong> Proficient (C2)</li>
                        <li><strong>English:</strong> Upper-Intermediate (B2)</li>
                      </ul>
                    </section>

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
                    <section className="cv-section">
                      <h2 className="cv-section-title">PROFESSIONAL PROFILE</h2>
                      <p className="cv-profile-text">
                        Full-Stack Developer with hands-on experience building and maintaining responsive websites and web applications using React, Next.js, Node.js, Express.js, MongoDB, WordPress, PHP, and Laravel. Skilled in API integration, database management, troubleshooting, deployment, and performance optimization. Comfortable translating business requirements into reliable, user-friendly digital products in both office and remote environments.
                      </p>
                    </section>

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

                    <section className="cv-section">
                      <h2 className="cv-section-title">SELECTED PROJECTS</h2>
                      
                      <div className="cv-project-item">
                        <h3 className="cv-project-heading">
                          <strong>Portfolio Website</strong> | Official Portfolio | Next.js | <a href="https://jawadhakimi.com" target="_blank" rel="noreferrer">jawadhakimi.com</a>
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
                  MORE PROJECTS & CODE | <a href="https://jawadhakimi.com">jawadhakimi.com</a> | <a href="mailto:info@jawadhakimi.com">info@jawadhakimi.com</a>
                </footer>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
