import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { redirect } from 'next/navigation';
import LayoutComponent from '@/app/components/Layout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tenant managements',
  description: '...',
};

export default async function IndexPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/login');
  }

  return (
    <LayoutComponent>
      <h1>Tenants working</h1>
    </LayoutComponent>
  );
}
