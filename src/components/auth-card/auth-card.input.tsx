import { AuthCardInputProps } from './types'

export function AuthCardInput({ ...props }: AuthCardInputProps) {
  return (
    <input
      {...props}
      className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-950 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-950/10 focus:border-slate-300"
    />
  )
}
