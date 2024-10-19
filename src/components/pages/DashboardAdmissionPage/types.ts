import { ColumnStatus, Registration } from '~/components/organisms/Columns/types'

export type RegistrationMap = {
  [key in Registration['id']]: Registration
}

export type ModalState = {
  id: Registration['id']
  state: ColumnStatus
}

export type ModalContent = {
  title: string
  description: React.ReactNode
}
