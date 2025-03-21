import { ComponentProps, ReactNode } from 'react'

export interface AuthCardRootProps {
  children: ReactNode
}

export interface AuthCardHeaderProps {
  title: string
  description?: string
}

export interface AuthCardContentProps extends ComponentProps<'form'> {
  children: ReactNode
}

export interface AuthCardFooterProps extends ComponentProps<'button'> {
  label?: string
  children?: ReactNode
}

export interface AuthCardLabelProps extends ComponentProps<'label'> {
  text: string
  children: ReactNode
  htmlFor?: string
}

export interface AuthCardBreadcrumbProps {
  localPath: string
}

export type AuthCardInputProps = ComponentProps<'input'>
