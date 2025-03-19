import { FinanceRootProps } from './types'

export default function FinanceRoot({ children }: FinanceRootProps) {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        <h1 className="text-2xl font-bold text-slate-900 mb-6">Financial Dashboard</h1>
        {children}
      </div>
    </div>
  )
}
