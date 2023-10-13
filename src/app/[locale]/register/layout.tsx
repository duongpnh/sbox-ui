import type { Metadata } from 'next';
import './styles.css';
import { Row, Col } from 'antd';

export const metadata: Metadata = {
  title: 'Register',
  description: '',
};

const languages = ['en', 'ar'];

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Row className="auth-layout">
        <Col span={12} className="auth-left-layout">
          <span>Sparrow Box</span>
        </Col>
        <Col span={12} className="auth-right-layout">
          {children}
        </Col>
      </Row>
    </main>
  );
}
