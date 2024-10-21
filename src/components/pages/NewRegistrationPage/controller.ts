import { IRegistrationRepository } from '~/domain/repository/IRegistrationRepository'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import { useHistory } from 'react-router-dom'
import Routes from '~/router/routes'
import { useCallback } from 'react'
import { NewRegistration } from '~/domain/models'
import { createRegistration } from '~/domain/use-case'

export function useNewRegistrationPageController(repository: IRegistrationRepository) {
  const history = useHistory()
  const goToDashboardPage = useCallback(() => history.push(Routes.DASHBOARD), [history])

  const postRegistrationMutation = useMutation({
    mutationKey: ['create-registration'],
    mutationFn: (variables: NewRegistration) => createRegistration(repository, variables),
    networkMode: 'always',
    onSuccess: (_, variables) => {
      toast.success(`Admissão "${variables.employeeName}" criada com sucesso`, {
        position: 'bottom-right'
      })
      goToDashboardPage()
    },
    onError: (_, variables) => {
      toast.error(`Falha ao tentar criar admissão "${variables.employeeName}"`, {
        position: 'bottom-right'
      })
    }
  })

  return {
    goToDashboardPage,
    postRegistrationMutation
  }
}
