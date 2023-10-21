import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './en.json'

export const resources = {
  en
} as const

i18n.use(initReactI18next).init({
  lng: 'en',
  defaultNS: 'utils',
  debug: false,
  resources
})

export default i18n
