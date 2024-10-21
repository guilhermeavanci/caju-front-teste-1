import { ColumnsConfig } from '~/components/organisms/Columns/types'
import DashboardTemplate from '~/components/templates/DashboardTemplate'
import { useCallback, useMemo, useRef, useState } from 'react'
import { COLUMNS } from './constans'
import Modal from '~/components/organisms/Modal'
import * as T from './types'
import { EmployeeNameText } from '~/components/atoms/EmployeeNameText'
import { RegistrationStatusText } from '~/components/atoms/RegistrationStatusText'
import { Color } from '~/theme'
import { useDashboardRegistrationPageController } from './controller'
import { Registration } from '~/domain/models'

const DashboardRegistrationPage = ({ repository }: T.DashboardRegistrationPageProps) => {
  const {
    goToNewRegistrationPage,
    setCpf,
    loadingRegistrationIds,
    getRegistrationsQuery,
    moveRegistrationMutation,
    removeRegistrationMutation
  } = useDashboardRegistrationPageController(repository)

  const [modalState, setModalState] = useState<T.ModalState>()

  const dataMap = useMemo<T.RegistrationMap>(() => {
    if (!getRegistrationsQuery.data) return {}
    return getRegistrationsQuery.data.reduce((prev, cur) => {
      return {
        ...prev,
        [cur.id]: cur
      }
    }, {})
  }, [getRegistrationsQuery.data])

  const columns = useMemo(() => {
    if (!getRegistrationsQuery.data) return COLUMNS
    return getRegistrationsQuery.data.reduce<ColumnsConfig>((prev, cur) => {
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
  }, [getRegistrationsQuery.data, loadingRegistrationIds])

  const prevModalContent = useRef<T.ModalContent>()
  const modalContent = useMemo<T.ModalContent | undefined>(() => {
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
      removeRegistrationMutation.mutate({ id })
    } else {
      moveRegistrationMutation.mutate({
        id,
        toStatus: action
      })
    }

    setModalState(undefined)
  }, [removeRegistrationMutation, moveRegistrationMutation, modalState])

  if (getRegistrationsQuery.isError) {
    // TODO: create a component for error
    return <span>Error: {getRegistrationsQuery.error.message}</span>
  }

  return (
    <>
      <DashboardTemplate
        toolBarProps={{
          dataUpdatedAt: new Date(getRegistrationsQuery.dataUpdatedAt).toLocaleTimeString(),
          newRegistrationButton: { text: 'Nova Admissão', onClick: () => goToNewRegistrationPage() },
          onClickRefresh: () => getRegistrationsQuery.refetch(),
          onCpfSearchFormSubmit: ({ cpf }) => setCpf(cpf),
          onCpfBecomeIncompleteOrInvalid: () => setCpf('')
        }}
        columnsProps={{
          isLoading: getRegistrationsQuery.isPending,
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
export default DashboardRegistrationPage
