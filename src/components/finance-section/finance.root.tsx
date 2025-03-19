import { FinanceSection } from '.'
import { useAuth } from '../../context/auth-context'
import { FinanceRootProps } from './types'

export default function FinanceRoot({ children }: FinanceRootProps) {
  const { user, logout } = useAuth()
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        <FinanceSection.Card title="Financial Dashboard">
          <div className="flex flex-row justify-between items-center">
            <h1>
              Hello <span className="font-medium">{user?.name}</span>
            </h1>
            <button
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-10 px-4 py-2 w-3xs bg-slate-900 text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-950/10 focus:ring-offset-2"
              onClick={logout}
            >
              logout
            </button>
          </div>
        </FinanceSection.Card>
        {children}
      </div>
    </div>
  )
}
