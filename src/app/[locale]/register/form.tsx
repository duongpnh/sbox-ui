'use client';

import { LocaleTypes } from '@/app/i18n/settings';
import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { ChangeEvent, useState } from 'react';
import { RegisterPayload } from './types/register';
import { useTranslation } from '@/app/i18n/client';

const defaultPayload: RegisterPayload = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

export const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState(defaultPayload);
  const [error, setError] = useState('');
  const locale = useParams()?.locale as LocaleTypes;
  const { t } = useTranslation(locale, 'common');
  const router = useRouter();

  const onFinish = async (values: RegisterPayload) => {
    setLoading(true);
    setFormValues(defaultPayload);
    console.log({ values });
    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log("🚀 ~ file: form.tsx:39 ~ onFinish ~ res:", res)

      setLoading(false);
      if (!res.ok) {
        setError((await res.json()).message);
        return;
      }

      router.push(`/${locale}/login`)
    } catch (error: any) {
      console.log("🚀 ~ file: form.tsx:48 ~ onFinish ~ error:", error)
      setLoading(false);
      setError(error);
    }
  };

  const onFinishFailed = (e: any) => {
    console.log({ e });
  };

  return (
    <div>
      <h1 className="form-title">{t('menu.register')}</h1>
      <Form
        name="register-form"
        labelCol={{ span: 8 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please input your Email!' }]}
        >
          <Input
            prefix={<MailOutlined className="site-form-item-icon" />}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Register
          </Button>
        </Form.Item>
        <span style={{ textAlign: 'center', width: '100%', marginTop: '1rem' }}>
          You have an account. <Link href={`/${locale}/login`}>Login now!</Link>
        </span>
      </Form>
    </div>
  );
};
