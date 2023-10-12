"use client"

import { useState } from 'react';
import { Layout } from 'antd';
import HeaderComponent from '../Header';
import ContentComponent from '../Content';
import Sidebar from '../Sidebar';

const LayoutComponent = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (

    <Layout className="layout">
      <Sidebar collapsed={collapsed} />
      <Layout className="site-layout">
        <HeaderComponent collapsed={collapsed} setCollapsed={setCollapsed} />
        <ContentComponent />
      </Layout>
    </Layout>
  )
}

export default LayoutComponent;
