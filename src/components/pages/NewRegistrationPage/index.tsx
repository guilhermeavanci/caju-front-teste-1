import { useHistory } from 'react-router-dom'
import Routes from '~/router/routes'
import NewRegistrationTemplate from '~/components/templates/NewRegistrationTemplate'
import { useMutation } from '@tanstack/react-query'
import { RegistrationApiDataSource } from '~/data-source/RegistrationApiDataSource'
import { toast } from 'react-toastify'

// TODO: move it to a better place
const registrationApi = new RegistrationApiDataSource()

const NewRegistrationPage = () => {
  const history = useHistory()
  const goToHome = () => {
    history.push(Routes.DASHBOARD)
  }

  const { mutate: postRegistrationMutate, isPending } = useMutation({
    mutationKey: ['create-registration'],
    mutationFn: registrationApi.postRegistrations,
    networkMode: 'always',
    onSuccess: (_, variables) => {
      toast.success(`Admissão "${variables.body.employeeName}" criada com sucesso`, {
        position: 'bottom-right'
      })
      goToHome()
    },
    onError: (_, variables) =>
      toast.error(`Falha ao tentar criar admissão "${variables.body.employeeName}"`, {
        position: 'bottom-right'
      })
  })

  return (
    <NewRegistrationTemplate
      isLoading={isPending}
      onClickBackButton={goToHome}
      onSubmit={data =>
        postRegistrationMutate({
          body: {
            ...data,
            // Default status when it's a new registration
            status: 'REVIEW'
          }
        })
      }
    />
  )
}

export default NewRegistrationPage
