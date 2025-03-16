export const RoutesUrls = {
  BASE_URL: '/',
  ERROR_GENERIC: '/error',
  LOADING_SCREEN: '/loading'
} as const

export type RoutesUrls = (typeof RoutesUrls)[keyof typeof RoutesUrls]
