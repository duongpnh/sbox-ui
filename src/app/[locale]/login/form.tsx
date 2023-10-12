"use client";

import { useSearchParams, useRouter, useParams } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { Alert, Button, Form, Input } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import Link from "next/link";
import { LocaleTypes } from "@/app/i18n/settings";
import { useTranslation } from "@/app/i18n/client";
import { signIn } from "next-auth/react";
import { login } from "@/services/auth/login.service";

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

type FieldType = {
  email?: string;
  password?: string;
};

export const LoginForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const callbackUrl = "/";
  const locale = useParams()?.locale as LocaleTypes;
  const { t } = useTranslation(locale, 'common');

  const onFinish = async (values: FieldType) => {
    try {
      setLoading(true);

      // const res = await signIn("credentials", {
      //   redirect: false,
      //   email: values.email,
      //   password: values.password,
      //   callbackUrl,
      // });
      const res = await login(
        locale,
        values.email as string,
        values.password as string,
      );

      setLoading(false);

      console.log(res);
      if (!res?.status) {
        router.push(callbackUrl);
      } else {
        setError("Invalid email or password");
      }
    } catch (e: any) {
      const error = JSON.parse(e?.message || '{}');
      console.log(
        '🚀 ~ file: form.tsx:52 ~ onFinish ~ error:',
        error.data.message,
      );
      setLoading(false);
      setError(error.data.message);
    }
  };

  return (
    <div>
      <h1 className="form-title">{t('menu.login')}</h1>
      <Form
        title="Login"
        name="login-form"
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
            style={{ width: '100%' }}
          >
            Log in
          </Button>
          <span
            style={{ textAlign: 'center', width: '100%', marginTop: '1rem' }}
          >
            You do not have an account.&nbsp;
            <Link href={`/${locale}/register`}>Register now!</Link>
          </span>
        </Form.Item>
        {error && <Alert message={error} type="error" closable />}
      </Form>
    </div>
  );
};
