import 'react-toastify/dist/ReactToastify.css'
import Router from '~/router'
import { Header } from './components/atoms/Header'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import * as S from './styles'
import { ToastContainer } from 'react-toastify'
import { RegistrationRepositoryImpl } from './data/repository/RegistrationRepositoryImpl'
import { RegistrationApiDataSource } from './data/data-source/RegistrationApiDataSource'

const queryClient = new QueryClient()

const dataSource = new RegistrationApiDataSource()
const repository = new RegistrationRepositoryImpl(dataSource)

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header>
        <h1>Caju Front Teste</h1>
      </Header>
      <Router repository={repository} />
      <S.GlobalStyle />
      <ToastContainer />
    </QueryClientProvider>
  )
}

export default App
