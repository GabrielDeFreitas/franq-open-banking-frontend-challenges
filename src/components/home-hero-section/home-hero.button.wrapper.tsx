import { HomeHeroSectionButtonWrapperProps } from './types'

export default function HomeHeroSectionButtonWrapper({ children }: HomeHeroSectionButtonWrapperProps) {
  return <div className="flex gap-4">{children}</div>
}
