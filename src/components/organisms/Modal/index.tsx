import { useEffect, useRef, useState } from 'react'
import Button, { ButtonOutlined } from '~/components/atoms/Buttons'
import { ModalAction, ModalBackdrop, ModalBox, ModalDialog, ModalForm } from './styles'
import { ModalProps } from './types'

const Modal = ({ id, title, description, open, color, onConfirm, onCancel }: ModalProps) => {
  const ref = useRef<HTMLDialogElement>(null)

  // Prevents colors from flicking based on previous opened modal content
  const [preventAnimation, setPreventAnimation] = useState(false)

  useEffect(() => {
    if (!ref.current) return
    if (open) {
      ref.current.showModal()
      setTimeout(() => setPreventAnimation(false), 200)
    } else {
      ref.current.close()
      setPreventAnimation(true)
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
      onCancel={e => {
        e.preventDefault()
        handleClose()
      }}>
      <ModalBox>
        <h3 className='font-bold text-lg' aria-label={title || 'Confirmar ação'}>
          {title}
        </h3>
        <p className='py-4'>{description}</p>
        <ModalAction>
          <ModalForm method='dialog' onSubmit={handleConfirm}>
            <ButtonOutlined $preventAnimation={preventAnimation} $color={color} type='button' onClick={handleClose}>
              Cancelar
            </ButtonOutlined>
            <Button $preventAnimation={preventAnimation} $color={color} type='submit'>
              Confirmar
            </Button>
          </ModalForm>
        </ModalAction>
      </ModalBox>
      <ModalBackdrop htmlFor={id} onClick={handleClose}>
        Cancelar
      </ModalBackdrop>
    </ModalDialog>
  )
}

export default Modal
