import { EditableRegistration, Registration, UnidentifiedRegistration } from '~/domain/models'

export interface IRegistrationDataSource {
  postRegistrations(payload: { body: UnidentifiedRegistration }): Promise<Registration>
  getRegistrations(cpf?: string): Promise<Registration[]>
  patchRegistrations(payload: { id: string; body: EditableRegistration }): Promise<Registration>
  deleteRegistrations(payload: { id: string }): Promise<Registration>
}
