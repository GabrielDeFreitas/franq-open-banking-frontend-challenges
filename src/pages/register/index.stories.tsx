import { Meta, StoryObj } from '@storybook/react'
import { MemoryRouter } from 'react-router'
import Register from '.'
import { AuthProvider } from '../../context/auth-context'

const meta: Meta<typeof Register> = {
  title: 'Pages/Register',
  component: Register,
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

type Story = StoryObj<typeof Register>

export const Default: Story = {
  render: () => <Register />
}
