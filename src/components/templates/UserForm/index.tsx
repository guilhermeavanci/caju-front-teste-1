import TextField from '~/components/atoms/TextField'
import * as S from './styles'
import Button from '~/components/atoms/Buttons'
import { HiOutlineArrowLeft } from 'react-icons/hi'
import { IconButton } from '~/components/atoms/Buttons/IconButton'
import { UserFormProps } from './types'

const UserForm = ({ confirmButtonText, onClickBackButton, onClickConfirmButton }: UserFormProps) => {
  return (
    <S.Container>
      <S.Card>
        <IconButton onClick={() => onClickBackButton()} aria-label='back'>
          <HiOutlineArrowLeft size={24} />
        </IconButton>
        <TextField placeholder='Nome' label='Nome' />
        <TextField placeholder='Email' label='Email' type='email' />
        <TextField placeholder='CPF' label='CPF' />
        <TextField label='Data de admissão' type='date' />
        <Button onClick={() => onClickConfirmButton()}>{confirmButtonText}</Button>
      </S.Card>
    </S.Container>
  )
}

export default UserForm
