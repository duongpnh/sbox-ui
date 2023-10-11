import './globals.css';
import { NextAuthProvider } from './providers';
import Header from './components/Header';
import type { Metadata } from 'next';
import StyledComponentsRegistry from '@/lib/AntdRegistry';

export const metadata: Metadata = {
  title: 'Sparrow Box',
  description: '',
};

const languages = ['en', 'ar'];

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <NextAuthProvider>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </NextAuthProvider>
      </body>
    </html>
  );
}
