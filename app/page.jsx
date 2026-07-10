"use client";

import React, { useState } from 'react';

export default function Home() {
  const [formStatus, setFormStatus] = useState('idle');

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

  const projects = [
    {
        title: "Abdal Azami Official",
        desc: "Abdal Azami Official Website offers elegant, high-quality Skechers Shoes designed for comfort, and everyday wear.",
        tags: ["Wordpress", "Woocommerce", "SEO", "Security"],
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=1200&auto=format&fit=crop&q=80",
        githubLink: "https://abdashoes.com/",
        liveLink: "https://abdashoes.com/"
    },
    {
        title: "Edvora Tech",
        desc: "Empowering students with flexible online learning, expert guidance, and interactive educational resources.",
        tags: ["Laravel", "PHP", "MySQL", "REST API", "JWT"],
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&auto=format&fit=crop&q=80",
        githubLink: "https://edvoratech.com/",
        liveLink: "https://edvoratech.com/"
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
        title: "ACA US",
        desc: "ACA US provides procurement, supply chain, and logistics services for the U.S. government and its agencies.",
        tags: ["Next.js", "React", "Procurement"],
        image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=720&h=500&fit=crop&q=80",
        githubLink: "#",
        liveLink: "https://aca-website-kcrs.vercel.app/"
    },
    {
        title: "CodeWeekend Members",
        desc: "Community Members is a platform that helps members connect with each other and share their experiences.",
        tags: ["JavaScript", "Next.js", "Tailwind"],
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&auto=format&fit=crop&q=80",
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
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1974&auto=format&fit=crop",
        githubLink: "#",
        liveLink: "https://jk-online-store.netlify.app/"
    },

    {
        title: "Coming Soon",
        desc: "New exciting projects are on the way. Stay tuned!",
        tags: ["Future"],
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
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
          <div className="flex gap-4">
            <a href="#projects" className="btn-primary">See My Work</a>
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
          <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
            Experienced in building scalable, responsive, and user-friendly solutions, from custom business applications to eCommerce platforms, with a strong focus on performance, functionality, and client satisfaction.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding container">
        <h2 className="section-title">Technical <span className="text-gradient">Arsenal</span></h2>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              {skill}
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
                <img src={project.image} alt={project.title} className="project-image" />
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
    </>
  );
}
