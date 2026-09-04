import './globals.css'
import Navbar from '../components/Navbar'

export const metadata = {
  metadataBase: new URL('https://portfolio-dvmb.vercel.app'),
  title: {
    default: 'Jawad Hakimi | Full-Stack & WordPress Developer',
    template: '%s | Jawad Hakimi'
  },
  description: 'Jawad Hakimi is a Full-Stack & WordPress Developer specializing in React, Next.js, Node.js, Express, MongoDB, Laravel, PHP, and high-performance modern web applications.',
  keywords: [
    'Jawad Hakimi',
    'Full-Stack Developer',
    'WordPress Developer',
    'Next.js Developer',
    'React Developer',
    'Node.js Developer',
    'Laravel Developer',
    'Web Developer Kabul',
    'Frontend Developer',
    'Backend Developer',
    'MERN Stack Developer',
    'Freelance Web Developer'
  ],
  authors: [{ name: 'Jawad Hakimi', url: 'https://portfolio-dvmb.vercel.app' }],
  creator: 'Jawad Hakimi',
  publisher: 'Jawad Hakimi',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  alternates: {
    canonical: 'https://portfolio-dvmb.vercel.app'
  },
  openGraph: {
    title: 'Jawad Hakimi | Full-Stack & WordPress Developer',
    description: 'Explore web applications, management systems, and high-performance digital experiences crafted by Jawad Hakimi.',
    url: 'https://portfolio-dvmb.vercel.app',
    siteName: 'Jawad Hakimi Portfolio',
    images: [
      {
        url: '/favicon.svg',
        width: 800,
        height: 800,
        alt: 'Jawad Hakimi - Full-Stack Developer'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jawad Hakimi | Full-Stack & WordPress Developer',
    description: 'Full-Stack & WordPress Developer building fast, secure, and modern web applications.',
    images: ['/favicon.svg'],
    creator: '@jawad_hakimi'
  }
}

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://portfolio-dvmb.vercel.app/#person',
        name: 'Jawad Hakimi',
        url: 'https://portfolio-dvmb.vercel.app',
        jobTitle: 'Full-Stack Developer & WordPress Specialist',
        email: 'jawadhakimee1401@gmail.com',
        sameAs: [
          'https://github.com/jawad-hakimee',
          'https://wa.me/93770127606'
        ],
        knowsAbout: [
          'JavaScript', 'React', 'Next.js', 'Node.js', 'Express.js',
          'Laravel', 'PHP', 'WordPress', 'MongoDB', 'MySQL', 'REST API'
        ]
      },
      {
        '@type': 'WebSite',
        '@id': 'https://portfolio-dvmb.vercel.app/#website',
        url: 'https://portfolio-dvmb.vercel.app',
        name: 'Jawad Hakimi Portfolio',
        publisher: { '@id': 'https://portfolio-dvmb.vercel.app/#person' }
      }
    ]
  }

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        
        {children}

        <footer className="footer container">
          <p>&copy; {new Date().getFullYear()} Jawad Hakimi. Crafted with precision.</p>
        </footer>
      </body>
    </html>
  )
}
