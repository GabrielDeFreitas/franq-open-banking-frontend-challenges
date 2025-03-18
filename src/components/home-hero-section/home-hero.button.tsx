import { Link } from 'react-router'
import { HomeHeroSectionButtonProps } from './types'

export default function HomeHeroSectionButton({ label, url }: HomeHeroSectionButtonProps) {
  return (
    <Link
      to={url}
      className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-10 px-4 py-2 w-full bg-slate-900 text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-950/10 focus:ring-offset-2"
    >
      {label}
    </Link>
  )
}
