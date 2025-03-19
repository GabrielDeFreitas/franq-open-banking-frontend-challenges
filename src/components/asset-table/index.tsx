import { ArrowDownIcon, ArrowUpIcon, MinusIcon } from 'lucide-react'
import { AssetTableProps } from './types'

export default function AssetTable({ assets, onSelectAsset, selectedAsset }: AssetTableProps) {
  return (
    <table className="w-full">
      <thead>
        <tr className="text-left text-sm text-slate-500">
          <th className="pb-2">Code</th>
          <th className="pb-2">Name</th>
          <th className="pb-2 text-right">Value</th>
          <th className="pb-2 text-right">Variation</th>
        </tr>
      </thead>
      <tbody>
        {assets.map((asset) => {
          const isSelected = selectedAsset?.code === asset.code
          const isPositive = asset.variation > 0
          const isZero = asset.variation === 0

          return (
            <tr
              key={asset.code}
              className={`border-t border-slate-100 cursor-pointer hover:bg-slate-50 ${
                isSelected ? 'bg-slate-50' : ''
              }`}
              onClick={() => onSelectAsset(asset)}
            >
              <td className="py-3 font-medium">{asset.code}</td>
              <td className="py-3 text-slate-600">{asset.name}</td>
              <td className="py-3 text-right">
                {asset.value.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                })}
              </td>
              <td className="py-3">
                <div
                  className={`flex items-center justify-end gap-1 ${
                    isPositive ? 'text-green-600' : isZero ? 'text-slate-400' : 'text-red-600'
                  }`}
                >
                  {isZero ? (
                    <MinusIcon className="w-4 h-4" />
                  ) : isPositive ? (
                    <ArrowUpIcon className="w-4 h-4" />
                  ) : (
                    <ArrowDownIcon className="w-4 h-4" />
                  )}
                  <span>{`${isPositive ? '+' : ''}${asset.variation.toFixed(2)}%`}</span>
                </div>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
