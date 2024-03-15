import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from '@/components/footer';
import { icons } from 'lucide-react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Abhyudaya - Blogs',
  description: "Blogs of Abhyudaya's portfolio.",
  icons: {
    icon: '/logo.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className=" overflow-x-hidden bg-black" lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
