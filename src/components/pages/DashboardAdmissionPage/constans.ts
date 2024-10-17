import { ColumnsConfig } from '~/components/organisms/Columns/types'

export const COLUMNS: ColumnsConfig = {
  REVIEW: {
    title: 'Pronto para revisar',
    style: {
      backgroundColor: '#FDF8E9',
      color: '#EFC24D'
    }
  },
  APPROVED: {
    title: 'Aprovado',
    style: {
      backgroundColor: '#EEEEFD',
      color: '#4242DF'
    }
  },
  REJECTED: {
    title: 'Reprovado',
    style: {
      backgroundColor: '#FBEDF6',
      color: '#CE2893'
    }
  }
}
