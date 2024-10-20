import { HiRefresh } from 'react-icons/hi'
import Button, { ButtonOutlined } from '~/components/atoms/Buttons'
import * as S from './styles'
import * as T from './types'
import { useBreakpoint } from '~/hooks/useBreakpoint'
import { SearchCpfForm } from '../SearchCpfForm'

export const ToolBar = ({
  newRegistrationButton,
  dataUpdatedAt,
  onClickRefresh,
  onCpfSearchFormSubmit,
  onCpfBecomeIncompleteOrInvalid
}: T.ToolBarProps) => {
  const { isGreaterThan } = useBreakpoint()
  return (
    <S.Container>
      <SearchCpfForm onSubmit={onCpfSearchFormSubmit} onCpfBecomeIncompleteOrInvalid={onCpfBecomeIncompleteOrInvalid} />
      <S.Actions>
        <S.DataUpdatedAt>
          {isGreaterThan('md') ? 'Última atualização: ' : null}
          {isGreaterThan('sm') ? dataUpdatedAt : null}
        </S.DataUpdatedAt>
        <ButtonOutlined $rounded aria-label='refetch' onClick={() => onClickRefresh()}>
          <HiRefresh />
        </ButtonOutlined>
        <Button onClick={() => newRegistrationButton.onClick()}>{newRegistrationButton.text}</Button>
      </S.Actions>
    </S.Container>
  )
}
