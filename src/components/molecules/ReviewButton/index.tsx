import { ButtonSmall } from '~/components/atoms/Buttons'
import { HiDocumentText } from 'react-icons/hi'
import * as T from './types'
import { Color } from '~/theme'

const ReviewButton = ({ mode, registration, onClick, ...props }: T.ReviewButtonProps) => {
  return (
    <ButtonSmall
      {...props}
      aria-disabled={registration.isLoading}
      disabled={registration.isLoading}
      $color={Color.REVIEW}
      onClick={() => onClick(registration.id)}>
      {mode === 'default' ? 'Revisar novamente' : <HiDocumentText size={18} />}
    </ButtonSmall>
  )
}

export default ReviewButton
