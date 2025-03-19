import { HistoricalAssetData, AssetData } from '../../pages/finance/types'

export const generateHistoricalData = (selectedAsset: AssetData): HistoricalAssetData => {
  const now = Date.now()
  return {
    code: selectedAsset.code,
    name: selectedAsset.name,
    type: selectedAsset.type,
    data: Array.from({ length: 24 }, (_, i) => ({
      timestamp: now - (23 - i) * 3600000,
      value: selectedAsset.value * (1 + (Math.random() * 0.1 - 0.05) * ((23 - i) / 23))
    }))
  }
}
