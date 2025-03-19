import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { PriceChartProps } from './types'

export default function PriceChart({ data }: PriceChartProps) {
  if (!data) {
    return (
      <div className="h-[400px] flex items-center justify-center bg-gray-50 rounded-lg">
        <p className="text-gray-500">Select an asset from the table above to view the chart</p>
      </div>
    )
  }

  return (
    <div className="h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data.data}>
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ef4444" stopOpacity={0.1} />
              <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="timestamp"
            tickFormatter={(timestamp) => new Date(timestamp).toLocaleTimeString()}
            tick={{ fontSize: 12, fill: '#6b7280' }}
          />
          <YAxis
            tick={{ fontSize: 12, fill: '#6b7280' }}
            tickFormatter={(value) =>
              value >= 1000000
                ? `${(value / 1000000).toFixed(0)} mi`
                : value >= 1000
                  ? `${(value / 1000).toFixed(0)} mil`
                  : value.toFixed(2)
            }
          />
          <Tooltip
            labelFormatter={(timestamp) => new Date(timestamp).toLocaleString()}
            formatter={(value: number) =>
              value.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              })
            }
          />
          <Area type="monotone" dataKey="value" stroke="#ef4444" fill="url(#colorValue)" strokeWidth={2} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
