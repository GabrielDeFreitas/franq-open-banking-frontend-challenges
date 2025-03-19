import { Meta, StoryObj } from '@storybook/react'
import { FinanceSection } from './index'

export default {
  title: 'Components/FinanceSection',
  component: FinanceSection.Root,
  subcomponents: {
    Card: FinanceSection.Card,
    TabButton: FinanceSection.TabButton
  }
} as Meta

export const Root: StoryObj = {
  render: () => (
    <FinanceSection.Root>
      <p className="p-4">This is the FinanceSection Root container.</p>
    </FinanceSection.Root>
  )
}

export const Card: StoryObj = {
  render: () => (
    <FinanceSection.Card title="Finance Card Title" description="This is a description for the finance card.">
      <p className="p-4">This is the content inside the Finance Card.</p>
    </FinanceSection.Card>
  )
}

export const TabButton: StoryObj = {
  render: () => (
    <div className="flex gap-4">
      <FinanceSection.TabButton active={true} onClick={() => {}}>
        Active Tab
      </FinanceSection.TabButton>
      <FinanceSection.TabButton active={false} onClick={() => {}}>
        Inactive Tab
      </FinanceSection.TabButton>
    </div>
  )
}
