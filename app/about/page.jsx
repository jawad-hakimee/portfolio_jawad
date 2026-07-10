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
        </div>

        <h2 className="title-section text-center" style={{ fontSize: '1.75rem', marginBottom: '2rem' }}>Technical Arsenal</h2>
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
