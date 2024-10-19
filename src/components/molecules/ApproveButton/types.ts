import { LoadableRegistration, Registration } from '~/components/organisms/Columns/types'

type HTMLButtonWithoutOnClick = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'>

export type ApproveButtonProps = HTMLButtonWithoutOnClick & {
  mode?: 'default' | 'icon'
  registration: LoadableRegistration
  onClick: (registrationId: Registration['id']) => void
}
