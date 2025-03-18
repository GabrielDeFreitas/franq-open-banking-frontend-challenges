import { ChevronRight, Home } from 'lucide-react'
import { AuthCardBreadcrumbProps } from './types'
import { Link } from 'react-router'
import { RoutesUrls } from '../../utils/enums/routes-url'

export default function AuthCardBreadcrumb({ localPath }: AuthCardBreadcrumbProps) {
  return (
    <nav className="w-full max-w-md mx-auto text-slate-950" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        <li className="inline-flex items-center">
          <Link
            to={RoutesUrls.BASE_URL}
            className="inline-flex items-center text-sm font-medium text-slate-900 hover:text-slate-500"
          >
            <Home className="w-4 h-4 text-slate-900 mr-1" />
            Home
          </Link>
        </li>
        <li aria-current="page">
          <div className="flex items-center">
            <ChevronRight className="w-4 h-4 text-slate-900 mr-1" />
            <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">{localPath}</span>
          </div>
        </li>
      </ol>
    </nav>
  )
}
