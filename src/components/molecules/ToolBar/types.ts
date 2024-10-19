import { ButtonProps } from '~/components/atoms/Buttons'
import { TextFieldProps } from '~/components/atoms/TextField/types'

export type ToolBarProps = {
  textFieldProps?: TextFieldProps
  iconButtonProps?: ButtonProps
  buttonText: string
  onSubmit: () => void
}
