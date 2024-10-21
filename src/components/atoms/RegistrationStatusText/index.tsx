import styled from 'styled-components'
import { RegistrationStatus } from '~/domain/models'
import { COLORS } from '~/theme'

export const RegistrationStatusText = styled.span<{
  $status: RegistrationStatus
}>`
  font-weight: 600;
  color: ${({ $status }) => COLORS[$status]};
`
