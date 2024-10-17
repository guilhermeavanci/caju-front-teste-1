import { useHistory } from 'react-router-dom'
import routes from '~/router/routes'
import UserForm from '~/components/templates/UserForm'

const NewUserPage = () => {
  const history = useHistory()
  const goToHome = () => {
    history.push(routes.dashboard)
  }

  return <UserForm confirmButtonText='Cadastrar' onClickBackButton={goToHome} onClickConfirmButton={() => {}} />
}

export default NewUserPage
