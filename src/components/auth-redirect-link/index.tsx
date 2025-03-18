import { Link } from 'react-router'
import { AuthRedirectLinkProps } from './types'

export default function AuthRedirectLink({ label, text, url }: AuthRedirectLinkProps) {
  return (
    <p className="p-2 flex items-center justify-center gap-1 text-center text-sm text-gray-600">
      {text}
      <Link
        to={url}
        className="font-medium text-slate-900 hover:text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-950/10 focus:ring-offset-2"
      >
        {label}
      </Link>
    </p>
  )
}
