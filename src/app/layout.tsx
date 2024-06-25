import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import { Footer } from '@/components/sections/Footer';
import { GetInContact } from '@/components/sections/GetInContact';
import { AccessibilityHeader } from '@/components/sections/AccessibilityHeader';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AccessibilityHeader />
        {children}
        <GetInContact />
        <Footer />
      </body>
    </html>
  );
}
