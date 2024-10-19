import { Color } from '~/theme'

export type ModalProps = {
  color?: Color
  id: string
  title: string
  description: string | React.ReactNode
  open: boolean
  onConfirm?: () => void
  onCancel?: () => void
}
