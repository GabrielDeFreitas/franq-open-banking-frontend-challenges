import { Meta, StoryObj } from '@storybook/react'
import Finance from './index'
import { AssetData } from './types'
import { useState, useEffect } from 'react'

const mockAssets: AssetData[] = [
  {
    code: 'USD',
    name: 'Dollar',
    value: 5.67,
    variation: 0.5,
    type: 'currency'
  },
  {
    code: 'EUR',
    name: 'Euro',
    value: 6.19,
    variation: -0.3,
    type: 'currency'
  },
  {
    code: 'BTC',
    name: 'Bitcoin',
    value: 250000,
    variation: 0,
    type: 'bitcoin'
  }
]

const MockedFinance = () => {
  const [, setAssets] = useState<AssetData[]>(mockAssets)

  useEffect(() => {
    setAssets(mockAssets)
  }, [])

  return <Finance />
}

export default {
  title: 'Pages/Finance',
  component: Finance,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta<typeof Finance>

export const WithMockData: StoryObj<typeof Finance> = {
  render: () => <MockedFinance />
}
