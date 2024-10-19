import TextField from '~/components/atoms/TextField'
import * as S from './styles'
import Button, { ButtonSmallOutlined } from '~/components/atoms/Buttons'
import { HiOutlineArrowLeft } from 'react-icons/hi'
import { UserFormProps } from './types'

const UserForm = ({ confirmButtonText, onClickBackButton, onClickConfirmButton }: UserFormProps) => {
  return (
    <S.Container>
      <S.Card>
        <ButtonSmallOutlined $rounded onClick={() => onClickBackButton()} aria-label='back'>
          <HiOutlineArrowLeft />
        </ButtonSmallOutlined>
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
