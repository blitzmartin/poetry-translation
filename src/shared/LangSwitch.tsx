import { useLang } from '@/providers/LangProvider'
import { useTranslation } from 'react-i18next'

export const LanguageSwitch = () => {
  const { i18n } = useTranslation()
  const { selectedLanguage, changeLanguage } = useLang()

  const handleLanguageChange = (newLanguage: string) => {
    i18n.changeLanguage(newLanguage)
    changeLanguage(newLanguage)
  }

  return (
    <div>
      <label htmlFor="language-select">Select Language: </label>
      <select
        id="language-select"
        value={selectedLanguage}
        onChange={(e) => handleLanguageChange(e.target.value)}
      >
        <option value="en">ENG</option>
        <option value="it">ITA</option>
      </select>
    </div>
  )
}
