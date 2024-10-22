import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { RegistrationStatusText } from '.'
import { COLORS } from '~/theme'

describe('atoms/RegistrationStatusText', () => {
  it('should render registration status text', () => {
    render(<RegistrationStatusText $status='APPROVED'>Test text</RegistrationStatusText>)

    const text = screen.getByText('Test text')
    expect(text).toBeInTheDocument()
  })

  it('should render registration status approved color', () => {
    render(<RegistrationStatusText $status='APPROVED'>Test text</RegistrationStatusText>)

    const text = screen.getByText('Test text')
    expect(text).toHaveStyle(`color: ${COLORS.APPROVED}`)
    expect(text).toBeInTheDocument()
  })

  it('should render registration status rejected color', () => {
    render(<RegistrationStatusText $status='REJECTED'>Test text</RegistrationStatusText>)

    const text = screen.getByText('Test text')
    expect(text).toHaveStyle(`color: ${COLORS.REJECTED}`)
    expect(text).toBeInTheDocument()
  })

  it('should render registration status review color', () => {
    render(<RegistrationStatusText $status='REVIEW'>Test text</RegistrationStatusText>)

    const text = screen.getByText('Test text')
    expect(text).toHaveStyle(`color: ${COLORS.REVIEW}`)
    expect(text).toBeInTheDocument()
  })
})
