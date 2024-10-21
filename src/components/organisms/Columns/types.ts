import { LoadableRegistration, Registration, RegistrationStatus } from '~/domain/models'

export type ColumnsProps = {
  isLoading?: boolean
  columns: ColumnsConfig
  onClickApprove: (registrationId: Registration['id']) => void
  onClickReject: (registrationId: Registration['id']) => void
  onClickReview: (registrationId: Registration['id']) => void
  onClickDelete: (registrationId: Registration['id']) => void
}

export type ColumnsConfig = {
  [key in RegistrationStatus]: {
    title: string
    style?: {
      backgroundColor: string
      color: string
    }
    registrations?: {
      [key in string]: LoadableRegistration
    }
  }
}
