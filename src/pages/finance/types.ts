export interface Finance {
  by: string
  valid_key: boolean
  results: FinanceResults
  execution_time: number
  from_cache: boolean
}

export interface FinanceResults {
  currencies: Currencies
  stocks: Stocks
  available_sources: string[]
  bitcoin: Bitcoin
  taxes: Tax[]
}

export interface Currencies {
  source: string
  [key: string]: Currency | string
}

export interface Currency {
  name: string
  buy: number
  sell: number | null
  variation: number
}

export interface Stocks {
  [key: string]: Stock
}

export interface Stock {
  name: string
  location: string
  points: number
  variation: number
}

export interface Bitcoin {
  [key: string]: BitcoinExchange
}

export interface BitcoinExchange {
  name: string
  format: string[]
  last: number
  buy?: number
  sell?: number
  variation: number
}

export interface Tax {
  date: string
  cdi: number
  selic: number
  daily_factor: number
  selic_daily: number
  cdi_daily: number
}
