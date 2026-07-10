export default function Projects() {
  const projects = [
    {
      title: 'Abdal Azami Portfolio',
      desc: 'A modern portfolio built for a client featuring smooth animations and a premium design.',
      tags: ['Next.js', 'Tailwind CSS']
    },
    {
      title: 'Edvora Tech',
      desc: 'A comprehensive platform solution requiring complex state management and seamless user interactions.',
      tags: ['React', 'Node.js', 'Express']
    },
    {
      title: 'Alone Hijab',
      desc: 'An elegant e-commerce storefront focusing on high-performance metrics and SEO.',
      tags: ['Wordpress', 'Woocommerce', 'PHP']
    }
  ];

  return (
    <main className="container section-padding">
      <h1 className="title-section text-center">Selected Works</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <div key={idx} className="card flex-col justify-between">
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{project.title}</h3>
              <p className="text-muted" style={{ marginBottom: '1.5rem' }}>{project.desc}</p>
            </div>
            <div className="flex gap-2" style={{ flexWrap: 'wrap', marginTop: 'auto' }}>
              {project.tags.map(tag => (
                <span key={tag} className="badge" style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem' }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
