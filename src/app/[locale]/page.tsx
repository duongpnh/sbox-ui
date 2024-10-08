import { getServerSession } from 'next-auth';
import Index from './Index';
import { authOptions } from '@/lib/auth';
import { redirect } from 'next/navigation';

export default async function IndexPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/login');
  }

  return <Index />;
}
