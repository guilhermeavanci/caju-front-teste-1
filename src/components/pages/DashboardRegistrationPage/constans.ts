import { ColumnsConfig } from '~/components/organisms/Columns/types'
import { COLORS } from '~/theme'

export const COLUMNS: ColumnsConfig = {
  REVIEW: {
    title: 'Pronto para revisar',
    style: {
      backgroundColor: COLORS.REVIEW_LIGHT,
      color: COLORS.REVIEW
    }
  },
  APPROVED: {
    title: 'Aprovado',
    style: {
      backgroundColor: COLORS.APPROVED_LIGHT,
      color: COLORS.APPROVED
    }
  },
  REJECTED: {
    title: 'Reprovado',
    style: {
      backgroundColor: COLORS.REJECTED_LIGHT,
      color: COLORS.REJECTED
    }
  }
}
