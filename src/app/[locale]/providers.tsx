"use client";

import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { appWithTranslation } from 'next-i18next';

type Props = {
  children?: React.ReactNode;
  session?: Session | null;
};



export const NextAuthProvider = ({ children, session }: Props) => {
  return <SessionProvider session={session || null}>{children}</SessionProvider>;
};
