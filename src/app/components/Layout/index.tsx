"use client"

import { useState } from 'react';
import { Layout } from 'antd';
import { ReactNode } from 'react';
import HeaderComponent from '../Header';
import ContentComponent from '../Content';
import Sidebar from '../Sidebar';
import './styles.css';

type Props = {
  children: ReactNode;
};

const LayoutComponent = ({ children }: Props) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className="layout">
      <Sidebar collapsed={collapsed} />
      <Layout className="site-layout">
        <HeaderComponent collapsed={collapsed} setCollapsed={setCollapsed} />
        <ContentComponent>{children}</ContentComponent>
      </Layout>
    </Layout>
  );
};

export default LayoutComponent;
