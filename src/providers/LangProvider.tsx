import { ReactNode, createContext, useContext, useState } from 'react'

type LangContextType = {
  selectedLanguage: string
  changeLanguage: (language: string) => void
}

const LangContext = createContext<LangContextType | undefined>(undefined)

type LangProviderProps = {
  children: ReactNode
}

export const LangProvider = ({ children }: LangProviderProps) => {
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
  if (context === undefined) {
    throw new Error('useLang must be used within a LangProvider')
  }
  return context
}
