import { useTranslation } from '../../../i18n'
import HeaderComponent from './HeaderComponent'

export const Header = async ({ lng }: { lng: string; }) => {
  const { t } = await useTranslation(lng, 'menu')
  return <HeaderComponent t={t} lng={lng} />
}
