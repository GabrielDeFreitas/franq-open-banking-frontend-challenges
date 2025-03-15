import { render, screen } from '@testing-library/react'
import { TitleDescription } from './index'

describe('TitleDescription Component', () => {
  it('renders the title and description correctly', () => {
    const title = 'Test Title'
    const description = 'This is a test description'

    render(<TitleDescription title={title} description={description} />)
    expect(screen.getByText(title)).toBeInTheDocument()
    expect(screen.getByText(description)).toBeInTheDocument()
  })
})
