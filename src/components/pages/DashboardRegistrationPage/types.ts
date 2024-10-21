import { Registration, RegistrationStatus } from '~/domain/models'
import { IRegistrationRepository } from '~/domain/repository/IRegistrationRepository'
import { Color } from '~/theme'

export type DashboardRegistrationPageProps = {
  repository: IRegistrationRepository
}

export type RegistrationMap = {
  [key in Registration['id']]: Registration
}

type ModalAction = RegistrationStatus | 'DELETE'

export type ModalState = {
  id: Registration['id']
  action: ModalAction
}

export type ModalContent = {
  title: string
  description: React.ReactNode
  color: Color
}
