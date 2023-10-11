'use client'

import HeaderComponent from './HeaderComponent'
import { useTranslation } from '../../../i18n/client'

export const Header = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng, 'menu')
  return <HeaderComponent t={t} lng={lng} />
}
