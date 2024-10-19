import styled from 'styled-components'
import { Color, COLORS } from '~/theme'

const defaultShadow = `rgba(149, 157, 165, 0.2) 0px 8px 24px`
const hoverShadow = `0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)`

const Button = styled.button<{
  $color?: Color
  $preventAnimation?: boolean
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
  background-color: ${({ $color }) => ($color ? COLORS[$color] : COLORS.PRIMARY)};
  color: ${({ $color }) => ($color ? COLORS[`${$color}_CONTENT`] : COLORS.PRIMARY_CONTENT)};
  cursor: pointer;
  -webkit-transition-duration: ${({ $preventAnimation }) => ($preventAnimation ? '0s' : '0.2s')};
  transition-duration: ${({ $preventAnimation }) => ($preventAnimation ? '0s' : '0.2s')};

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
  $color?: Color
  disabled?: boolean
  $preventAnimation?: boolean
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
  color: ${({ $color }) => ($color ? COLORS[$color] : COLORS.PRIMARY)};
  outline-color: ${({ $color }) => ($color ? COLORS[$color] : COLORS.PRIMARY)};
  cursor: pointer;
  -webkit-transition-duration: ${({ $preventAnimation }) => ($preventAnimation ? '0s' : '0.2s')};
  transition-duration: ${({ $preventAnimation }) => ($preventAnimation ? '0s' : '0.2s')};

  &:hover:enabled {
    background-color: ${({ $color }) => ($color ? COLORS[`${$color}_LIGHT`] : COLORS.PRIMARY_LIGHT)};
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
  $color?: Color
  disabled?: boolean
  $preventAnimation?: boolean
}>`
  font-size: 12px;
  outline: none;
  border-radius: 4px;
  border: none;
  padding: 8px 16px;
  background-color: ${({ $color }) => ($color ? COLORS[$color] : COLORS.PRIMARY)};
  color: ${({ $color }) => ($color ? COLORS[`${$color}_CONTENT`] : COLORS.PRIMARY_CONTENT)};
  cursor: pointer;
  -webkit-transition-duration: ${({ $preventAnimation }) => ($preventAnimation ? '0s' : '0.2s')};
  transition-duration: ${({ $preventAnimation }) => ($preventAnimation ? '0s' : '0.2s')};

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
  $color?: Color
  disabled?: boolean
  $preventAnimation?: boolean
}>`
  font-size: 12px;
  border-radius: 4px;
  border: none;
  padding: 8px 16px;
  background-color: #fff;
  color: ${({ $color }) => ($color ? COLORS[$color] : COLORS.PRIMARY)};
  outline-color: ${({ $color }) => ($color ? COLORS[$color] : COLORS.PRIMARY)};
  outline-style: solid;
  outline-width: 1px;
  cursor: pointer;
  -webkit-transition-duration: ${({ $preventAnimation }) => ($preventAnimation ? '0s' : '0.2s')};
  transition-duration: ${({ $preventAnimation }) => ($preventAnimation ? '0s' : '0.2s')};

  &:hover:enabled {
    background-color: ${({ $color }) => ($color ? COLORS[`${$color}_LIGHT`] : COLORS.PRIMARY_LIGHT)};
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
