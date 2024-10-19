import { ButtonSmall } from '~/components/atoms/Buttons'
import { HiOutlineThumbDown } from 'react-icons/hi'
import * as T from './types'
import { COLORS } from '~/theme'

const RejectButton = ({ mode, registration, onClick, ...props }: T.RejectButtonProps) => {
  return (
    <ButtonSmall
      {...props}
      aria-disabled={registration.isLoading}
      disabled={registration.isLoading}
      $backgroundColor={COLORS.REJECTED}
      $color={COLORS.REJECTED_CONTENT}
      onClick={() => onClick(registration.id)}>
      {mode === 'default' ? 'Reprovar' : <HiOutlineThumbDown size={18} />}
    </ButtonSmall>
  )
}

export default RejectButton
