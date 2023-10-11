import { Header } from "./components/Header";
import { useTranslation } from '../i18n'

export default async function Home({ params }: any) {
  const { t } = await useTranslation(params.lang, 'translation');
  return (
    <>
      <Header lng={params.lng} />
      <section className="bg-ct-blue-600 min-h-screen pt-20">
        <div className="max-w-4xl mx-auto bg-ct-dark-100 rounded-md h-[20rem] flex flex-col justify-center items-center">
          <p className="text-3xl font-semibold">
            Language: {params.lang}
          </p>
          <p>
            {t('menu.home')}
          </p>
        </div>
      </section>
    </>
  );
}
