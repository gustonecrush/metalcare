import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MetalCare - Medical and Metal Health Care',
  description: 'Empower student health and well-being with doctors, psychologists, and peer counselors. We offer tailored medical services and emotional support to address the unique challenges students face. Prioritize your health and emotional well-being as a student – start your journey to a happier, healthier student life today',
  authors: [{ name: 'A Farhan Agustiansyah', url: 'https://linkedin.com/in/farhantsyh' }],
  keywords: ['Psychologist', 'Student counseling', 'Mental health services', 'Medical care', 'Peer counseling', 'Indonesia healthcare', 'Therapist', 'Student well-being', 'Psychiatry', 'Student support', 'Mental wellness', 'Healthcare in Indonesia', 'Counseling', 'Student mental health', 'Medical facilities', 'Peer support', 'Hospital care', 'Mental health resources', 'Health practicioners', 'Student stress management'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={plusJakartaSans.className}>{children}</body>
    </html>
  )
}
