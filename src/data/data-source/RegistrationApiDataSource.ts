import { EditableRegistration, Registration, UnidentifiedRegistration } from '~/domain/models'
import type { IRegistrationDataSource } from './IRegistrationDataSource'

const PATH = `${import.meta.env.VITE_REGISTRATION_API_HOSTNAME}/registrations`

export class RegistrationApiDataSource implements IRegistrationDataSource {
  constructor() {}

  async postRegistrations({ body }: { body: UnidentifiedRegistration }): Promise<Registration> {
    const res = await fetch(PATH, {
      method: 'POST',
      body: JSON.stringify(body)
    })
    return res.json()
  }

  async getRegistrations(cpf?: string): Promise<Registration[]> {
    const url = new URL(PATH)
    if (cpf) url.searchParams.set('cpf', cpf)
    const res = await fetch(url, { method: 'GET' })
    return res.json()
  }

  async patchRegistrations({ id, body }: { id: string; body: EditableRegistration }): Promise<Registration> {
    const res = await fetch(`${PATH}/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(body)
    })
    return res.json()
  }

  async deleteRegistrations({ id }: { id: string }): Promise<Registration> {
    const res = await fetch(`${PATH}/${id}`, {
      method: 'DELETE'
    })
    return res.json()
  }
}
