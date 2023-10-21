import { PhMoon, PhSun } from '@/icons'
import { useColorPreference } from '@/providers/ColorPreferenceProvider'
import { LanguageSwitch } from '@/shared/LangSwitch'

export const Navbar = () => {
  const { colorScheme, setColorScheme } = useColorPreference()
  const toggleTheme = () => {
    const newTheme = colorScheme === 'light' ? 'dark' : 'light'
    setColorScheme(newTheme)
  }
  return (
    <div className="flex justify-between px-4 py-2">
      <LanguageSwitch />
      <button onClick={toggleTheme}>
        {colorScheme === 'light' ? (
          <PhMoon width="20px" height="20px" />
        ) : (
          <PhSun width="20px" height="20px" />
        )}
      </button>
    </div>
  )
}
