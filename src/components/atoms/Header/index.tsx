import styled from 'styled-components'
import { COLORS } from '~/theme'

export const Header = styled.header`
  background: ${COLORS.SECONDARY};
  background: linear-gradient(258deg, ${COLORS.SECONDARY} 8%, ${COLORS.TERTIARY} 53%);
  width: 100%;
  height: 64px;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  padding: 0px 24px;

  h1 {
    color: #fff;
    font-size: 24px;
  }
`
