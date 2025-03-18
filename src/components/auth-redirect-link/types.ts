import { RoutesUrls } from '../../utils/enums/routes-url'

export type RoutesUrlKeys = (typeof RoutesUrls)[keyof typeof RoutesUrls]

export interface AuthRedirectLinkProps {
  url: RoutesUrlKeys
  label: string
  text: string
}
