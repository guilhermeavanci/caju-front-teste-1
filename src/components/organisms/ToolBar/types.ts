export type ToolBarProps = {
  dataUpdatedAt: string
  onCpfBecomeValid: (cpf: string) => void
  onCpfBecomeIncompleteOrInvalid: () => void
  onClickRefresh: () => void
  newRegistrationButton: {
    text: string
    onClick: () => void
  }
}
