"use client"

import { UserOutlined, UsergroupAddOutlined } from "@ant-design/icons";
import { Menu, Layout } from "antd";
import './styles.css';
import { useParams } from "next/navigation";
import { LocaleTypes } from "@/app/i18n/settings";
import { useTranslation } from "@/app/i18n/client";

const { Sider } = Layout;

interface IPropsSidebar {
  collapsed: boolean;
}

const Sidebar = ({ collapsed }: IPropsSidebar) => {
  const locale = useParams()?.locale as LocaleTypes;
  const { t } = useTranslation(locale, 'sidebar');
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        items={[
          {
            key: '1',
            icon: <UsergroupAddOutlined />,
            label: t('tenants'),
          },
          {
            key: '2',
            icon: <UserOutlined />,
            label: t('users'),
          },
        ]}
      />
    </Sider>
  )
};

export default Sidebar;
