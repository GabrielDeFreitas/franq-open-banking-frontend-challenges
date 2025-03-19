import { AssetData } from '../../pages/finance/types'

export interface AssetTableProps {
  assets: AssetData[]
  onSelectAsset: (asset: AssetData) => void
  selectedAsset: AssetData | null
}
