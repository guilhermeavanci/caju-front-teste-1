import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { COLORS } from '~/theme'
import ReviewButton from '.'

describe('molecules/ReviewButton', () => {
  const mockOnClick = jest.fn()

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should render default mode', () => {
    render(
      <ReviewButton
        mode='default'
        registration={{
          admissionDate: '22/10/2023',
          email: 'user@mail.com',
          employeeName: 'Test Name',
          status: 'REVIEW',
          cpf: '471.145.970-70',
          id: 'test-id'
        }}
        onClick={mockOnClick}
      />
    )

    const button = screen.getByRole('button')
    expect(button).toHaveTextContent('Revisar novamente')
    expect(button).toHaveStyle(`background-color: ${COLORS.REVIEW}`)
    expect(button).not.toBeDisabled()
  })

  it('should render icon mode', () => {
    render(
      <ReviewButton
        mode='icon'
        registration={{
          admissionDate: '22/10/2023',
          email: 'user@mail.com',
          employeeName: 'Test Name',
          status: 'REVIEW',
          cpf: '471.145.970-70',
          id: 'test-id'
        }}
        onClick={mockOnClick}
      />
    )

    const button = screen.getByRole('button')
    expect(button.querySelector('svg')).toBeInTheDocument()
    expect(button).toBeEnabled()
  })

  it('should return id when button is clicked', () => {
    render(
      <ReviewButton
        mode='default'
        registration={{
          admissionDate: '22/10/2023',
          email: 'user@mail.com',
          employeeName: 'Test Name',
          status: 'REVIEW',
          cpf: '471.145.970-70',
          id: 'test-id'
        }}
        onClick={mockOnClick}
      />
    )

    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(mockOnClick).toHaveBeenCalledWith('test-id')
  })

  it('should be disabled when registration is loading', () => {
    render(
      <ReviewButton
        mode='default'
        registration={{
          admissionDate: '22/10/2023',
          email: 'user@mail.com',
          employeeName: 'Test Name',
          status: 'REVIEW',
          cpf: '471.145.970-70',
          id: 'test-id',
          isLoading: true
        }}
        onClick={mockOnClick}
      />
    )

    const button = screen.getByRole('button')
    expect(button).toBeDisabled()
  })
})
