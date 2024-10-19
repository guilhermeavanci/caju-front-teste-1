import { HiRefresh } from 'react-icons/hi'
import Button, { ButtonOutlined } from '~/components/atoms/Buttons'
import TextField from '~/components/atoms/TextField'
import * as S from './styles'
import * as T from './types'
import { useBreakpoint } from '~/hooks/useBreakpoint'

export const ToolBar = ({ textFieldProps, newRegistrationButton, dataUpdatedAt, onClickRefresh }: T.ToolBarProps) => {
  const { isGreaterThan } = useBreakpoint()
  return (
    <S.Container>
      <TextField {...textFieldProps} />
      <S.Actions>
        <S.DataUpdatedAt>
          {isGreaterThan('md') ? 'Última atualização: ' : null}
          {isGreaterThan('sm') ? dataUpdatedAt : null}
        </S.DataUpdatedAt>
        <ButtonOutlined aria-label='refetch' onClick={() => onClickRefresh()}>
          <HiRefresh />
        </ButtonOutlined>
        <Button onClick={() => newRegistrationButton.onClick()}>{newRegistrationButton.text}</Button>
      </S.Actions>
    </S.Container>
  )
}
