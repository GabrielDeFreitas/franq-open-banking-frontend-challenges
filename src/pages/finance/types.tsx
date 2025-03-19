export type Currency = {
  name: string
  buy: number
  sell?: number | null
  variation: number
}

export type Stock = {
  name: string
  location: string
  points: number
  variation: number
}

export type Bitcoin = {
  name: string
  last?: number
  buy?: number
  sell?: number
  variation: number
}

export type AssetType = 'currency' | 'stock' | 'bitcoin'

export interface AssetData {
  code: string
  name: string
  value: number
  variation: number
  type: AssetType
}

export interface HistoricalDataPoint {
  timestamp: number
  value: number
}

export interface HistoricalAssetData {
  code: string
  name: string
  type: AssetType
  data: HistoricalDataPoint[]
}

export interface Tax {
  date: string
  cdi: number
  selic: number
  daily_factor: number
  selic_daily: number
  cdi_daily: number
}

export interface FinancialResults {
  currencies: Record<string, Currency>
  stocks: Record<string, Stock>
  bitcoin: Record<string, Bitcoin>
  available_sources: string[]
  taxes: Tax[]
}

export interface FinancialData {
  by: string
  valid_key: boolean
  results: FinancialResults
  execution_time: number
  from_cache: boolean
}
