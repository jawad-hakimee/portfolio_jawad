import './globals.css'
import Navbar from '../components/Navbar'

export const metadata = {
  title: 'Jawad Hakimi | Premium Portfolio',
  description: 'Exceptional digital experiences.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
