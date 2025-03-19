import { TabButtonProps } from './types'

export default function FinanceTabButton({ active, onClick, children }: TabButtonProps) {
  return (
    <button
      className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
        active
          ? 'text-slate-600 border-slate-600'
          : 'text-slate-500 border-transparent hover:text-slate-700 hover:border-slate-300'
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
