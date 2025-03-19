import { AssetData, Bitcoin, Stock, Currency } from '../../pages/finance/types'

export const transformStocks = (entries: [string, Stock][]): AssetData[] => {
  return entries.map(([code, data]) => ({
    code,
    name: data.name,
    value: data.points,
    variation: data.variation,
    type: 'stock' as const
  }))
}

export const transformBitcoin = (entries: [string, Bitcoin][]): AssetData[] => {
  return entries.map(([code, data]) => ({
    code,
    name: data.name,
    value: data.last || data.buy || 0,
    variation: data.variation,
    type: 'bitcoin' as const
  }))
}

export const transformCurrencies = (entries: [string, Currency][]): AssetData[] => {
  return entries
    .filter(([code]) => code !== 'source')
    .map(([code, data]) => ({
      code,
      name: data.name,
      value: data.buy || 0,
      variation: data.variation,
      type: 'currency' as const
    }))
}
