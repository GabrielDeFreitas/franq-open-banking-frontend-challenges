import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { AuthState, User } from '../../service/auth-service/types'
import { AuthContextType } from './types'

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const SESSION_TIMEOUT = 1000 * 60 * 60

export function AuthProvider({ children }: { children: ReactNode }) {
  const [auth, setAuth] = useState<AuthState>(() => {
    const storedUser = localStorage.getItem('user')
    const lastActivity = localStorage.getItem('lastActivity')

    if (storedUser && lastActivity) {
      const now = Date.now()
      const lastActivityTime = parseInt(lastActivity, 10)

      if (now - lastActivityTime < SESSION_TIMEOUT) {
        return {
          user: JSON.parse(storedUser),
          isAuthenticated: true
        }
      }
    }

    return {
      user: null,
      isAuthenticated: false
    }
  })

  useEffect(() => {
    const checkSession = () => {
      const lastActivity = localStorage.getItem('lastActivity')
      if (lastActivity) {
        const now = Date.now()
        const lastActivityTime = parseInt(lastActivity, 10)

        if (now - lastActivityTime > SESSION_TIMEOUT) {
          logout()
        }
      }
    }

    const interval = setInterval(checkSession, 1000 * 60)

    const updateLastActivity = () => {
      if (auth.isAuthenticated) {
        localStorage.setItem('lastActivity', Date.now().toString())
      }
    }

    window.addEventListener('mousemove', updateLastActivity)
    window.addEventListener('keypress', updateLastActivity)

    return () => {
      clearInterval(interval)
      window.removeEventListener('mousemove', updateLastActivity)
      window.removeEventListener('keypress', updateLastActivity)
    }
  }, [auth.isAuthenticated])

  const login = (user: User) => {
    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('lastActivity', Date.now().toString())
    setAuth({ user, isAuthenticated: true })
  }

  const logout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('lastActivity')
    setAuth({ user: null, isAuthenticated: false })
  }

  return <AuthContext.Provider value={{ ...auth, login, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
