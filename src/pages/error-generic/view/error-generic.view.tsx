import { Box, ButtonPrimary, ErrorFeedbackScreen, ResponsiveLayout } from '@telefonica/mistica'
import { ErrorGenericProps } from '../types'

export default function ErrorGenericView({ goToHome }: ErrorGenericProps) {
  return (
    <ResponsiveLayout dataAttributes={{ layout: 'error-generic' }}>
      <Box role="group" aria-label="Error feedback screen">
        <ErrorFeedbackScreen
          title="Error"
          description="Something went wrong. Please try again later."
          primaryButton={<ButtonPrimary onPress={goToHome}>Retry</ButtonPrimary>}
        />
      </Box>
    </ResponsiveLayout>
  )
}
