import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import de from './de.json'
import en from './en.json'
import es from './es.json'
import fr from './fr.json'
import it from './it.json'

export const resources = {
  en,
  it,
  es,
  fr,
  de
} as const

i18n.use(initReactI18next).init({
  lng: 'en',
  defaultNS: 'utils',
  debug: false,
  resources
})

export default i18n
