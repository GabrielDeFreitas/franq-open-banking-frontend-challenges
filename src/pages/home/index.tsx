import { HeroSection } from '../../components/home-hero-section'
import { RoutesUrls } from '../../utils/enums/routes-url'

export default function HomeGeneric() {
  return (
    <HeroSection.Root>
      <HeroSection.ButtonWrapper>
        <HeroSection.Button label="Access the project repository on github" url={RoutesUrls.GITHUB} />
      </HeroSection.ButtonWrapper>
      <HeroSection.Header
        title="Lorem Ipsum"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
      />
      <HeroSection.ButtonWrapper>
        <HeroSection.Button label="Log in" url={RoutesUrls.LOGIN} />
        <HeroSection.Button label="Sign up" url={RoutesUrls.REGISTER} />
      </HeroSection.ButtonWrapper>
    </HeroSection.Root>
  )
}
