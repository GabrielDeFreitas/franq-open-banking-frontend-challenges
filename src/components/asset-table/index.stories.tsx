import { Meta, StoryObj } from '@storybook/react'
import AssetTable from './index'
import { AssetData } from '../../pages/finance/types'

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

export default {
  title: 'Components/AssetTable',
  component: AssetTable,
  args: {
    assets: mockAssets,
    selectedAsset: null
  },
  argTypes: {
    onSelectAsset: { action: 'selected' }
  }
} as Meta<typeof AssetTable>

export const Default: StoryObj<typeof AssetTable> = {}

export const WithSelectedAsset: StoryObj<typeof AssetTable> = {
  args: {
    selectedAsset: mockAssets[0]
  }
}
