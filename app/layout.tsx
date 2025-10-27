import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://archith-venkatesh.vercel.app'),
  title: 'Archith Venkatesh - Software Engineer & AI Researcher',
  description: 'Computer Science and Mathematics student at Georgia Tech. Software Engineer with experience in AI/ML, Full-Stack Development, and Data Science.',
  keywords: 'Archith Venkatesh, Software Engineer, AI Researcher, Georgia Tech, Computer Science, Mathematics, Machine Learning, Full Stack Developer',
  authors: [{ name: 'Archith Venkatesh' }],
  creator: 'Archith Venkatesh',
  publisher: 'Archith Venkatesh',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://archith-venkatesh.vercel.app',
    title: 'Archith Venkatesh - Software Engineer & AI Researcher',
    description: 'Computer Science and Mathematics student at Georgia Tech. Software Engineer with experience in AI/ML, Full-Stack Development, and Data Science.',
    siteName: 'Archith Venkatesh Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Archith Venkatesh - Software Engineer & AI Researcher',
    description: 'Computer Science and Mathematics student at Georgia Tech. Software Engineer with experience in AI/ML, Full-Stack Development, and Data Science.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen">
        {children}
      </body>
    </html>
  )
}
