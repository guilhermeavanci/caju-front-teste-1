import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Button, { ButtonOutlined, ButtonSmall, ButtonSmallOutlined } from '.'
import { Color, COLORS } from '~/theme'

describe('atoms/Buttons/Button', () => {
  it('should render Button', () => {
    render(<Button>Test text</Button>)
    expect(screen.getByRole('button', { name: 'Test text' }))
  })

  it('should render default Button', () => {
    render(<Button>Test text</Button>)

    const button = screen.getByText('Test text')
    expect(button).toBeInTheDocument()
    expect(button).toHaveStyle(`background-color: ${COLORS.PRIMARY}`)
    expect(button).toHaveStyle(`color: ${COLORS.PRIMARY_CONTENT}`)
  })

  it('should render info Button', () => {
    render(<Button $color={Color.INFO}>Test text</Button>)

    const button = screen.getByText('Test text')
    expect(button).toBeInTheDocument()
    expect(button).toHaveStyle(`background-color: ${COLORS.INFO}`)
    expect(button).toHaveStyle(`color: ${COLORS.INFO_CONTENT}`)
  })
})

describe('atoms/Buttons/ButtonOutlined', () => {
  it('should render ButtonOutlined', () => {
    render(<ButtonOutlined>Test text</ButtonOutlined>)
    expect(screen.getByRole('button', { name: 'Test text' }))
  })

  it('should render default ButtonOutlined', () => {
    render(<ButtonOutlined>Test text</ButtonOutlined>)

    const button = screen.getByText('Test text')
    expect(button).toBeInTheDocument()
    expect(button).toHaveStyle(`color: ${COLORS.PRIMARY}`)
    expect(button).toHaveStyle(`outline-color: ${COLORS.PRIMARY}`)
  })

  it('should render info ButtonOutlined', () => {
    render(<ButtonOutlined $color={Color.INFO}>Test text</ButtonOutlined>)

    const button = screen.getByText('Test text')
    expect(button).toBeInTheDocument()
    expect(button).toHaveStyle(`color: ${COLORS.INFO}`)
    expect(button).toHaveStyle(`outline-color: ${COLORS.INFO}`)
  })
})

describe('atoms/Buttons/ButtonSmall', () => {
  it('should render ButtonSmall', () => {
    render(<ButtonSmall>Test text</ButtonSmall>)
    expect(screen.getByRole('button', { name: 'Test text' }))
  })

  it('should render default ButtonSmall', () => {
    render(<ButtonSmall>Test text</ButtonSmall>)

    const button = screen.getByText('Test text')
    expect(button).toBeInTheDocument()
    expect(button).toHaveStyle(`background-color: ${COLORS.PRIMARY}`)
    expect(button).toHaveStyle(`color: ${COLORS.PRIMARY_CONTENT}`)
  })

  it('should render info ButtonSmall', () => {
    render(<ButtonSmall $color={Color.INFO}>Test text</ButtonSmall>)

    const button = screen.getByText('Test text')
    expect(button).toBeInTheDocument()
    expect(button).toHaveStyle(`background-color: ${COLORS.INFO}`)
    expect(button).toHaveStyle(`color: ${COLORS.INFO_CONTENT}`)
  })
})

describe('atoms/Buttons/ButtonSmallOutlined', () => {
  it('should render ButtonSmallOutlined', () => {
    render(<ButtonSmallOutlined>Test text</ButtonSmallOutlined>)
    expect(screen.getByRole('button', { name: 'Test text' }))
  })

  it('should render default ButtonSmallOutlined', () => {
    render(<ButtonSmallOutlined>Test text</ButtonSmallOutlined>)

    const button = screen.getByText('Test text')
    expect(button).toBeInTheDocument()
    expect(button).toHaveStyle(`color: ${COLORS.PRIMARY}`)
    expect(button).toHaveStyle(`outline-color: ${COLORS.PRIMARY}`)
  })

  it('should render info ButtonSmallOutlined', () => {
    render(<ButtonSmallOutlined $color={Color.INFO}>Test text</ButtonSmallOutlined>)

    const button = screen.getByText('Test text')
    expect(button).toBeInTheDocument()
    expect(button).toHaveStyle(`color: ${COLORS.INFO}`)
    expect(button).toHaveStyle(`outline-color: ${COLORS.INFO}`)
  })
})
