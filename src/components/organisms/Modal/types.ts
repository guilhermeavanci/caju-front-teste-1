export type ModalProps = {
  id: string
  title: string
  description: string | React.ReactNode
  open: boolean
  onConfirm?: () => void
  onCancel?: () => void
}
