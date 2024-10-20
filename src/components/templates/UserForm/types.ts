import { RegistrationFormSchema } from '~/components/organisms/RegistrationForm/types'

export type UserFormProps = {
  isLoading?: boolean
  onClickBackButton: () => void
  onSubmit: (data: RegistrationFormSchema) => void
}
