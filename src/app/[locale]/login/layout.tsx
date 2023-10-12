import type { Metadata } from 'next';
import './styles.css';

export const metadata: Metadata = {
  title: 'Sign In',
  description: '',
};

const languages = ['en', 'ar'];

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className='auth-layout'>
      {children}
    </section>
  );
}
