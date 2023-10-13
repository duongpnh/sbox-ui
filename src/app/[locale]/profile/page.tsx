'use client';

import PageLayout from '@/app/components/PageLayout';
import { useTranslations } from 'next-intl';

export default function Secret() {
  const t = useTranslations('Secret');

  return (
    <PageLayout title={t('title')}>
      <p>{t('description')}</p>
    </PageLayout>
  );
}
