import { ButtonSmall } from '~/components/atoms/Buttons'
import { HiOutlineThumbDown } from 'react-icons/hi'
import * as T from './types'
import { Color } from '~/theme'

const RejectButton = ({ mode, registration, onClick, ...props }: T.RejectButtonProps) => {
  return (
    <ButtonSmall
      {...props}
      aria-disabled={registration.isLoading}
      disabled={registration.isLoading}
      $color={Color.REJECTED}
      onClick={() => onClick(registration.id)}>
      {mode === 'default' ? 'Reprovar' : <HiOutlineThumbDown size={18} />}
    </ButtonSmall>
  )
}

export default RejectButton
