import { ButtonSmall } from '~/components/atoms/Buttons'
import { HiDocumentText } from 'react-icons/hi'
import * as T from './types'
import { COLORS } from '~/theme'

const ReviewButton = ({ mode, registration, onClick, ...props }: T.ReviewButtonProps) => {
  return (
    <ButtonSmall
      {...props}
      aria-disabled={registration.isLoading}
      disabled={registration.isLoading}
      $backgroundColor={COLORS.REVIEW}
      $color={COLORS.REVIEW_CONTENT}
      onClick={() => onClick(registration.id)}>
      {mode === 'default' ? 'Revisar novamente' : <HiDocumentText size={18} />}
    </ButtonSmall>
  )
}

export default ReviewButton
