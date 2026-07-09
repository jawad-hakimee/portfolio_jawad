import './globals.css'

export const metadata = {
  title: 'Modern Next.js App',
  description: 'A beautiful one-page application built with Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
