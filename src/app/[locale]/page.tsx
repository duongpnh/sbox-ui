/* eslint-disable react-hooks/rules-of-hooks */
import { useParams } from 'next/navigation';
import { useTranslation } from '../i18n'
import { LocaleTypes } from "../i18n/settings";
// import Header from './components/Header';
import { Metadata } from 'next';
import LayoutComponent from './components/Layout';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Dashboard des'
}

export default function Home({ params: { locale } }: { params: { locale: LocaleTypes } }) {

  
  return (<LayoutComponent />);
}
