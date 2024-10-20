import Columns from '~/components/organisms/Columns'
import * as S from './styles'
import { ToolBar } from '~/components/organisms/ToolBar'
import { DashboardProps } from './types'
import Toast from '~/components/atoms/Toast'

const Dashboard = ({ toolBarProps, columnsProps }: DashboardProps) => {
  return (
    <S.Container>
      <ToolBar {...toolBarProps} />
      <Columns {...columnsProps} />
      <Toast />
    </S.Container>
  )
}
export default Dashboard
