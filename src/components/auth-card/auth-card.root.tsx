import { AuthCardRootProps } from './types'

export function AuthCardRoot({ children }: AuthCardRootProps) {
  return (
    <div className="w-full max-w-md mx-auto rounded-lg border border-slate-200 bg-white text-slate-950 shadow-sm">
      {children}
    </div>
  )
}
