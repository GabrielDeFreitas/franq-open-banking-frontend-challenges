export const RoutesUrls = {
  BASE_URL: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  GITHUB: 'https://github.com/GabrielDeFreitas/franq-open-banking-frontend-challenges'
} as const

export type RoutesUrls = (typeof RoutesUrls)[keyof typeof RoutesUrls]
