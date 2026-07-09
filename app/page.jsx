export default function Home() {
  return (
    <main className="container">
      <section className="hero">
        <h1 className="title">Jawad's Portfolio</h1>
        <p className="subtitle">
          Building state-of-the-art web experiences with modern technologies and a passion for design.
        </p>
        <a href="#" className="btn">Explore Work</a>
        
        <div className="cards">
          <div className="card">
            <h3>Modern Design</h3>
            <p>Crafting beautiful, responsive, and accessible user interfaces that leave a lasting impression.</p>
          </div>
          <div className="card">
            <h3>High Performance</h3>
            <p>Optimized for speed and efficiency, ensuring lightning-fast load times and smooth interactions.</p>
          </div>
          <div className="card">
            <h3>Scalable Architecture</h3>
            <p>Built with Next.js and React, providing a robust foundation for future growth and maintainability.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
