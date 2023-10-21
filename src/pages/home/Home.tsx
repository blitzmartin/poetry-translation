import { PageContainer } from '@/shared/PageContainer'
import { De, Es, Fr, Gb, It } from 'react-flags-select'
import { useTranslation } from 'react-i18next'

export const Home = () => {
  const { t } = useTranslation()
  const languageOptions = [
    { value: 'en', label: 'ENG', flag: <Gb /> },
    { value: 'it', label: 'ITA', flag: <It /> },
    { value: 'es', label: 'ESP', flag: <Es /> },
    { value: 'fr', label: 'FRA', flag: <Fr /> },
    { value: 'de', label: 'DEU', flag: <De /> }
  ]
  return (
    <PageContainer title={t('title')}>
      <div className="flex flex-col gap-4 font-serif">
        <div>
          {languageOptions.map((lang) => (
            <div key={lang.value}>{lang.flag}</div>
          ))}
        </div>
        <div className="flex flex-col gap-1">
          <p>{t('par-1')}</p>
          <p>{t('par-2')}</p>
          <p>{t('par-3')}</p>
          <p>{t('par-4')}</p>
        </div>
        <div className="flex flex-col gap-1">
          <p>{t('par-5')}</p>
          <p>{t('par-6')}</p>
          <p>{t('par-7')}</p>
          <p>{t('par-8')}</p>
        </div>
        <div className="flex flex-col gap-1">
          <p>{t('par-9')}</p>
          <p>{t('par-10')}</p>
          <p>{t('par-11')}</p>
          <p>{t('par-12')}</p>
        </div>
      </div>
    </PageContainer>
  )
}
