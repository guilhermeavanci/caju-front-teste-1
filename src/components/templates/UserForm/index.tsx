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
        <TextField id='name' placeholder='Nome' label='Nome' />
        <TextField id='email' type='email' placeholder='Email' label='Email' />
        <TextField id='cpf' placeholder='CPF' label='CPF' />
        <TextField id='date' type='date' label='Data de admissão' />
        <Button onClick={() => onClickConfirmButton()}>{confirmButtonText}</Button>
      </S.Card>
    </S.Container>
  )
}

export default UserForm
