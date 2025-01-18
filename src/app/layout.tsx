import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import Layout from '@/components/layout';
import { QueryProvider } from '@/providers/query-provider';

export const metadata: Metadata = {
  title: 'Cashalyze - AI-Powered Cashflow Analysis',
  description: 'Analyze and optimize your cashflow with AI-powered insights',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="antialiased">
        <QueryProvider>
          <Layout>{children}</Layout>
        </QueryProvider>
      </body>
    </html>
  );
}
