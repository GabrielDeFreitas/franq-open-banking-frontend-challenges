import { Meta, StoryObj } from '@storybook/react'
import AuthWrapper from './index'

export default {
  title: 'Components/AuthWrapper',
  component: AuthWrapper
} as Meta

export const Default: StoryObj = {
  render: () => (
    <AuthWrapper>
      <h1 className="text-lg font-bold">Auth Wrapper</h1>
      <p>This is a child component inside the AuthWrapper.</p>
    </AuthWrapper>
  )
}
