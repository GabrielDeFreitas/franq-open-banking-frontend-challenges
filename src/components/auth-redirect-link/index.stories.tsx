import { Meta, StoryObj } from '@storybook/react'
import { MemoryRouter } from 'react-router'
import AuthRedirectLink from '.'

export default {
  title: 'Components/AuthRedirectLink',
  component: AuthRedirectLink,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ]
} as Meta

export const Default: StoryObj = {
  args: {
    text: "Don't have an account?",
    label: 'Sign up',
    url: '/register'
  },
  render: (args) => <AuthRedirectLink url={'/register'} label={''} text={''} {...args} />
}
