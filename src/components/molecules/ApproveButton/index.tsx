import { ButtonSmall } from '~/components/atoms/Buttons'
import { HiOutlineThumbUp } from 'react-icons/hi'
import * as T from './types'
import { Color } from '~/theme'

const LABEL = 'Aprovar'

const ApproveButton = ({ mode, registration, onClick, ...props }: T.ApproveButtonProps) => {
  return (
    <ButtonSmall
      {...props}
      aria-label={LABEL}
      aria-disabled={registration.isLoading}
      disabled={registration.isLoading}
      $color={Color.APPROVED}
      onClick={() => onClick(registration.id)}>
      {mode === 'default' ? LABEL : <HiOutlineThumbUp size={18} />}
    </ButtonSmall>
  )
}

export default ApproveButton
