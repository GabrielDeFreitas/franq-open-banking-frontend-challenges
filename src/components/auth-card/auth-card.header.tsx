import { AuthCardHeaderProps } from './types'

export function AuthCardHeader({ title, description }: AuthCardHeaderProps) {
  return (
    <div className="flex flex-col space-y-1.5 p-6">
      <h3 className="text-2xl font-semibold leading-none tracking-tight">{title}</h3>
      <p className="text-sm text-slate-500">{description}</p>
    </div>
  )
}
