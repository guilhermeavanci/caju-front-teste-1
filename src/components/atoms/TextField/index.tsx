import * as T from './types'
import * as S from './styles'

const TextField = ({ error, ...props }: T.TextFieldProps) => {
  return (
    <S.Container>
      <label htmlFor={props.id}>{props.label}</label>
      <S.Input {...props} />
      <S.Error>{error}</S.Error>
    </S.Container>
  )
}

export default TextField
