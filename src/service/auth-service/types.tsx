export interface User {
  id: string
  email: string
  name: string
  password: string
}

export interface AuthState {
  user: Omit<User, 'password'> | null
  isAuthenticated: boolean
}

export interface AuthError {
  type: 'error' | 'warning' | 'info'
  message: string
}
