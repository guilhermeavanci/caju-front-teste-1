import { LoadableRegistration, Registration } from '~/domain/models'

export type RegistrationCardProps = {
  registration: LoadableRegistration
  onClickApprove: (registrationId: Registration['id']) => void
  onClickReject: (registrationId: Registration['id']) => void
  onClickReview: (registrationId: Registration['id']) => void
  onClickDelete: (registrationId: Registration['id']) => void
}
