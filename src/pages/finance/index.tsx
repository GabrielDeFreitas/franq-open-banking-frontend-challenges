import { useState, useEffect } from 'react'
import { AssetData, HistoricalAssetData, Bitcoin, Currency, Stock } from './types'
import { FinanceSection } from '../../components/finance-section'
import PriceChart from '../../components/price-chart'
import AssetTable from '../../components/asset-table'
import { financeMock } from '../../mock/mock'
import { generateHistoricalData } from '../../utils/historical-data'
import { transformBitcoin, transformCurrencies, transformStocks } from '../../utils/trans-form'

export default function Finance() {
  const [selectedAsset, setSelectedAsset] = useState<AssetData | null>(null)
  const [historicalData, setHistoricalData] = useState<HistoricalAssetData | null>(null)
  const [assets, setAssets] = useState<AssetData[]>([])
  const [activeTab, setActiveTab] = useState<'currencies' | 'stocks' | 'bitcoin'>('currencies')

  useEffect(() => {
    const currencies = transformCurrencies(Object.entries(financeMock.results.currencies) as [string, Currency][])
    const stocks = transformStocks(Object.entries(financeMock.results.stocks) as [string, Stock][])
    const bitcoin = transformBitcoin(Object.entries(financeMock.results.bitcoin) as [string, Bitcoin][])

    setAssets([...currencies, ...stocks, ...bitcoin])
  }, [])

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
