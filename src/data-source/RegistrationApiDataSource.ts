import { Registration } from '~/components/organisms/Columns/types'
import type { DataSource } from './DataSource'

export class RegistrationApiDataSource implements DataSource {
  constructor() {}

  async getRegistrations(): Promise<Registration[]> {
    const res = await fetch(`${import.meta.env.VITE_REGISTRATION_API_HOSTNAME}/registrations`)
    return res.json()
  }
}
