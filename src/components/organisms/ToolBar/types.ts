import { SearchCpfFormSchema } from '../SearchCpfForm/types'

export type ToolBarProps = {
  dataUpdatedAt: string
  onCpfSearchFormSubmit: (data: SearchCpfFormSchema) => void
  onCpfBecomeIncompleteOrInvalid: () => void
  onClickRefresh: () => void
  newRegistrationButton: {
    text: string
    onClick: () => void
  }
}
