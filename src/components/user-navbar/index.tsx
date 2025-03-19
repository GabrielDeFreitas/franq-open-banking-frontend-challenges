import { LogOut } from 'lucide-react'
import { useAuth } from '../../context/auth-context'
import { FinanceSection } from '../finance-section'

export default function UserNavBar() {
  const { user, logout } = useAuth()
  return (
    <FinanceSection.Card title="teste">
      <h1>Olá, {user?.name}</h1>
      <button onClick={logout} className="flex items-center text-gray-600 hover:text-gray-900">
        <LogOut className="h-5 w-5 mr-1" />
        Sair
      </button>
    </FinanceSection.Card>
  )
}
