import { EditableRegistration, Registration } from '~/components/organisms/Columns/types'

export interface DataSource {
  getRegistrations(cpf?: string): Promise<Registration[]>
  patchRegistrations(payload: { id: string; body: EditableRegistration }): Promise<Registration[]>
  deleteRegistrations(payload: { id: string }): Promise<Registration[]>
}
