import './globals.css'
import Navbar from '../components/Navbar'
import { Outfit, Space_Grotesk } from 'next/font/google'

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
  weight: ['300', '400', '500', '600', '700', '800']
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
  weight: ['500', '700']
})

export const metadata = {
  metadataBase: new URL('https://jawadhakimi.com'),
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
  authors: [{ name: 'Jawad Hakimi', url: 'https://jawadhakimi.com' }],
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
    canonical: 'https://jawadhakimi.com'
  },
  openGraph: {
    title: 'Jawad Hakimi | Full-Stack & WordPress Developer',
    description: 'Explore web applications, management systems, and high-performance digital experiences crafted by Jawad Hakimi.',
    url: 'https://jawadhakimi.com',
    siteName: 'Jawad Hakimi Portfolio',
    images: [
      {
        url: '/icon.svg',
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
    images: ['/icon.svg'],
    creator: '@jawad_hakimi'
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ],
    apple: '/icon.svg'
  }
}

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://jawadhakimi.com/#person',
        name: 'Jawad Hakimi',
        url: 'https://jawadhakimi.com',
        jobTitle: 'Full-Stack Developer & WordPress Specialist',
        email: 'info@jawadhakimi.com',
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
        '@id': 'https://jawadhakimi.com/#website',
        url: 'https://jawadhakimi.com',
        name: 'Jawad Hakimi Portfolio',
        publisher: { '@id': 'https://jawadhakimi.com/#person' }
      }
    ]
  }

  return (
    <html lang="en" className={`${outfit.variable} ${spaceGrotesk.variable}`}>
      <head>
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
