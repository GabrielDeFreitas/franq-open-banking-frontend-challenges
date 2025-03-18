import { Meta, StoryObj } from '@storybook/react'
import { Github, KeySquare } from 'lucide-react'
import { HeroSection } from '../../components/home-hero-section'
import { RoutesUrls } from '../../utils/enums/routes-url'
import Home from './index'
import { MemoryRouter } from 'react-router'

const meta: Meta<typeof Home> = {
  title: 'Pages/Home',
  component: Home,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ]
}

export default meta

type Story = StoryObj<typeof Home>

export const Default: Story = {
  render: () => (
    <HeroSection.Root>
      <HeroSection.ButtonWrapper>
        <HeroSection.Button label="Access the project repository on github" url={RoutesUrls.GITHUB} icon={Github} />
      </HeroSection.ButtonWrapper>
      <HeroSection.Header
        title="Track Real-Time Financial Quotes"
        description="Stay updated with the latest quotes for currencies, stocks, Bitcoin, rates, and market indices."
      />
      <HeroSection.ButtonWrapper>
        <HeroSection.Button label="Log in" url={RoutesUrls.LOGIN} icon={KeySquare} />
        <HeroSection.Button
          label="Sign up"
          url={RoutesUrls.REGISTER}
          className="bg-slate-500 border-2 border-slate-500"
        />
      </HeroSection.ButtonWrapper>
    </HeroSection.Root>
  )
}
