import Router from '~/router'
import { Header } from './components/atoms/Header'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import * as S from './styles'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header>
        <h1>Caju Front Teste</h1>
      </Header>
      <Router />
      <S.GlobalStyle />
    </QueryClientProvider>
  )
}

export default App
