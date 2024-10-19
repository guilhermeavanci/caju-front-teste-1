import Columns from '~/components/organisms/Columns'
import * as S from './styles'
import { SearchBar } from '~/components/molecules/SearchBar'
import { DashboardProps } from './types'
import Toast from '~/components/atoms/Toast'

const Dashboard = ({ searchBarProps, columnsProps }: DashboardProps) => {
  return (
    <S.Container>
      <SearchBar {...searchBarProps} />
      <Columns {...columnsProps} />
      <Toast />
    </S.Container>
  )
}
export default Dashboard
