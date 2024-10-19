import { ButtonSmall, ButtonSmallOutlined } from '~/components/atoms/Buttons'
import * as S from './styles'
import {
  HiOutlineMail,
  HiOutlineUser,
  HiOutlineCalendar,
  HiOutlineTrash,
  HiOutlineThumbDown,
  HiOutlineThumbUp,
  HiDocumentText
} from 'react-icons/hi'
import * as T from './types'
import { COLORS } from '~/theme'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useBreakpoint } from '~/hooks/useBreakpoint'
import { useMemo } from 'react'

const RegistrationCard = ({ registration, onClickApprove, onClickReject, onClickReview }: T.RegistrationCardProps) => {
  const { isLessOrEqualTo } = useBreakpoint()
  const smallMode = useMemo(() => isLessOrEqualTo('md'), [isLessOrEqualTo])
  return (
    <S.Card>
      {registration.isLoading && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 4,
            right: 4
          }}>
          <Skeleton
            count={1}
            height={8}
            baseColor={COLORS[`${registration.status}_LIGHT`]}
            highlightColor={COLORS[registration.status]}
          />
        </div>
      )}
      <S.IconAndText aria-disabled={registration.isLoading}>
        <HiOutlineUser />
        <h3>{registration.employeeName}</h3>
      </S.IconAndText>
      <S.IconAndText aria-disabled={registration.isLoading}>
        <HiOutlineMail />
        <p>{registration.email}</p>
      </S.IconAndText>
      <S.IconAndText aria-disabled={registration.isLoading}>
        <HiOutlineCalendar />
        <span>{registration.admissionDate}</span>
      </S.IconAndText>
      <S.Actions>
        <ButtonSmall
          style={{
            flex: 1
          }}
          aria-disabled={registration.isLoading}
          disabled={registration.isLoading}
          $backgroundColor={COLORS.REJECTED}
          $color={COLORS.REJECTED_CONTENT}
          onClick={() => onClickReject(registration.id)}>
          {smallMode ? <HiOutlineThumbDown size={18} /> : 'Reprovar'}
        </ButtonSmall>
        <ButtonSmall
          style={{
            flex: 1
          }}
          aria-disabled={registration.isLoading}
          disabled={registration.isLoading}
          $backgroundColor={COLORS.APPROVED}
          $color={COLORS.APPROVED_CONTENT}
          onClick={() => onClickApprove(registration.id)}>
          {smallMode ? <HiOutlineThumbUp size={18} /> : 'Aprovar'}
        </ButtonSmall>
        <ButtonSmall
          style={{
            flex: 1
          }}
          aria-disabled={registration.isLoading}
          disabled={registration.isLoading}
          $backgroundColor={COLORS.REVIEW}
          $color={COLORS.REVIEW_CONTENT}
          onClick={() => onClickReview(registration.id)}>
          {smallMode ? <HiDocumentText size={18} /> : 'Revisar novamente'}
        </ButtonSmall>
        <ButtonSmallOutlined
          style={{
            flex: 1
          }}
          aria-disabled={registration.isLoading}
          disabled={registration.isLoading}
          $color={COLORS.ERROR}
          $hoverBackgroundColor={COLORS.ERROR_LIGHT}
          onClick={() => {}}>
          <HiOutlineTrash size={18} />
        </ButtonSmallOutlined>
      </S.Actions>
    </S.Card>
  )
}

export default RegistrationCard
