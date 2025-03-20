import { Link } from 'react-router'
import { RoutesUrls } from '../../utils/enums/routes-url'

interface ErrorPageProps {
  message: string
}

export default function ErrorPage({ message }: ErrorPageProps) {
  return (
    <div className="grid h-screen place-content-center bg-white px-4">
      <div className="text-center">
        <h1 className="text-9xl font-black text-gray-200">Error</h1>
        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Uh-oh!</p>
        <p className="mt-4 text-gray-500">{message}</p>
        <Link
          to={RoutesUrls.BASE_URL}
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-10 px-4 py-2 w-full bg-slate-900 text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-950/10 focus:ring-offset-2"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  )
}
