import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
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
      <body className={`${inter.className} bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
