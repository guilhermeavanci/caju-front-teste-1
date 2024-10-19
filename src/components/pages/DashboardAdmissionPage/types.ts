import { ColumnStatus, Registration } from '~/components/organisms/Columns/types'
import { Color } from '~/theme'

export type RegistrationMap = {
  [key in Registration['id']]: Registration
}

type ModalAction = ColumnStatus | 'DELETE'

export type ModalState = {
  id: Registration['id']
  action: ModalAction
}

export type ModalContent = {
  title: string
  description: React.ReactNode
  color: Color
}
