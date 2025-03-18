import { ComponentProps, ElementType, ReactNode } from 'react'
import { RoutesUrls } from '../../utils/enums/routes-url'

export interface HomeHeroSectionHeaderProps {
  title: string
  description: string
}

export interface HomeHeroSectionRootProps {
  children: ReactNode
}

export interface HomeHeroSectionButtonWrapperProps {
  children: ReactNode
}

export type RoutesUrlKeys = (typeof RoutesUrls)[keyof typeof RoutesUrls]

export interface HomeHeroSectionButtonProps extends ComponentProps<'button'> {
  url: RoutesUrlKeys
  label: string
  className?: string
  icon?: ElementType
}
