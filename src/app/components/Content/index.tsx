"use client"
import { Layout } from 'antd';
import { ReactNode } from 'react';

const { Content } = Layout;

type Props = {
  children: ReactNode;
};

const ContentComponent = ({ children }: Props) => {
  return (
    <Content
      className="site-layout-background"
      style={{
        margin: '24px 16px',
        padding: 24,
      }}
    >
      {children}
    </Content>
  );
};

export default ContentComponent;
