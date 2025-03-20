import { useState, useEffect } from 'react'
import { AssetData, HistoricalAssetData } from './types'
import { FinanceSection } from '../../components/finance-section'
import PriceChart from '../../components/price-chart'
import AssetTable from '../../components/asset-table'
import { generateHistoricalData } from '../../utils/historical-data'
import { transformBitcoin, transformCurrencies, transformStocks } from '../../utils/trans-form'
import { useFinance } from '../../hooks/useFinance'
import Skeleton from '../skeleton'
import ErrorPage from '../error'

export default function Finance() {
  const { data, isLoading, error } = useFinance()
  const [selectedAsset, setSelectedAsset] = useState<AssetData | null>(null)
  const [historicalData, setHistoricalData] = useState<HistoricalAssetData | null>(null)
  const [activeTab, setActiveTab] = useState<'currencies' | 'stocks' | 'bitcoin'>('currencies')

  const assets = data
    ? [
        ...transformCurrencies(Object.entries(data.currencies)),
        ...transformStocks(Object.entries(data.stocks)),
        ...transformBitcoin(Object.entries(data.bitcoin))
      ]
    : []

  useEffect(() => {
    if (selectedAsset) {
      const historicalData = generateHistoricalData(selectedAsset)
      setHistoricalData(historicalData)
    }
  }, [selectedAsset])

  const filteredAssets = assets.filter((asset) => {
    switch (activeTab) {
      case 'currencies':
        return asset.type === 'currency'
      case 'stocks':
        return asset.type === 'stock'
      case 'bitcoin':
        return asset.type === 'bitcoin'
      default:
        return false
    }
  })

  if (isLoading) {
    return <Skeleton />
  }

  if (error) {
    return <ErrorPage message={error.message || 'An unexpected error occurred.'} />
  }

  return (
    <FinanceSection.Root>
      <FinanceSection.Card
        title="Quotes"
        description="Follow quotes in real time. Click on an item to see the evolution graph."
      >
        <div className="flex gap-4 border-b border-slate-200 mb-4">
          <FinanceSection.TabButton active={activeTab === 'currencies'} onClick={() => setActiveTab('currencies')}>
            Coins
          </FinanceSection.TabButton>
          <FinanceSection.TabButton active={activeTab === 'stocks'} onClick={() => setActiveTab('stocks')}>
            Actions
          </FinanceSection.TabButton>
          <FinanceSection.TabButton active={activeTab === 'bitcoin'} onClick={() => setActiveTab('bitcoin')}>
            Bitcoin
          </FinanceSection.TabButton>
        </div>

        <AssetTable assets={filteredAssets} onSelectAsset={setSelectedAsset} selectedAsset={selectedAsset} />
      </FinanceSection.Card>

      <FinanceSection.Card
        title="Price Evolution"
        description={
          selectedAsset
            ? `Price evolution of ${selectedAsset.code} since the start of the application`
            : 'Select an asset in the table above to view its evolution'
        }
      >
        <PriceChart data={historicalData} />
      </FinanceSection.Card>
    </FinanceSection.Root>
  )
}
