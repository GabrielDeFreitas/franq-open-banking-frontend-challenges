import { User } from './types'

const USERS_KEY = 'registered_users'

export class AuthService {
  private static getUsers(): User[] {
    const users = localStorage.getItem(USERS_KEY)
    return users ? JSON.parse(users) : []
  }

  private static saveUsers(users: User[]): void {
    localStorage.setItem(USERS_KEY, JSON.stringify(users))
  }

  static findUserByEmail(email: string): User | undefined {
    return this.getUsers().find((user) => user.email === email)
  }

  static findUserByName(name: string): User | undefined {
    return this.getUsers().find((user) => user.name === name)
  }

  static async register(userData: Omit<User, 'id'>): Promise<User> {
    await new Promise((resolve) => setTimeout(resolve, 500))

    const users = this.getUsers()

    if (this.findUserByEmail(userData.email)) {
      throw new Error('Email is already in use')
    }

    if (this.findUserByName(userData.name)) {
      throw new Error('Username is already in use')
    }

    const newUser: User = {
      ...userData,
      id: crypto.randomUUID()
    }

    users.push(newUser)
    this.saveUsers(users)

    const { password, ...userWithoutPassword } = newUser // eslint-disable-line @typescript-eslint/no-unused-vars
    return userWithoutPassword as User
  }

  static async login(email: string, password: string): Promise<Omit<User, 'password'>> {
    await new Promise((resolve) => setTimeout(resolve, 500))

    const user = this.findUserByEmail(email)

    if (!user) {
      throw new Error('Email not found')
    }

    if (user.password !== password) {
      throw new Error('Incorrect password')
    }

    const { password: _, ...userWithoutPassword } = user // eslint-disable-line @typescript-eslint/no-unused-vars
    return userWithoutPassword
  }
}
