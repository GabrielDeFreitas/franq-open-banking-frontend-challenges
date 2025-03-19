import { Meta, StoryObj } from '@storybook/react'
import { Auth } from './index'
import { MemoryRouter } from 'react-router'

export default {
  title: 'Components/Auth',
  component: Auth.Root,
  subcomponents: {
    Label: Auth.Label,
    Header: Auth.Header,
    Footer: Auth.Footer,
    Content: Auth.Content,
    Input: Auth.Input,
    Breadcrumb: Auth.Breadcrumb
  }
} as Meta

export const Root: StoryObj = {
  render: () => (
    <Auth.Root>
      <Auth.Header title="Login" description="Enter your credentials" />
      <Auth.Content>
        <Auth.Label text="Email" htmlFor="email">
          <Auth.Input id="email" type="email" placeholder="Enter your email" />
        </Auth.Label>
        <Auth.Label text="Password" htmlFor="password">
          <Auth.Input id="password" type="password" placeholder="Enter your password" />
        </Auth.Label>
        <Auth.Footer type="submit" label="Log in" />
      </Auth.Content>
    </Auth.Root>
  )
}

export const Header: StoryObj = {
  render: () => <Auth.Header title="Login" description="Enter your credentials" />
}

export const Label: StoryObj = {
  render: () => (
    <Auth.Label text="Email" htmlFor="email">
      <Auth.Input id="email" type="email" placeholder="Enter your email" />
    </Auth.Label>
  )
}

export const Input: StoryObj = {
  render: () => <Auth.Input id="email" type="email" placeholder="Enter your email" />
}

export const Footer: StoryObj = {
  render: () => <Auth.Footer type="submit" label="Log in" />
}

export const Breadcrumb: StoryObj = {
  render: () => (
    <MemoryRouter>
      <Auth.Breadcrumb localPath="Login" />
    </MemoryRouter>
  )
}
