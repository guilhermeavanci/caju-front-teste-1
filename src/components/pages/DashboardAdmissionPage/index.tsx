import { ColumnsConfig, Registration } from '~/components/organisms/Columns/types'
import Dashboard from '~/components/templates/Dashboard'
import { useHistory } from 'react-router-dom'
import routes from '~/router/routes'
import { useCallback, useMemo, useRef, useState } from 'react'
import { COLUMNS } from './constans'
import { useMutation, useQuery } from '@tanstack/react-query'
import { RegistrationApiDataSource } from '~/data-source/RegistrationApiDataSource'
import Modal from '~/components/organisms/Modal'
import { ModalContent, ModalState, RegistrationMap } from './types'
import { EmployeeNameText } from '~/components/atoms/EmployeeNameText'
import { RegistrationStatusText } from '~/components/atoms/RegistrationStatusText'
import { Color } from '~/theme'
import { toast } from 'react-toastify'

// TODO: move it to a better place
const registrationApi = new RegistrationApiDataSource()

const DashboardPage = () => {
  const getRegistrations = useQuery({
    queryKey: ['get-registrations'],
    queryFn: registrationApi.getRegistrations
  })

  const { mutate: patchRegistrationMutate } = useMutation({
    mutationKey: ['update-registration'],
    mutationFn: registrationApi.patchRegistrations,
    networkMode: 'always',
    onMutate: variables => setLoadingRegistrationIds(prev => [...prev, variables.id]),
    onSuccess: () => getRegistrations.refetch(),
    onError: () =>
      toast.error('Falha ao tentar atualizar admissão', {
        position: 'bottom-right'
      }),
    onSettled: () => setLoadingRegistrationIds([])
  })

  const { mutate: deleteRegistrationMutate } = useMutation({
    mutationKey: ['delete-registration'],
    mutationFn: registrationApi.deleteRegistrations,
    networkMode: 'always',
    onMutate: variables => setLoadingRegistrationIds(prev => [...prev, variables.id]),
    onSuccess: () => getRegistrations.refetch(),
    onError: () =>
      toast.error('Falha ao tentar remover admissão', {
        position: 'bottom-right'
      }),
    onSettled: () => setLoadingRegistrationIds([])
  })

  const history = useHistory()

  const goToNewRegistrationPage = () => history.push(routes.newUser)

  const [modalState, setModalState] = useState<ModalState>()

  const [loadingRegistrationIds, setLoadingRegistrationIds] = useState<Registration['id'][]>([])

  const dataMap = useMemo<RegistrationMap>(() => {
    if (!getRegistrations.data) return {}
    return getRegistrations.data.reduce((prev, cur) => {
      return {
        ...prev,
        [cur.id]: cur
      }
    }, {})
  }, [getRegistrations.data])

  const columns = useMemo(() => {
    if (!getRegistrations.data) return COLUMNS
    return getRegistrations.data.reduce<ColumnsConfig>((prev, cur) => {
      const columnId = cur.status
      const column = prev[cur.status]
      return {
        ...prev,
        [columnId]: {
          ...column,
          registrations: {
            ...column.registrations,
            [cur.id]: { ...cur, isLoading: loadingRegistrationIds.includes(cur.id) }
          }
        }
      }
    }, COLUMNS)
  }, [getRegistrations.data, loadingRegistrationIds])

  const prevModalContent = useRef<ModalContent>()
  const modalContent = useMemo<ModalContent | undefined>(() => {
    if (!modalState) return prevModalContent.current
    const employeeName: Registration['employeeName'] | undefined = dataMap[modalState.id]?.employeeName

    let content

    if (modalState.action === 'DELETE') {
      content = {
        color: Color.ERROR,
        title: 'Remover admissão',
        description: (
          <>
            <span>{'Deseja realmente remover '}</span>
            <EmployeeNameText>{employeeName}</EmployeeNameText>
            <span>{' permanentemente?'}</span>
          </>
        )
      }
    } else {
      let title = ''
      switch (modalState.action) {
        case 'REVIEW':
          title = 'Revisar novamente'
          break
        case 'APPROVED':
          title = 'Aprovar'
          break
        case 'REJECTED':
          title = 'Reprovar'
          break
      }

      content = {
        color: Color[modalState.action],
        title,
        description: (
          <>
            <span>{'Deseja mover '}</span>
            <EmployeeNameText>{employeeName}</EmployeeNameText>
            <span>{' para a coluna '}</span>
            <RegistrationStatusText $status={modalState.action}>
              {COLUMNS[modalState.action].title}
            </RegistrationStatusText>
            <span>{'?'}</span>
          </>
        )
      }
    }

    prevModalContent.current = content
    return content
  }, [dataMap, modalState])

  const handleApprove = useCallback((id: Registration['id']) => setModalState({ id, action: 'APPROVED' }), [])

  const handleReject = useCallback((id: Registration['id']) => setModalState({ id, action: 'REJECTED' }), [])

  const handleReview = useCallback((id: Registration['id']) => setModalState({ id, action: 'REVIEW' }), [])

  const handleDelete = useCallback((id: Registration['id']) => setModalState({ id, action: 'DELETE' }), [])

  const handleModalConfirmation = useCallback(() => {
    if (!modalState) return
    const { id, action } = modalState

    if (action === 'DELETE') {
      deleteRegistrationMutate({ id })
    } else {
      patchRegistrationMutate({
        id,
        body: {
          status: action
        }
      })
    }

    setModalState(undefined)
  }, [deleteRegistrationMutate, patchRegistrationMutate, modalState])

  if (getRegistrations.isError) {
    // TODO: create a component for error
    return <span>Error: {getRegistrations.error.message}</span>
  }

  return (
    <>
      <Dashboard
        toolBarProps={{
          textFieldProps: {
            placeholder: 'Digite um CPF válido'
          },
          dataUpdatedAt: new Date(getRegistrations.dataUpdatedAt).toLocaleTimeString(),
          newRegistrationButton: { text: 'Nova Admissão', onClick: () => goToNewRegistrationPage() },
          onClickRefresh: () => getRegistrations.refetch()
        }}
        columnsProps={{
          isLoading: getRegistrations.isPending,
          columns,
          onClickApprove: handleApprove,
          onClickReject: handleReject,
          onClickReview: handleReview,
          onClickDelete: handleDelete
        }}
      />
      <Modal
        id='confirmation-modal'
        color={modalContent?.color}
        title={modalContent?.title || ''}
        description={modalContent?.description || ''}
        open={!!modalState}
        onConfirm={handleModalConfirmation}
        onCancel={() => setModalState(undefined)}
      />
    </>
  )
}
export default DashboardPage
