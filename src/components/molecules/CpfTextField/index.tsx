import TextField from '~/components/atoms/TextField'
import * as T from './types'
import { PatternFormat } from 'react-number-format'

export const CpfTextField = ({ value, error, onChange }: T.CpfTextFieldProps) => {
  return (
    <PatternFormat
      id='cpf'
      name='cpf'
      label='Pesquisa por CPF'
      placeholder='Digite um CPF válido'
      format='###.###.###-##'
      mask='_'
      valueIsNumericString
      error={error}
      value={value}
      onValueChange={(values): void => {
        onChange(values.value)
      }}
      customInput={TextField}
    />
  )
}
