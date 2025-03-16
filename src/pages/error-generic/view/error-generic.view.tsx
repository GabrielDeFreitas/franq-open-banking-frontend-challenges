import { Box, ButtonPrimary, ErrorFeedbackScreen, ResponsiveLayout } from '@telefonica/mistica'
import { ErrorGenericProps } from '../types'
import { useTranslate } from '../../../utils/hooks/useTranslation'

export default function ErrorGenericView({ goToHome }: ErrorGenericProps) {
  const t = useTranslate('error_generic')
  return (
    <ResponsiveLayout dataAttributes={{ layout: 'error-generic' }}>
      <Box role="group" aria-label={t.aria_label}>
        <ErrorFeedbackScreen
          title={t.title}
          description={t.description}
          primaryButton={<ButtonPrimary onPress={goToHome}>{t.go_to_home}</ButtonPrimary>}
        />
      </Box>
    </ResponsiveLayout>
  )
}
