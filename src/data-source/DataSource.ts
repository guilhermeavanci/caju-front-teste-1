import { EditableRegistration, Registration, UnidentifiedRegistration } from '~/components/organisms/Columns/types'

export interface DataSource {
  postRegistrations(payload: { body: UnidentifiedRegistration }): Promise<Registration[]>
  getRegistrations(cpf?: string): Promise<Registration[]>
  patchRegistrations(payload: { id: string; body: EditableRegistration }): Promise<Registration[]>
  deleteRegistrations(payload: { id: string }): Promise<Registration[]>
}
