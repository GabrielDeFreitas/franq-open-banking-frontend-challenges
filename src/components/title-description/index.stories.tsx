import { TitleDescription } from './index'
import { TitleDescriptionProps } from './type'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'Components/TitleDescription',
  component: TitleDescription
} as Meta

const Template: StoryFn<TitleDescriptionProps> = (args) => <TitleDescription {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Sample Title',
  description: 'This is a sample description for the TitleDescription component.'
}
