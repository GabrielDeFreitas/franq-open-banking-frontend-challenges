import { Meta, StoryObj } from '@storybook/react'
import PriceChart from './index'
import { PriceChartProps } from './types'

const mockData: PriceChartProps['data'] = {
  code: 'BTC',
  name: 'Bitcoin',
  type: 'bitcoin',
  data: Array.from({ length: 24 }, (_, i) => ({
    timestamp: Date.now() - i * 3600000,
    value: 250000 * (1 + (Math.random() * 0.1 - 0.05))
  }))
}

export default {
  title: 'Components/PriceChart',
  component: PriceChart,
  args: {
    data: mockData
  }
} as Meta<typeof PriceChart>

export const Default: StoryObj<typeof PriceChart> = {}

export const NoData: StoryObj<typeof PriceChart> = {
  args: {
    data: null
  }
}
