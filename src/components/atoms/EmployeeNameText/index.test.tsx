import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { EmployeeNameText } from '.'

describe('atoms/EmployeeNameText', () => {
  it('should render text', () => {
    render(<EmployeeNameText>Test text</EmployeeNameText>)

    const spanElement = screen.getByText('Test text')
    expect(spanElement).toBeInTheDocument()
  })
})
