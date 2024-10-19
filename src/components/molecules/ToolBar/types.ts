import { TextFieldProps } from '~/components/atoms/TextField/types'

export type ToolBarProps = {
  textFieldProps?: TextFieldProps
  dataUpdatedAt: string
  onClickRefresh: () => void
  newRegistrationButton: {
    text: string
    onClick: () => void
  }
}
