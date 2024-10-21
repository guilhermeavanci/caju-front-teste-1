import { IRegistrationRepository } from '~/domain/repository/IRegistrationRepository'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useHistory } from 'react-router-dom'
import Routes from '~/router/routes'
import { useCallback, useMemo, useState } from 'react'
import { getAllRegistrations, getSingleRegistration, moveRegistration, removeRegistration } from '~/domain/use-case'
import { toast } from 'react-toastify'
import { Registration, RegistrationStatus } from '~/domain/models'
import * as T from './types'

export function useDashboardRegistrationPageController(repository: IRegistrationRepository) {
  const history = useHistory()
  const goToNewRegistrationPage = useCallback(() => history.push(Routes.NEW_REGISTRATION), [history])

  const [cpf, setCpf] = useState('')

  const [loadingRegistrationIds, setLoadingRegistrationIds] = useState<Registration['id'][]>([])

  const getRegistrationsQuery = useQuery({
    queryKey: ['get-registrations', cpf, repository],
    queryFn: () => (cpf ? getSingleRegistration(repository, cpf) : getAllRegistrations(repository))
  })

  const dataMap = useMemo<T.RegistrationMap>(() => {
    if (!getRegistrationsQuery.data) return {}
    return getRegistrationsQuery.data.reduce((prev, cur) => {
      return {
        ...prev,
        [cur.id]: cur
      }
    }, {})
  }, [getRegistrationsQuery.data])

  const moveRegistrationMutation = useMutation({
    mutationKey: ['update-registration'],
    mutationFn: ({ id, toStatus }: { id: string; toStatus: RegistrationStatus }) =>
      moveRegistration(repository, id, toStatus),
    networkMode: 'always',
    onMutate: variables => setLoadingRegistrationIds(prev => [...prev, variables.id]),
    onSuccess: (_, variables) => {
      toast.success(`Admissão "${dataMap[variables.id].employeeName}" movida com sucesso`, {
        position: 'bottom-right'
      })
      getRegistrationsQuery.refetch()
    },
    onError: (_, variables) =>
      toast.error(`Falha ao tentar atualizar admissão "${dataMap[variables.id].employeeName}"`, {
        position: 'bottom-right'
      }),
    onSettled: () => setLoadingRegistrationIds([])
  })

  const removeRegistrationMutation = useMutation({
    mutationKey: ['delete-registration'],
    mutationFn: ({ id }: { id: string }) => removeRegistration(repository, id),
    networkMode: 'always',
    onMutate: variables => setLoadingRegistrationIds(prev => [...prev, variables.id]),
    onSuccess: (_, variables) => {
      toast.success(`Admissão "${dataMap[variables.id].employeeName}" removida com sucesso`, {
        position: 'bottom-right'
      })
      getRegistrationsQuery.refetch()
    },
    onError: (_, variables) =>
      toast.error(`Falha ao tentar remover admissão "${dataMap[variables.id].employeeName}"`, {
        position: 'bottom-right'
      }),
    onSettled: () => setLoadingRegistrationIds([])
  })

  return {
    goToNewRegistrationPage,
    setCpf,
    loadingRegistrationIds,
    getRegistrationsQuery,
    moveRegistrationMutation,
    removeRegistrationMutation
  }
}
