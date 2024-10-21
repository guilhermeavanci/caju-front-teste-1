export type RegistrationStatus = 'REVIEW' | 'APPROVED' | 'REJECTED'

export type Registration = {
  admissionDate: string
  email: string
  employeeName: string
  status: RegistrationStatus
  cpf: string
  id: string
}

export type LoadableRegistration = Registration & {
  isLoading?: boolean
}

export type UnidentifiedRegistration = Omit<Registration, 'id'>

export type NewRegistration = Omit<UnidentifiedRegistration, 'status'>

export type EditableRegistration = Partial<UnidentifiedRegistration>
