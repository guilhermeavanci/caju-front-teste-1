import styled from 'styled-components'
import { COLORS } from '~/theme'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
`

export const DataUpdatedAt = styled.p`
  color: ${COLORS.INFO};
`
