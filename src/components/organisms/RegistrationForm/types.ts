export type RegistrationFormSchema = {
  employeeName: string
  email: string
  cpf: string
  admissionDate: string
}

export type RegistrationFormProps = {
  isLoading?: boolean
  onSubmit: (data: RegistrationFormSchema) => void
}
