import { useQuery } from '@tanstack/react-query'
import { createQueryOptions } from '../utils/react-query'
import { financeMock } from '../mock/mock'
import { FinancialData } from '../pages/finance/types'

async function fetchFinance(): Promise<FinancialData> {
  try {
    const response = financeMock
    return response
  } catch {
    throw new Error('Failed to fetch finance data')
  }
}
export const createFinanceQueryOptions = createQueryOptions(['finance'], fetchFinance)

export function useFinance() {
  return useQuery(createFinanceQueryOptions())
}
