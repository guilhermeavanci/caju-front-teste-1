import { IconButtonProps } from '~/components/atoms/Buttons/types'
import { TextFieldProps } from '~/components/atoms/TextField/types'

export type SearchBarProps = {
  textFieldProps?: TextFieldProps
  iconButtonProps?: IconButtonProps
  buttonText: string
  onSubmit: () => void
}
