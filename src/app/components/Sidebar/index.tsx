"use client"

import { UserOutlined, UsergroupAddOutlined } from "@ant-design/icons";
import { Menu, Layout } from "antd";
import './styles.css';
import { useParams, useRouter } from "next/navigation";
import { LocaleTypes } from "@/app/i18n/settings";
import { useTranslations } from "next-intl";

const { Sider } = Layout;

interface IPropsSidebar {
  collapsed: boolean;
}

const Sidebar = ({ collapsed }: IPropsSidebar) => {
  const t = useTranslations('sidebar');
  const router = useRouter();
  const locale = useParams()?.locale as LocaleTypes;

  const onClickSidebarItem = (item: Record<string, any>) => {
    router.push(item.key);
  };

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="inline"
        onClick={onClickSidebarItem}
        defaultSelectedKeys={['1']}
        items={[
          {
            key: `/${locale}/tenants`,
            icon: <UsergroupAddOutlined />,
            label: t('tenants'),
          },
          {
            key: `/${locale}/users`,
            icon: <UserOutlined />,
            label: t('users'),
          },
        ]}
      />
    </Sider>
  );
};

export default Sidebar;
