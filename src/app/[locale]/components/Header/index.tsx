"use client"
import { useTranslation } from '@/app/i18n/client';
import type { LocaleTypes } from '@/app/i18n/settings';
// import { authOptions } from '@/lib/auth';
// import { getServerSession } from 'next-auth/next';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';

const Header = () => {
  // const session = getServerSession(authOptions);
  // console.log("🚀 ~ file: index.tsx:7 ~ Header ~ session:", session)
  const pathName = usePathname();
  const locale = useParams()?.locale as LocaleTypes;
  const { t } = useTranslation(locale, 'common');

  return (
    <header className="bg-white h-20">
      <nav
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '100%',
        }}
      >
        <div>
          <Link
            href="/"
            className="text-ct-dark-600 text-2xl font-semibold order-1"
          >
            CodevoWeb
          </Link>
        </div>
        <ul className="flex items-center gap-4 order-2">
          <li>
            <Link href="/" className="text-ct-dark-600">
              Home
            </Link>
          </li>
          {
            <>
              <li>
                <Link
                  href={`/${locale}/login`}
                  className={
                    pathName === `/${locale}` ? 'text-ct-dark-600' : ''
                  }
                >
                  {t('menu.login')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/register`}
                  className={
                    pathName === `/${locale}` ? 'text-ct-dark-600' : ''
                  }
                >
                  {t('menu.register')}
                </Link>
              </li>
            </>
          }
          {/* {user && (
            <>
              <li>
                <Link href="/profile" className="text-ct-dark-600">
                  Profile
                </Link>
              </li>
              <li className="cursor-pointer">
                Logout
              </li>
            </>
          )} */}
          <Link href="/about" locale="ar" className="text-ct-dark-600">
            About
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
