import { useEffect, useRef } from 'react'
import Button, { ButtonOutlined } from '~/components/atoms/Buttons'
import { ModalAction, ModalBackdrop, ModalBox, ModalDialog, ModalForm } from './styles'
import { ModalProps } from './types'

const Modal = ({ id, title, description, open, onConfirm, onCancel }: ModalProps) => {
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    if (!ref.current) return
    if (open) {
      ref.current.showModal()
    } else {
      ref.current.close()
    }
  }, [open])

  const handleClose = () => {
    if (onCancel) onCancel()
  }

  const handleConfirm = () => {
    if (onConfirm) onConfirm()
  }

  return (
    <ModalDialog
      ref={ref}
      id={id}
      className='modal'
      onCancel={e => {
        e.preventDefault()
        handleClose()
      }}>
      <ModalBox className='modal-box'>
        <h3 className='font-bold text-lg'>{title}</h3>
        <p className='py-4'>{description}</p>
        <ModalAction className='modal-action'>
          <ModalForm method='dialog' onSubmit={handleConfirm}>
            <ButtonOutlined type='button' onClick={handleClose}>
              Cancelar
            </ButtonOutlined>
            <Button type='submit'>Confirmar</Button>
          </ModalForm>
        </ModalAction>
      </ModalBox>
      <ModalBackdrop className='modal-backdrop' htmlFor={id} onClick={handleClose}>
        Cancelar
      </ModalBackdrop>
    </ModalDialog>
  )
}

export default Modal
