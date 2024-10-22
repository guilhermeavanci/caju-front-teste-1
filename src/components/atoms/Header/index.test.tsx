import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Header } from '.'

describe('atoms/Header', () => {
  it('should render header text', () => {
    render(
      <Header>
        <h1>Test text</h1>
      </Header>
    )

    const header = screen.getByRole('banner')
    expect(header).toBeInTheDocument()
  })

  it('should render correct header size', () => {
    render(
      <Header>
        <h1>Test text</h1>
      </Header>
    )

    const header = screen.getByRole('banner')
    expect(header).toHaveStyle('width: 100%')
    expect(header).toHaveStyle('height: 64px')
  })
})
