import { ReactNode, createContext, useContext, useState } from 'react'

type LangContextType = {
  selectedLanguage: string
  changeLanguage: (language: string) => void
}

const LangContext = createContext<LangContextType | null>(null)

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('en')

  const changeLanguage = (language: string) => {
    setSelectedLanguage(language)
  }

  return (
    <LangContext.Provider value={{ selectedLanguage, changeLanguage }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => {
  const context = useContext(LangContext)
  if (context === null) {
    throw new Error('useLang must be used within a LangProvider')
  }
  return context
}
