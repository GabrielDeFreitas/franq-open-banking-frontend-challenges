import { HomeHeroSectionHeaderProps } from './types'

export default function HomeHeroSectionHeader({ title, description }: HomeHeroSectionHeaderProps) {
  return (
    <div className="space-y-4">
      <h1 className="text-4xl font-medium text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl">{title}</h1>
      <p className="mx-auto max-w-[42rem] text-slate-500 sm:text-xl sm:leading-8">{description}</p>
    </div>
  )
}
