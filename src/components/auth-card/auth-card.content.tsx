import { AuthCardContentProps } from './types'

export function AuthCardContent({ children, ...props }: AuthCardContentProps) {
  return (
    <form {...props}>
      <div className="p-6 pt-0 space-y-4">{children}</div>
    </form>
  )
}
