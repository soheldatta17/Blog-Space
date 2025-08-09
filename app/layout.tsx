import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BlogSpace - Modern Tech Blog',
  description: 'Discover cutting-edge web development tutorials, best practices, and insights from industry experts.',
  keywords: ['web development', 'programming', 'tutorials', 'React', 'JavaScript', 'Next.js'],
  authors: [{ name: 'BlogSpace Team' }],
  openGraph: {
    title: 'BlogSpace - Modern Tech Blog',
    description: 'Discover cutting-edge web development tutorials, best practices, and insights from industry experts.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BlogSpace - Modern Tech Blog',
    description: 'Discover cutting-edge web development tutorials, best practices, and insights from industry experts.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}