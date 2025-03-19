import { ReactNode } from 'react'

export interface FinanceRootProps {
  children: ReactNode
}

export interface FinanceCardProps {
  title: string
  description?: string | ReactNode
  children: ReactNode
}

export interface TabButtonProps {
  active: boolean
  onClick: () => void
  children: ReactNode
}
