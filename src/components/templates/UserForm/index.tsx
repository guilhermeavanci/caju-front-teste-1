import * as S from './styles'
import { ButtonSmallOutlined } from '~/components/atoms/Buttons'
import { HiOutlineArrowLeft } from 'react-icons/hi'
import { UserFormProps } from './types'
import RegistrationForm from '~/components/organisms/RegistrationForm'
import Skeleton from 'react-loading-skeleton'
import { COLORS } from '~/theme'

const UserForm = ({ isLoading, onClickBackButton, onSubmit }: UserFormProps) => {
  return (
    <>
      <S.Container>
        <S.Card>
          {isLoading && (
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 4,
                right: 4
              }}>
              <Skeleton count={1} height={8} baseColor={COLORS.PRIMARY_LIGHT} highlightColor={COLORS.PRIMARY} />
            </div>
          )}
          <ButtonSmallOutlined $rounded onClick={() => onClickBackButton()} aria-label='back'>
            <HiOutlineArrowLeft />
          </ButtonSmallOutlined>
          <RegistrationForm isLoading={isLoading} onSubmit={onSubmit} />
        </S.Card>
      </S.Container>
    </>
  )
}

export default UserForm
