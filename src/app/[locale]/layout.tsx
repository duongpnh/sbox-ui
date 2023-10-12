import './globals.css';
import { NextAuthProvider } from './providers';
import type { Metadata } from 'next';
import StyledComponentsRegistry from '@/lib/AntdRegistry';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export const metadata: Metadata = {
  title: 'Sparrow Box',
  description: '',
};

const languages = ['en', 'ar'];

export function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html>
      <body>
        <NextAuthProvider session={session}>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </NextAuthProvider>
      </body>
    </html>
  );
}
