import { ColorPreferenceProvider } from '@/providers/ColorPreferenceProvider'
import { LangProvider } from '@/providers/LangProvider'
import { Header } from '@/shared'
import { Outlet } from 'react-router'

export const AppLayout = () => {
  return (
    <LangProvider>
      <ColorPreferenceProvider>
        <Header />
        <Outlet />
      </ColorPreferenceProvider>
    </LangProvider>
  )
}
