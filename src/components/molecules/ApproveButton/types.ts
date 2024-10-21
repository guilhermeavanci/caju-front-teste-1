import { LoadableRegistration, Registration } from '~/domain/models'

type HTMLButtonWithoutOnClick = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'>

export type ApproveButtonProps = HTMLButtonWithoutOnClick & {
  mode?: 'default' | 'icon'
  registration: LoadableRegistration
  onClick: (registrationId: Registration['id']) => void
}
