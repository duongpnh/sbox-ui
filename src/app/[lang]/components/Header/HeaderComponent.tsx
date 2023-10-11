import Link from "next/link";
import { languages } from "@/app/i18n/settings";
import { Dropdown, MenuProps, Space } from "antd";
import { signOut, useSession } from "next-auth/react";
import { Trans } from "react-i18next/TransWithoutContext";

interface IPropsHeaderComponent { t: any; lng: string; }

const Header = ({ t, lng }: IPropsHeaderComponent) => {
  // const { data: session } = useSession();
  // const user = session?.user;

  return (
    <header className="bg-white h-20">
      <nav className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%' }}>
        <div>
          <Link href="/" className="text-ct-dark-600 text-2xl font-semibold order-1">
            CodevoWeb
          </Link>
        </div>
        <ul className="flex items-center gap-4 order-2">
          <li>
            <Link href="/" className="text-ct-dark-600">
              Home
            </Link>
          </li>
          {(
            <>
              <li>
                <Link href="/login" className="text-ct-dark-600">
                  Login
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-ct-dark-600">
                  Register
                </Link>
              </li>
            </>
          )}
          {/* {user && (
            <>
              <li>
                <Link href="/profile" className="text-ct-dark-600">
                  Profile
                </Link>
              </li>
              <li className="cursor-pointer" onClick={() => signOut()}>
                Logout
              </li>
            </>
          )} */}
          <Link href="/about" locale="ar" className="text-ct-dark-600">
            About
          </Link>
          <li>
            <Trans i18nKey="languageSwitcher" t={t}>
              Switch from <strong>{lng}</strong> to:{' '}
            </Trans>
            {languages.filter((l) => lng !== l).map((l, index) => {
            return (
              <span key={l}>
                {index > 0 && (' or ')}
                <Link href={`/${l}`} className="text-ct-dark-600">
                  <Space>
                    {l}
                  </Space>
                </Link>
              </span>
            )
          })}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
