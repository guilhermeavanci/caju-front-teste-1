import styled from 'styled-components'
import { COLORS } from '~/theme'

const defaultShadow = `rgba(149, 157, 165, 0.2) 0px 8px 24px`
const hoverShadow = `0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)`

const Button = styled.button<{
  $backgroundColor?: string
  $color?: string
}>`
  outline: none;
  display: flex;
  align-items: center;
  border: none;
  border-radius: 36px;
  padding: 8px 32px;
  height: 56px;
  box-shadow: ${defaultShadow};
  font-size: 16px;
  font-weight: 600;
  background-color: ${({ $backgroundColor }) => $backgroundColor || COLORS.PRIMARY};
  color: ${({ $color }) => $color || COLORS.PRIMARY_CONTENT};
  cursor: pointer;
  -webkit-transition-duration: 0.2s;
  transition-duration: 0.2s;

  &:hover:enabled {
    box-shadow: ${hoverShadow};
  }

  &[aria-disabled='true'] {
    opacity: 0.5;
    cursor: auto;

    & > * {
      cursor: auto;
    }
  }
`

export const ButtonOutlined = styled.button<{
  $color?: string
  $hoverBackgroundColor?: string
  disabled?: boolean
}>`
  display: flex;
  align-items: center;
  border: none;
  border-radius: 36px;
  padding: 8px 32px;
  outline-style: solid;
  outline-width: 2px;
  height: 56px;
  box-shadow: ${defaultShadow};
  font-size: 16px;
  font-weight: 600;
  background-color: #fff;
  color: ${({ $color }) => $color || COLORS.PRIMARY};
  outline-color: ${({ $color }) => $color || COLORS.PRIMARY};
  cursor: pointer;
  -webkit-transition-duration: 0.2s;
  transition-duration: 0.2s;

  &:hover:enabled {
    background-color: ${({ $hoverBackgroundColor }) => $hoverBackgroundColor || COLORS.PRIMARY_LIGHT};
  }

  &[aria-disabled='true'] {
    opacity: 0.5;
    cursor: auto;

    & > * {
      cursor: auto;
    }
  }
`

export const ButtonSmall = styled.button<{
  $backgroundColor?: string
  $color?: string
  disabled?: boolean
}>`
  font-size: 12px;
  outline: none;
  border-radius: 4px;
  border: none;
  padding: 8px 16px;
  background-color: ${({ $backgroundColor }) => $backgroundColor || COLORS.PRIMARY};
  color: ${({ $color }) => $color || COLORS.PRIMARY_CONTENT};
  cursor: pointer;
  -webkit-transition-duration: 0.2s;
  transition-duration: 0.2s;

  &:hover:enabled {
    box-shadow: ${hoverShadow};
  }

  &[aria-disabled='true'] {
    opacity: 0.5;
    cursor: auto;

    & > * {
      cursor: auto;
    }
  }
`

export const ButtonSmallOutlined = styled.button<{
  $color?: string
  $hoverBackgroundColor?: string
  disabled?: boolean
}>`
  font-size: 12px;
  border-radius: 4px;
  border: none;
  padding: 8px 16px;
  background-color: #fff;
  color: ${({ $color }) => $color || COLORS.PRIMARY};
  outline-color: ${({ $color }) => $color || COLORS.PRIMARY};
  outline-style: solid;
  outline-width: 1px;
  cursor: pointer;
  -webkit-transition-duration: 0.2s;
  transition-duration: 0.2s;

  &:hover:enabled {
    background-color: ${({ $hoverBackgroundColor }) => $hoverBackgroundColor || COLORS.PRIMARY_LIGHT};
  }

  &[aria-disabled='true'] {
    opacity: 0.5;
    cursor: auto;

    & > * {
      cursor: auto;
    }
  }
`

export default Button
