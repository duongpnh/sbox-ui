/* eslint-disable react-hooks/rules-of-hooks */
import { useParams } from 'next/navigation';
import { useTranslation } from '../i18n'
import { LocaleTypes } from "../i18n/settings";

export default async function Home({ params: { locale } }: { params: { locale: LocaleTypes } }) {
  const { t } = await useTranslation(locale, 'home');
  return (
    <>
      <section className="bg-ct-blue-600 min-h-screen pt-20">
        <div className="max-w-4xl mx-auto bg-ct-dark-100 rounded-md h-[20rem] flex flex-col justify-center items-center">
          <p className="text-3xl font-semibold">Language: {locale}</p>
          <p>{t('menu.home')}</p>
        </div>
      </section>
    </>
  );
}
