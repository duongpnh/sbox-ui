"use client"

import { useTranslation } from '@/app/i18n/client';
import type { LocaleTypes } from '@/app/i18n/settings';
import { MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined } from '@ant-design/icons';
import { theme, Layout, Menu } from 'antd';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import { Dispatch, SetStateAction, createElement } from 'react';
import './styles.css';
const { Header } = Layout;

interface IProps {
  collapsed: boolean;
  setCollapsed: Dispatch<SetStateAction<boolean>>;
}

const HeaderComponent = ({ collapsed, setCollapsed }: IProps) => {
  // const session = getServerSession(authOptions);
  // console.log("🚀 ~ file: index.tsx:7 ~ Header ~ session:", session)
  const pathName = usePathname();
  const locale = useParams()?.locale as LocaleTypes;
  const { t } = useTranslation(locale, 'common');
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const menuItems = [
    {
      key: `/${locale}/login`,
      label: t('menu.login'),
    },
    {
      key: `/${locale}/register`,
      label: t('menu.register'),
    },
  ];

  const renderMenuItems = () => menuItems.map(item => (
    <Menu.Item key={item.key}>
      <Link href={item.key}>{item.label}</Link>
    </Menu.Item>
  ));

  return (
    <Header className="site-layout-background" style={{ padding: 0, background: colorBgContainer, display: 'flex', justifyContent: 'space-between' }}>
      {createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: () => setCollapsed(!collapsed),
      })}
      <Menu
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={[]}
        style={{ lineHeight: '64px' }}
      >
        {renderMenuItems()}
      </Menu>
    </Header>
  );
};

export default HeaderComponent;


      // <ul className="flex items-center gap-4 order-2">
      //   <li>
      //     <Link href="/" className="text-ct-dark-600">
      //       Home
      //     </Link>
      //   </li>
      //   {
      //     <>
      //       <li>
      //         <Link
      //           href={`/${locale}/login`}
      //           className={
      //             pathName === `/${locale}` ? 'text-ct-dark-600' : ''
      //           }
      //         >
      //           {t('menu.login')}
      //         </Link>
      //       </li>
      //       <li>
      //         <Link
      //           href={`/${locale}/register`}
      //           className={
      //             pathName === `/${locale}` ? 'text-ct-dark-600' : ''
      //           }
      //         >
      //           {t('menu.register')}
      //         </Link>
      //       </li>
      //     </>
      //   }
      //   {/* {user && (
      //     <>
      //       <li>
      //         <Link href="/profile" className="text-ct-dark-600">
      //           Profile
      //         </Link>
      //       </li>
      //       <li className="cursor-pointer">
      //         Logout
      //       </li>
      //     </>
      //   )} */}
      //   <Link href="/about" locale="ar" className="text-ct-dark-600">
      //     About
      //   </Link>
      // </ul>
