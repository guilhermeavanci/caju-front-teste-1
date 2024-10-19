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
    onMutate: variables => setLoadingRegistrationIds(prev => [...prev, variables.id]),
    onSuccess: () => getRegistrations.refetch(),
    onSettled: () => setLoadingRegistrationIds([])
  })

  const history = useHistory()

  const goToNewAdmissionPage = () => history.push(routes.newUser)

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

    const columnName = COLUMNS[modalState.state].title

    let title = ''
    switch (modalState.state) {
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

    const content = {
      title,
      description: (
        <>
          <span>{'Deseja mover '}</span>
          <EmployeeNameText>{employeeName}</EmployeeNameText>
          <span>{' para a coluna '}</span>
          <RegistrationStatusText $status={modalState.state}>{columnName}</RegistrationStatusText>
          <span>{'?'}</span>
        </>
      )
    }
    prevModalContent.current = content

    return content
  }, [dataMap, modalState])

  const handleApprove = useCallback((id: Registration['id']) => setModalState({ id, state: 'APPROVED' }), [])

  const handleReject = useCallback((id: Registration['id']) => setModalState({ id, state: 'REJECTED' }), [])

  const handleReview = useCallback((id: Registration['id']) => setModalState({ id, state: 'REVIEW' }), [])

  const handleModalConfirmation = useCallback(() => {
    if (!modalState) return
    patchRegistrationMutate({
      id: modalState?.id,
      body: {
        status: modalState?.state
      }
    })
    setModalState(undefined)
  }, [patchRegistrationMutate, modalState])

  if (getRegistrations.isError) {
    // TODO: create a component for error
    return <span>Error: {getRegistrations.error.message}</span>
  }

  return (
    <>
      <Dashboard
        searchBarProps={{
          textFieldProps: {
            placeholder: 'Digite um CPF válido'
          },
          buttonText: 'Nova Admissão',
          onSubmit: () => goToNewAdmissionPage()
        }}
        columnsProps={{
          isLoading: getRegistrations.isPending,
          columns,
          onClickApprove: handleApprove,
          onClickReject: handleReject,
          onClickReview: handleReview
        }}
      />
      <Modal
        id='confirmation-modal'
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
