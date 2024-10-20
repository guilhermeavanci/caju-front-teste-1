import Columns from '~/components/organisms/Columns'
import * as S from './styles'
import { ToolBar } from '~/components/organisms/ToolBar'
import * as T from './types'

const DashboardTemplate = ({ toolBarProps, columnsProps }: T.DashboardTemplateProps) => {
  return (
    <S.Container>
      <ToolBar {...toolBarProps} />
      <Columns {...columnsProps} />
    </S.Container>
  )
}
export default DashboardTemplate
