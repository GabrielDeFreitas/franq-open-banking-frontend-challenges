import { useQuery } from '@tanstack/react-query'
import { createQueryOptions } from '../utils/react-query'
import { FinancialResults } from '../pages/finance/types'

async function fetchFinance(): Promise<FinancialResults> {
  try {
    const apiKey = import.meta.env.VITE_HGBRASIL_API_KEY
    const response = await fetch(`/api/finance/quotations?key=${apiKey}`)

    if (!response.ok) {
      throw new Error('Failed to fetch finance data')
    }

    const data = await response.json()
    return data.results
  } catch (error) {
    throw new Error(`Failed to fetch finance data: ${error instanceof Error ? error.message : 'Unknown error'}`)
  }
}

export const createFinanceQueryOptions = createQueryOptions(['finance'], fetchFinance)

export function useFinance() {
  return useQuery(createFinanceQueryOptions())
}
