export type SearchCpfFormSchema = {
  cpf: string
}

export type SearchCpfFormProps = {
  onSubmit: (data: SearchCpfFormSchema) => void
  onCpfBecomeIncompleteOrInvalid: () => void
}
