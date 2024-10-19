import styled from 'styled-components'
import { Color, COLORS } from '~/theme'

const defaultShadow = `rgba(149, 157, 165, 0.2) 0px 8px 24px`
const hoverShadow = `0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)`

type ButtonStyle = {
  $color?: Color
  disabled?: boolean
  $preventAnimation?: boolean
  $rounded?: boolean
}

const Button = styled.button<ButtonStyle>`
  line-height: ${({ $rounded }) => ($rounded ? '0' : 'normal')};
  outline: none;
  display: flex;
  align-items: center;
  border: none;
  border-radius: ${({ $rounded }) => ($rounded ? '100%' : '36px')};
  padding: ${({ $rounded }) => ($rounded ? '8px 16px' : '8px 32px')};
  height: 56px;
  box-shadow: ${defaultShadow};
  font-size: 16px;
  font-weight: 600;
  background-color: ${({ $color }) => ($color ? COLORS[$color] : COLORS.PRIMARY)};
  color: ${({ $color }) => ($color ? COLORS[`${$color}_CONTENT`] : COLORS.PRIMARY_CONTENT)};
  cursor: pointer;
  -webkit-transition-duration: ${({ $preventAnimation }) => ($preventAnimation ? '0s' : '0.2s')};
  transition-duration: ${({ $preventAnimation }) => ($preventAnimation ? '0s' : '0.2s')};

  svg {
    font-size: 24px;
  }

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

export const ButtonOutlined = styled.button<ButtonStyle>`
  line-height: ${({ $rounded }) => ($rounded ? '0' : 'normal')};
  display: flex;
  align-items: center;
  border: none;
  border-radius: ${({ $rounded }) => ($rounded ? '100%' : '36px')};
  padding: ${({ $rounded }) => ($rounded ? '8px 16px' : '8px 32px')};
  height: 56px;
  outline-style: solid;
  outline-width: 2px;
  box-shadow: ${defaultShadow};
  font-size: 16px;
  font-weight: 600;
  background-color: #fff;
  color: ${({ $color }) => ($color ? COLORS[$color] : COLORS.PRIMARY)};
  outline-color: ${({ $color }) => ($color ? COLORS[$color] : COLORS.PRIMARY)};
  cursor: pointer;
  -webkit-transition-duration: ${({ $preventAnimation }) => ($preventAnimation ? '0s' : '0.2s')};
  transition-duration: ${({ $preventAnimation }) => ($preventAnimation ? '0s' : '0.2s')};

  svg {
    font-size: 24px;
  }

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

export const ButtonSmall = styled.button<ButtonStyle>`
  line-height: ${({ $rounded }) => ($rounded ? '0' : 'normal')};
  font-size: 12px;
  font-weight: 600;
  outline: none;
  border: none;
  border-radius: ${({ $rounded }) => ($rounded ? '100%' : '4px')};
  padding: ${({ $rounded }) => ($rounded ? '8px' : '8px 16px')};
  background-color: ${({ $color }) => ($color ? COLORS[$color] : COLORS.PRIMARY)};
  color: ${({ $color }) => ($color ? COLORS[`${$color}_CONTENT`] : COLORS.PRIMARY_CONTENT)};
  cursor: pointer;
  -webkit-transition-duration: ${({ $preventAnimation }) => ($preventAnimation ? '0s' : '0.2s')};
  transition-duration: ${({ $preventAnimation }) => ($preventAnimation ? '0s' : '0.2s')};

  svg {
    font-size: 18px;
  }

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

export const ButtonSmallOutlined = styled.button<ButtonStyle>`
  line-height: ${({ $rounded }) => ($rounded ? '0' : 'normal')};
  font-size: 12px;
  font-weight: 600;
  border: none;
  border-radius: ${({ $rounded }) => ($rounded ? '100%' : '4px')};
  padding: ${({ $rounded }) => ($rounded ? '8px' : '8px 16px')};
  background-color: #fff;
  color: ${({ $color }) => ($color ? COLORS[$color] : COLORS.PRIMARY)};
  outline-color: ${({ $color }) => ($color ? COLORS[$color] : COLORS.PRIMARY)};
  outline-style: solid;
  outline-width: 2px;
  cursor: pointer;
  -webkit-transition-duration: ${({ $preventAnimation }) => ($preventAnimation ? '0s' : '0.2s')};
  transition-duration: ${({ $preventAnimation }) => ($preventAnimation ? '0s' : '0.2s')};

  svg {
    font-size: 18px;
  }

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

export type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & ButtonStyle

export default Button
