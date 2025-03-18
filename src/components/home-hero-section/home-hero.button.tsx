import { Link } from 'react-router'
import { HomeHeroSectionButtonProps } from './types'
import { twMerge } from 'tailwind-merge'

export default function HomeHeroSectionButton({ label, url, className, icon: Icon }: HomeHeroSectionButtonProps) {
  return (
    <Link
      to={url}
      className={twMerge(
        'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-10 px-4 py-2 w-full bg-slate-900 text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-950/10 focus:ring-offset-2',
        className
      )}
    >
      {Icon && <Icon className="w-5 h-5 text-zinc-50 mr-1" />}
      {label}
    </Link>
  )
}
