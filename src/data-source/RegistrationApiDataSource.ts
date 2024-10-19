import { EditableRegistration, Registration } from '~/components/organisms/Columns/types'
import type { DataSource } from './DataSource'

export class RegistrationApiDataSource implements DataSource {
  constructor() {}

  async getRegistrations(): Promise<Registration[]> {
    const res = await fetch(`${import.meta.env.VITE_REGISTRATION_API_HOSTNAME}/registrations`)
    return res.json()
  }

  async patchRegistrations({ id, body }: { id: string; body: EditableRegistration }): Promise<Registration[]> {
    const res = await fetch(`${import.meta.env.VITE_REGISTRATION_API_HOSTNAME}/registrations/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(body)
    })
    return res.json()
  }
}
