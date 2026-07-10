export default function Contact() {
  return (
    <main className="container section-padding">
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h1 className="title-section text-center">Get in Touch</h1>
        <p className="text-muted text-center" style={{ marginBottom: '3rem' }}>
          Have a project in mind, or just want to say hi? I'd love to hear from you. 
          Fill out the form below and I'll get back to you as soon as possible.
        </p>

        <form action="https://formsubmit.co/info@jawadhakimi.com" method="POST" className="card">
          {/* Honeypot field to prevent spam */}
          <input type="text" name="_honey" style={{ display: 'none' }} />
          
          {/* Disable Captcha for cleaner UX */}
          <input type="hidden" name="_captcha" value="false" />

          {/* Success Page Redirect (Optional, we'll just let it use FormSubmit default for now) */}
          
          <div className="form-group">
            <label className="form-label" htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" className="form-input" required placeholder="John Doe" />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" className="form-input" required placeholder="john@example.com" />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="message">Your Message</label>
            <textarea id="message" name="message" className="form-textarea" required placeholder="Hello Jawad, I would like to discuss..."></textarea>
          </div>

          <button type="submit" className="btn btn-primary w-full" style={{ padding: '1rem' }}>
            Send Message
          </button>
        </form>

        <div className="text-center" style={{ marginTop: '3rem' }}>
          <p className="text-muted">Or reach out directly at:</p>
          <a href="mailto:info@jawadhakimi.com" style={{ color: 'var(--accent-color)', fontWeight: 600, textDecoration: 'none' }}>
            info@jawadhakimi.com
          </a>
        </div>
      </div>
    </main>
  );
}
