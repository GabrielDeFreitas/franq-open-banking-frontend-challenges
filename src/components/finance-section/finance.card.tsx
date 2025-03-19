import { FinanceCardProps } from './types'

export default function FinanceCard({ title, description, children }: FinanceCardProps) {
  return (
    <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-slate-900 mb-2">{title}</h2>
        <p className="text-sm text-slate-600 mb-6">{description}</p>
        {children}
      </div>
    </div>
  )
}
