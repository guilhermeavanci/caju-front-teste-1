import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import * as S from './styles'
import * as T from './types'
import RegistrationCard from '~/components/organisms/RegistrationCard'

const Columns = ({ isLoading, columns, onClickApprove, onClickReject, onClickReview }: T.ColumnsProps) => {
  return (
    <S.Container>
      {Object.values(columns).map(column => {
        const { backgroundColor, color } = column.style || {}
        return (
          <S.Column $backgroundColor={backgroundColor} key={column.title}>
            <>
              <S.TitleColumn $color={color}>{column.title}</S.TitleColumn>
              <S.ColumContent>
                {isLoading && (
                  <div style={{ padding: '0 16px 0' }}>
                    <Skeleton
                      count={3}
                      height={150}
                      style={{
                        margin: '10px 0 10px'
                      }}
                      baseColor={'#fff'}
                      highlightColor={backgroundColor}
                    />
                  </div>
                )}
                {column.registrations &&
                  Object.values(column.registrations).map(registration => {
                    return (
                      <RegistrationCard
                        registration={registration}
                        key={registration.id}
                        onClickApprove={onClickApprove}
                        onClickReject={onClickReject}
                        onClickReview={onClickReview}
                      />
                    )
                  })}
              </S.ColumContent>
            </>
          </S.Column>
        )
      })}
    </S.Container>
  )
}

export default Columns
