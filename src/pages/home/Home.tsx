import { LanguageSwitch } from '@/shared/LangSwitch'
import { PageContainer } from '@/shared/PageContainer'
import { useTranslation } from 'react-i18next'

export const Home = () => {
  /*

const { t } = useTranslation('pages', {
    keyPrefix: 'home'
  })
   */
  const { t } = useTranslation()
  return (
    <PageContainer title="Home">
      <LanguageSwitch />
      <div className="text-xl">{t('title')}</div>
      <p>
        A velit cupiditate eos debitis error et saepe aperiam et veniam
        necessitatibus eum natus molestiae. Aut galisum nemo eum nesciunt dolore
        qui optio dolorum qui voluptatem dolor et explicabo molestiae et
        consequatur repellendus ut repudiandae Quis.
      </p>
    </PageContainer>
  )
}
