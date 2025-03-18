import { HomeHeroSectionRootProps } from './types'

export default function HomeHeroSectionRoot({ children }: HomeHeroSectionRootProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="container flex min-h-[calc(100vh-3.5rem)] max-w-screen-2xl flex-col items-center justify-center space-y-8 py-24 text-center md:py-32">
        {children}
      </div>
    </div>
  )
}
