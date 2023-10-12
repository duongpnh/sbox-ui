"use client"
import { useTranslation } from '@/app/i18n/client';
import { LocaleTypes } from '@/app/i18n/settings';
import { Layout } from 'antd';
import { useParams } from 'next/navigation';

const { Content } = Layout;

const ContentComponent = () => {
  const locale = useParams()?.locale as LocaleTypes;
  const { t } = useTranslation(locale, 'common');

  return (
    <Content
      className="site-layout-background"
      style={{
        margin: '24px 16px',
        padding: 24,
      }}
    >
      <section className="bg-ct-blue-600 min-h-screen pt-20">
        <div className="max-w-4xl mx-auto bg-ct-dark-100 rounded-md h-[20rem] flex flex-col justify-center items-center">
          <p className="text-3xl font-semibold">Language: {locale}</p>
          <p>{t('menu.home')}</p>
        </div>
      </section>
    </Content>
  )
}

export default ContentComponent;
