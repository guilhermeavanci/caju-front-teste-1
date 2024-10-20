import { EditableRegistration, Registration } from '~/components/organisms/Columns/types'
import type { DataSource } from './DataSource'

export class RegistrationApiDataSource implements DataSource {
  constructor() {}

  async getRegistrations(cpf?: string): Promise<Registration[]> {
    const url = new URL(`${import.meta.env.VITE_REGISTRATION_API_HOSTNAME}/registrations`)
    if (cpf) url.searchParams.set('cpf', cpf)
    const res = await fetch(url)
    return res.json()
  }

  async patchRegistrations({ id, body }: { id: string; body: EditableRegistration }): Promise<Registration[]> {
    const res = await fetch(`${import.meta.env.VITE_REGISTRATION_API_HOSTNAME}/registrations/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(body)
    })
    return res.json()
  }

  async deleteRegistrations({ id }: { id: string }): Promise<Registration[]> {
    const res = await fetch(`${import.meta.env.VITE_REGISTRATION_API_HOSTNAME}/registrations/${id}`, {
      method: 'DELETE'
    })
    return res.json()
  }
}
