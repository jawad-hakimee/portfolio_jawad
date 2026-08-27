export const metadata = {
  title: 'About Me',
  description: 'Learn more about Jawad Hakimi, a Full-Stack & WordPress Developer specializing in high-performance web applications and systems.',
}

export default function About() {
  const skills = [
    'JavaScript', 'React', 'Tailwind CSS', 'Node.js', 'Express.js',
    'Laravel', 'PHP', 'Wordpress', 'SEO Optimization', 'Security Optimization',
    'Woocommerce', 'Next.js', 'RestAPI', 'JWT Auth', 'MySQL', 'Git',
    'GitHub', 'Figma', 'SQL', 'NoSQL', 'Responsive Design', 'AWS'
  ];

  return (
    <main className="container section-padding">
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 className="title-section text-center">About Me</h1>
        <div className="text-muted" style={{ marginBottom: '4rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
          <p style={{ marginBottom: '1.5rem' }}>
            I am a passionate Web Developer with over 3 years of experience in crafting beautiful and functional digital experiences. I specialize in both frontend and backend development, delivering robust solutions tailored to client needs.
          </p>
          <p>
            My approach to development is rooted in simplicity, performance, and accessibility. Whether it's a complex web application or an e-commerce platform, I ensure the final product is both highly optimized and visually perfect.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
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
            <a 
              href="/cv" 
              className="cv-action-btn secondary"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
              View Full CV
            </a>
          </div>
        </div>

        <h2 className="title-section text-center" style={{ fontSize: '1.75rem', marginBottom: '2rem' }}>Technical Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="skill-tag">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
