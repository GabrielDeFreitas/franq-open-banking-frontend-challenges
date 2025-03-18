import { useQuery } from '@tanstack/react-query'
import mockFinance from '../utils/mock/finance.json'
import { createQueryOptions } from '../utils/react-query'
import { Finance } from '../pages/finance/types'

async function fetchFinance(): Promise<Finance> {
  try {
    const response = mockFinance
    return response
  } catch {
    throw new Error('Failed to fetch finance data')
  }
}
export const createFinanceQueryOptions = createQueryOptions(['finance'], fetchFinance)

export function useFinance() {
  return useQuery(createFinanceQueryOptions())
}
