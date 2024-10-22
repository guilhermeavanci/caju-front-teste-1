import { ButtonSmallOutlined } from '~/components/atoms/Buttons'
import * as S from './styles'
import { HiOutlineMail, HiOutlineUser, HiOutlineCalendar, HiOutlineTrash } from 'react-icons/hi'
import * as T from './types'
import { Color, COLORS } from '~/theme'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import ApproveButton from '~/components/molecules/ApproveButton'
import RejectButton from '~/components/molecules/RejectButton'
import ReviewButton from '~/components/molecules/ReviewButton'
import { useBreakpoint } from '~/hooks/useBreakpoint'
import { useMemo } from 'react'

const RegistrationCard = ({
  registration,
  onClickApprove,
  onClickReject,
  onClickReview,
  onClickDelete
}: T.RegistrationCardProps) => {
  const { isLessOrEqualTo } = useBreakpoint()
  const screenMdOrLess = useMemo(() => isLessOrEqualTo('md'), [isLessOrEqualTo])
  const buttonsType = useMemo(() => (screenMdOrLess ? 'icon' : 'default'), [screenMdOrLess])

  const onReview = useMemo(() => registration.status === 'REVIEW', [registration.status])
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
        {!onReview && (
          <>
            <ReviewButton
              style={{
                flex: 1
              }}
              mode={buttonsType}
              registration={registration}
              onClick={onClickReview}
            />
            {!screenMdOrLess && <div style={{ flex: 2 }} />}
          </>
        )}
        {onReview && (
          <>
            <ApproveButton
              style={{
                flex: 1
              }}
              mode={buttonsType}
              registration={registration}
              onClick={onClickApprove}
            />
            <RejectButton
              style={{
                flex: 1
              }}
              mode={buttonsType}
              registration={registration}
              onClick={onClickReject}
            />
            {!screenMdOrLess && <div style={{ flex: 1 }} />}
          </>
        )}
        <ButtonSmallOutlined
          aria-label='Remover'
          aria-disabled={registration.isLoading}
          disabled={registration.isLoading}
          $color={Color.ERROR}
          onClick={() => onClickDelete(registration.id)}>
          <HiOutlineTrash size={18} />
        </ButtonSmallOutlined>
      </S.Actions>
    </S.Card>
  )
}

export default RegistrationCard
