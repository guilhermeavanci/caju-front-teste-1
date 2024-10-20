export type ColumnsProps = {
  isLoading?: boolean
  columns: ColumnsConfig
  onClickApprove: (registrationId: Registration['id']) => void
  onClickReject: (registrationId: Registration['id']) => void
  onClickReview: (registrationId: Registration['id']) => void
  onClickDelete: (registrationId: Registration['id']) => void
}

// TODO: since it's a core entity, we must move it out of here and maybe turn it into a model
export type Registration = {
  admissionDate: string
  email: string
  employeeName: string
  status: ColumnStatus
  cpf: string
  id: string
}

export type LoadableRegistration = Registration & {
  isLoading?: boolean
}

export type UnidentifiedRegistration = Omit<Registration, 'id'>

export type EditableRegistration = Partial<UnidentifiedRegistration>

export type ColumnStatus = 'REVIEW' | 'APPROVED' | 'REJECTED'

export type ColumnStyle = {
  backgroundColor: string
  color: string
}

export type ColumnsConfig = {
  [key in ColumnStatus]: {
    title: string
    style?: {
      backgroundColor: string
      color: string
    }
    registrations?: {
      [key in string]: LoadableRegistration
    }
  }
}
