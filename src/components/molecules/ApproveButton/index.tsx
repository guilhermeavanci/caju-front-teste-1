import { ButtonSmall } from '~/components/atoms/Buttons'
import { HiOutlineThumbUp } from 'react-icons/hi'
import * as T from './types'
import { COLORS } from '~/theme'

const ApproveButton = ({ mode, registration, onClick, ...props }: T.ApproveButtonProps) => {
  return (
    <ButtonSmall
      {...props}
      aria-disabled={registration.isLoading}
      disabled={registration.isLoading}
      $backgroundColor={COLORS.APPROVED}
      $color={COLORS.APPROVED_CONTENT}
      onClick={() => onClick(registration.id)}>
      {mode === 'default' ? 'Aprovar' : <HiOutlineThumbUp size={18} />}
    </ButtonSmall>
  )
}

export default ApproveButton
