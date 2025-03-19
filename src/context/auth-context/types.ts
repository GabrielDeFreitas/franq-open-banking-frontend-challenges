import { AuthState, User } from '../../service/auth-service/types'

export interface AuthContextType extends AuthState {
  login: (user: Omit<User, 'password'>) => void
  logout: () => void
}
