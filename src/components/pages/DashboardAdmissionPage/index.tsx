import { ColumnsConfig } from '~/components/organisms/Columns/types'
import Dashboard from '~/components/templates/Dashboard'
import { useHistory } from 'react-router-dom'
import routes from '~/router/routes'
import { useMemo } from 'react'
import { COLUMNS } from './constans'
import { useQuery } from '@tanstack/react-query'
import { RegistrationApiDataSource } from '~/data-source/RegistrationApiDataSource'

// TODO: move it to a better place
const registrationApi = new RegistrationApiDataSource()

const DashboardPage = () => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ['registrations'],
    queryFn: registrationApi.getRegistrations
  })

  const history = useHistory()

  const goToNewAdmissionPage = () => {
    history.push(routes.newUser)
  }

  const columns = useMemo(() => {
    if (!data) return COLUMNS
    return data.reduce<ColumnsConfig>((prev, cur) => {
      const columnId = cur.status
      const column = prev[cur.status]
      return {
        ...prev,
        [columnId]: {
          ...column,
          registrations: {
            ...column.registrations,
            [cur.id]: cur
          }
        }
      }
    }, COLUMNS)
  }, [data])

  if (isPending) {
    // TODO: create a component for loading
    return <span>Loading...</span>
  }

  if (isError) {
    // TODO: create a component for error
    return <span>Error: {error.message}</span>
  }

  return (
    <Dashboard
      searchBarProps={{
        textFieldProps: {
          placeholder: 'Digite um CPF válido'
        },
        buttonText: 'Nova Admissão',
        onSubmit: () => goToNewAdmissionPage()
      }}
      columnsProps={{
        columns
      }}
    />
  )
}
export default DashboardPage
