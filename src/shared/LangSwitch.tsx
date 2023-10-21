import { useLang } from '@/providers/LangProvider'
import { useTranslation } from 'react-i18next'

export const LanguageSwitch = () => {
  const { i18n } = useTranslation()
  const { selectedLanguage, changeLanguage } = useLang()

  const languageOptions = [
    { value: 'en', label: 'ENG' },
    { value: 'it', label: 'ITA' },
    { value: 'es', label: 'ESP' },
    { value: 'fr', label: 'FRA' },
    { value: 'de', label: 'DEU' }
  ]

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
        {languageOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}
