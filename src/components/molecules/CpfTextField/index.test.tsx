import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import { CpfTextField } from '.'

describe('molecules/CpfTextField', () => {
  const mockOnChange = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('should render placeholder', () => {
    render(<CpfTextField value='47114597070' onChange={mockOnChange} />)

    const input = screen.getByPlaceholderText('Digite um CPF válido')
    expect(input).toBeInTheDocument()
  })

  test('should render label', () => {
    render(<CpfTextField value='47114597070' onChange={mockOnChange} />)

    const input = screen.getByLabelText('Pesquisa por CPF')
    expect(input).toBeInTheDocument()
  })

  test('should render input as disabled', () => {
    render(<CpfTextField value='47114597070' onChange={mockOnChange} disabled />)

    const inputElement = screen.getByLabelText('Pesquisa por CPF')
    expect(inputElement).toBeDisabled()
  })

  test('should render error', () => {
    const error = 'Error text'
    render(<CpfTextField value='47114597070' onChange={mockOnChange} error={error} />)

    const errorElement = screen.getByText(error)
    expect(errorElement).toBeInTheDocument()
  })

  test('should return unformatted CPF onChange', () => {
    render(<CpfTextField value='47114597070' onChange={mockOnChange} />)

    const input = screen.getByLabelText('Pesquisa por CPF')
    fireEvent.change(input, { target: { value: '12345678901' } })
    expect(mockOnChange).toHaveBeenCalledWith('12345678901')
  })
})
