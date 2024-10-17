import Columns from '~/components/organisms/Columns'
import * as S from './styles'
import { SearchBar } from '~/components/molecules/SearchBar'
import { DashboardProps } from './types'

const Dashboard = ({ searchBarProps, columnsProps }: DashboardProps) => {
  return (
    <S.Container>
      <SearchBar {...searchBarProps} />
      <Columns {...columnsProps} />
    </S.Container>
  )
}
export default Dashboard
