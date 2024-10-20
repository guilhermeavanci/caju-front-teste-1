import * as T from './types'
import * as S from './styles'

const TextField = ({ error, ...props }: T.TextFieldProps) => {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <S.Input {...props} />
      <S.Error>{error}</S.Error>
    </div>
  )
}

export default TextField
