import { AuthCardLabelProps } from './types'

export function AuthCardLabel({ label, children, ...props }: AuthCardLabelProps) {
  return (
    <div className="space-y-2">
      <label {...props} className="text-sm font-medium leading-none text-slate-950">
        {label}
      </label>
      {children}
    </div>
  )
}
