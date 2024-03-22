import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './_components/Header';
import Footer from './_components/Footer';
import Seo from './_components/Seo';
import ProgressBarProvider from './_components/_providers/ProgressBarProvider';

// const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'کرومات پلاس',
  description: 'تولید کننده سینک گرانیتی',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Seo />
      <body>
        <ProgressBarProvider>
          <Header />
          <div className="min-h-screen">{children}</div>
          <Footer />
        </ProgressBarProvider>
      </body>
    </html>
  );
}
