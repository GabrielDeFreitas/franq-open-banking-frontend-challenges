import { Box, LoadingScreen, ResponsiveLayout } from '@telefonica/mistica'
import { useTranslate } from '../../../utils/hooks/useTranslation'

export default function LoadingScreenView() {
  const t = useTranslate('loading_screen')
  return (
    <ResponsiveLayout dataAttributes={{ layout: 'error-generic' }}>
      <Box role="group" aria-label={t.aria_label}>
        <LoadingScreen title={t.title} description={t.description} />
      </Box>
    </ResponsiveLayout>
  )
}
