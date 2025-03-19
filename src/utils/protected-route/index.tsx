import { Navigate } from 'react-router'
import { useAuth } from '../../context/auth-context'
import { ReactNode } from 'react'
import { RoutesUrls } from '../enums/routes-url'

export function ProtectedRoute({ children }: { children: ReactNode }) {
  const { isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    return <Navigate to={RoutesUrls.LOGIN} replace />
  }

  return <>{children}</>
}
