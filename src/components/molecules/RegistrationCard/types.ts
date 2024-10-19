import { Registration } from '~/components/organisms/Columns/types'

export type RegistrationCardProps = {
  registration: Registration & {
    isLoading?: boolean
  }
  onClickApprove: (registrationId: Registration['id']) => void
  onClickReject: (registrationId: Registration['id']) => void
  onClickReview: (registrationId: Registration['id']) => void
}
