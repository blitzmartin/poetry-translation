import { useLang } from '@/providers/LangProvider'
import { De, Es, Fr, Gb, It } from 'react-flags-select'
import { useTranslation } from 'react-i18next'

export const LanguageSwitch = () => {
  const { i18n } = useTranslation()
  const { selectedLanguage, changeLanguage } = useLang()

  const languageOptions = [
    { value: 'en', label: 'ENG', flag: <Gb /> },
    { value: 'it', label: 'ITA', flag: <It /> },
    { value: 'es', label: 'ESP', flag: <Es /> },
    { value: 'fr', label: 'FRA', flag: <Fr /> },
    { value: 'de', label: 'DEU', flag: <De /> }
  ]

  const handleLanguageChange = (newLanguage: string) => {
    i18n.changeLanguage(newLanguage)
    changeLanguage(newLanguage)
  }

  return (
    <div>
      <label htmlFor="language-select">Select Language: </label>
      <select
        className="w-24"
        id="language-select"
        value={selectedLanguage}
        onChange={(e) => handleLanguageChange(e.target.value)}
      >
        {languageOptions.map((option) => (
          <option key={option.value} value={option.value}>
            <div className="flex gap-2">
              <div>{option.label}</div>
              <div>{option.flag}</div>
            </div>
          </option>
        ))}
      </select>
    </div>
  )
}
