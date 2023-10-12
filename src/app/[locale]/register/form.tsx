"use client";

import { LocaleTypes } from "@/app/i18n/settings";
import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { RegisterPayload } from "./types/register";
import { useTranslation } from "@/app/i18n/client";

const defaultPayload: RegisterPayload = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

export const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState(defaultPayload);
  const [error, setError] = useState("");
  const locale = useParams()?.locale as LocaleTypes;
  const { t } = useTranslation(locale, 'common')

  const onFinish = async (values: RegisterPayload) => {
    setLoading(true);
    setFormValues(defaultPayload);
    console.log({ values })
    // try {
    //   const res = await fetch('/api/register', {
    //     method: 'POST',
    //     body: JSON.stringify(values),
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   });

    //   setLoading(false);
    //   if (!res.ok) {
    //     setError((await res.json()).message);
    //     return;
    //   }

    //   signIn(undefined, { callbackUrl: '/' });
    // } catch (error: any) {
    //   setLoading(false);
    //   setError(error);
    // }
  };

  const onFinishFailed = (e: any) => {
    console.log({ e });
  }

  
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>
        <Link href={`/${locale}`}>{t('menu.register')}</Link>
      </h1>
      <Form
        name="register-form"
        labelCol={{ span: 8 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item style={{ marginBottom: 0 }}>
          <Form.Item
            name="firstName"
            rules={[{ required: true }]}
            style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="First Name"
            />
          </Form.Item>
          <Form.Item
            name="lastName"
            rules={[{ required: true }]}
            style={{
              display: 'inline-block',
              width: 'calc(50% - 8px)',
              margin: '0 8px',
            }}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Last Name"
            />
          </Form.Item>
        </Form.Item>
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
          <Button type="primary" htmlType="submit" className="login-form-button">
            Register
          </Button>
          You have an account. <Link href={`/${locale}/login`}>Login now!</Link>
        </Form.Item>
      </Form>
    </div>
  );
};
