import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import TextField from '.'

describe('atoms/TextField', () => {
  it('should render label', () => {
    render(<TextField id='test-id' label='Test Label' name='test' />)

    const label = screen.getByLabelText('Test Label')
    expect(label).toBeInTheDocument()
  })

  it('should render with error', () => {
    const errorText = 'This is an error message'
    render(<TextField id='test-id' label='Test Label' name='test' error={errorText} />)

    const error = screen.getByText(errorText)
    expect(error).toBeInTheDocument()
  })

  it('should render without error', () => {
    render(<TextField id='test-id' label='Test Label' name='test' />)

    const error = screen.getByTestId('test-id-error')
    expect(error).toBeInTheDocument()
    expect(error).toBeEmptyDOMElement()
  })

  it('should render with placeholder', () => {
    render(<TextField id='test-id' label='Test Label' name='test' placeholder='Enter your text' />)

    const input = screen.getByPlaceholderText('Enter your text')
    expect(input).toBeInTheDocument()
  })

  it('should allow typing in the input field', async () => {
    const user = userEvent.setup()
    render(<TextField id='test-id' label='Test Label' name='test' />)

    const input = screen.getByLabelText('Test Label')
    await user.type(input, 'Test typing')

    expect(input).toHaveValue('Test typing')
  })
})
