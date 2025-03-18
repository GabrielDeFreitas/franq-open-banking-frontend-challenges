import { AuthCardLabelProps } from './types'

export function AuthCardLabel({ text, children, htmlFor, ...props }: AuthCardLabelProps) {
  return (
    <div className="space-y-2">
      <label {...props} htmlFor={htmlFor} className="text-sm font-medium leading-none text-slate-950">
        {text}
      </label>
      {children}
    </div>
  )
}
