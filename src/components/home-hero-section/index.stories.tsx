import { Meta, StoryObj } from '@storybook/react'
import { HeroSection } from './index'
import { RoutesUrls } from '../../utils/enums/routes-url'
import { MemoryRouter } from 'react-router'

export default {
  title: 'Components/HeroSection',
  component: HeroSection.Root,
  subcomponents: {
    Header: HeroSection.Header,
    ButtonWrapper: HeroSection.ButtonWrapper,
    Button: HeroSection.Button
  }
} as Meta

export const Root: StoryObj = {
  render: () => (
    <MemoryRouter>
      <HeroSection.Root>
        <HeroSection.Header title="Welcome to Our Platform" description="Your journey starts here!" />
        <HeroSection.ButtonWrapper>
          <HeroSection.Button url={RoutesUrls.LOGIN} label="Get Started">
            Get Started
          </HeroSection.Button>
          <HeroSection.Button url={RoutesUrls.LOGIN} label="Learn More">
            Learn More
          </HeroSection.Button>
        </HeroSection.ButtonWrapper>
      </HeroSection.Root>
    </MemoryRouter>
  )
}

export const Header: StoryObj = {
  render: () => <HeroSection.Header title="Welcome to Our Platform" description="Your journey starts here!" />
}

export const ButtonWrapper: StoryObj = {
  render: () => (
    <MemoryRouter>
      <HeroSection.ButtonWrapper>
        <HeroSection.Button url={RoutesUrls.LOGIN} label="Get Started">
          Get Started
        </HeroSection.Button>
        <HeroSection.Button url={RoutesUrls.LOGIN} label="Learn More">
          Learn More
        </HeroSection.Button>
      </HeroSection.ButtonWrapper>
    </MemoryRouter>
  )
}

export const Button: StoryObj = {
  render: () => (
    <MemoryRouter>
      <HeroSection.Button url={RoutesUrls.LOGIN} label="Click Me" onClick={() => alert('Button clicked!')}>
        Click Me
      </HeroSection.Button>
    </MemoryRouter>
  )
}
