export const RoutesUrls = {
  BASE_URL: '/',
  ERROR_GENERIC: '/error'
} as const

export type RoutesUrls = (typeof RoutesUrls)[keyof typeof RoutesUrls]
