import { AuthCardFooterProps } from './types'

export function AuthCardFooter({ label, ...props }: AuthCardFooterProps) {
  return (
    <div className="flex items-center p-6 pt-0">
      <button
        {...props}
        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-10 px-4 py-2 w-full bg-slate-900 text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-950/10 focus:ring-offset-2"
      >
        {label}
      </button>
    </div>
  )
}
