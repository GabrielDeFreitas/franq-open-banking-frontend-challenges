import { AuthWrapperProps } from './types'

export default function AuthWrapper({ children }: AuthWrapperProps) {
  return <div className="min-h-screen flex items-center justify-center bg-gray-100 flex-col gap-4 p-4">{children}</div>
}
