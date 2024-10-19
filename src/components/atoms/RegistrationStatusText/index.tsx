import styled from 'styled-components'
import { ColumnStatus } from '~/components/organisms/Columns/types'
import { COLORS } from '~/theme'

export const RegistrationStatusText = styled.span<{
  $status: ColumnStatus
}>`
  font-weight: 600;
  color: ${({ $status }) => COLORS[$status]};
`
