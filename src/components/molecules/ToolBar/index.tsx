import { HiRefresh } from 'react-icons/hi'
import Button, { ButtonOutlined } from '~/components/atoms/Buttons'
import TextField from '~/components/atoms/TextField'
import * as S from './styles'
import * as T from './types'

export const ToolBar = ({ textFieldProps, iconButtonProps, buttonText, onSubmit }: T.ToolBarProps) => {
  return (
    <S.Container>
      <TextField {...textFieldProps} />
      <S.Actions>
        <ButtonOutlined {...iconButtonProps} aria-label='refetch'>
          <HiRefresh />
        </ButtonOutlined>
        <Button onClick={() => onSubmit()}>{buttonText}</Button>
      </S.Actions>
    </S.Container>
  )
}
