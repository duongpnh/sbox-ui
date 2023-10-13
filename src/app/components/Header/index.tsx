"use client"

import { useTranslation } from '@/app/i18n/client';
import type { LocaleTypes } from '@/app/i18n/settings';
import { MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined } from '@ant-design/icons';
import { theme, Layout, Menu } from 'antd';
import Link from 'next/link';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { Dispatch, SetStateAction, createElement } from 'react';
import './styles.css';
import { signOut } from 'next-auth/react';
import { MenuItemType, ItemType } from 'antd/es/menu/hooks/useItems';
import { useTranslations } from 'next-intl';
const { Header } = Layout;

interface IProps {
  collapsed: boolean;
  setCollapsed: Dispatch<SetStateAction<boolean>>;
}

const HeaderComponent = ({ collapsed, setCollapsed }: IProps) => {
  const locale = useParams()?.locale as LocaleTypes;
  const t = useTranslations('header');
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const router = useRouter();

  const menuItems: ItemType<MenuItemType>[] | undefined = [
    {
      key: `/${locale}/login`,
      label: t('login'),
    },
    {
      key: `/${locale}/register`,
      label: t('register'),
    },
    {
      key: `/${locale}/logout`,
      label: t('logout'),
    },
  ];

  const onClickOnMenuItem = (item: Record<string, any>) => {
    if (item.key.includes('logout')) {
      signOut();
    } else {
      router.push(item.key);
    }
  };


  const onLogoutClick = () => {
    signOut();
  };

  // const renderMenuItems = () => menuItems.map(item => (
  //   <Menu.Item key={item.key}>
  //     <Link href={item.key}>{item.label}</Link>
  //   </Menu.Item>
  // ));

  return (
    <Header className="site-layout-background" style={{ padding: 0, background: colorBgContainer, display: 'flex', justifyContent: 'space-between' }}>
      {createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: () => setCollapsed(!collapsed),
      })}
      <Menu
        onClick={onClickOnMenuItem}
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={[]}
        style={{ lineHeight: '64px' }}
        items={menuItems}
      />
    </Header>
  );
};

export default HeaderComponent;
