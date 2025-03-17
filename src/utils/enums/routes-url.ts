export const RoutesUrls = {
  BASE_URL: '/',
  ERROR_GENERIC: '/error',
  LOGIN: '/login',
  REGISTER: '/register'
} as const

export type RoutesUrls = (typeof RoutesUrls)[keyof typeof RoutesUrls]
