import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Framer — Build beautiful products faster',
  description: 'The modern tool for teams who care about craft. Ship faster without sacrificing quality.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
