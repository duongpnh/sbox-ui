"use client"

import { UploadOutlined, UserOutlined } from "@ant-design/icons";
import { Menu, Layout } from "antd";
import './styles.css';
import { Dispatch, SetStateAction } from "react";

const { Sider } = Layout;

interface IPropsSidebar {
  collapsed: boolean;
}

const Sidebar = ({ collapsed }: IPropsSidebar) => {
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
            icon: <UserOutlined />,
            label: 'nav 1',
          },
          {
            key: '2',
            icon: <UploadOutlined />,
            label: 'nav 2',
          },
        ]}
      />
    </Sider>
  )
};

export default Sidebar;
