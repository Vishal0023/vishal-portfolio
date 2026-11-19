import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Vishal Kumar — Full-Stack Developer', description: 'Vishal Kumar is a full-stack developer building thoughtful web experiences with React, Next.js, Java, Spring Boot, and AI.', robots: { index: true, follow: true }, openGraph: { title: 'Vishal Kumar — Full-Stack Developer', description: 'Thoughtful web experiences and intelligent applications.', type: 'website' } };
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) { return <html lang="en"><body>{children}</body></html>; }
