import { Meta, StoryObj } from '@storybook/react'
import { MemoryRouter } from 'react-router'
import Login from '.'
import { AuthProvider } from '../../context/auth-context'

const meta: Meta<typeof Login> = {
  title: 'Pages/Login',
  component: Login,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <AuthProvider>
          <Story />
        </AuthProvider>
      </MemoryRouter>
    )
  ]
}

export default meta

type Story = StoryObj<typeof Login>

export const Default: Story = {
  render: () => <Login />
}
