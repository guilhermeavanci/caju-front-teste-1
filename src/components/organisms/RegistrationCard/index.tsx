import { ButtonSmallOutlined } from '~/components/atoms/Buttons'
import * as S from './styles'
import { HiOutlineMail, HiOutlineUser, HiOutlineCalendar, HiOutlineTrash } from 'react-icons/hi'
import * as T from './types'
import { COLORS } from '~/theme'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import ApproveButton from '~/components/molecules/ApproveButton'
import RejectButton from '~/components/molecules/RejectButton'
import ReviewButton from '~/components/molecules/ReviewButton'
import { useBreakpoint } from '~/hooks/useBreakpoint'
import { useMemo } from 'react'

const RegistrationCard = ({ registration, onClickApprove, onClickReject, onClickReview }: T.RegistrationCardProps) => {
  const { isLessOrEqualTo } = useBreakpoint()
  const buttonsType = useMemo(() => (isLessOrEqualTo('md') ? 'icon' : 'default'), [isLessOrEqualTo])
  const showApproveButton = useMemo(() => registration.status === 'REVIEW', [registration.status])
  const showRejectButton = useMemo(() => registration.status === 'REVIEW', [registration.status])
  const showReviewButton = useMemo(
    () => registration.status === 'REJECTED' || registration.status === 'APPROVED',
    [registration.status]
  )
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
        {showReviewButton && (
          <ReviewButton
            style={{
              width: '25%'
            }}
            mode={buttonsType}
            registration={registration}
            onClick={onClickReview}
          />
        )}
        {showApproveButton && (
          <ApproveButton
            style={{
              width: '25%'
            }}
            mode={buttonsType}
            registration={registration}
            onClick={onClickApprove}
          />
        )}
        {showRejectButton && (
          <RejectButton
            style={{
              width: '25%'
            }}
            mode={buttonsType}
            registration={registration}
            onClick={onClickReject}
          />
        )}
        <ButtonSmallOutlined
          style={{
            width: '25%',
            marginLeft: 'auto'
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
