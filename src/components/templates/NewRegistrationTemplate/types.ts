import { RegistrationFormSchema } from '~/components/organisms/RegistrationForm/types'

export type NewRegistrationTemplateProps = {
  isLoading?: boolean
  onClickBackButton: () => void
  onSubmit: (data: RegistrationFormSchema) => void
}
