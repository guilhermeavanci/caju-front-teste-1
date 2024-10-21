import NewRegistrationTemplate from '~/components/templates/NewRegistrationTemplate'
import * as T from './types'
import { useNewRegistrationPageController } from './controller'

const NewRegistrationPage = ({ repository }: T.NewRegistrationPageProps) => {
  const {
    goToDashboardPage,
    postRegistrationMutation: { mutate: postRegistrationMutate, isPending }
  } = useNewRegistrationPageController(repository)

  return (
    <NewRegistrationTemplate
      isLoading={isPending}
      onClickBackButton={goToDashboardPage}
      onSubmit={data => postRegistrationMutate(data)}
    />
  )
}

export default NewRegistrationPage
