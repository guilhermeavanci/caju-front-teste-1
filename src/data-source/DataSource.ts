import { Registration } from '~/components/organisms/Columns/types'

export interface DataSource {
  getRegistrations(): Promise<Registration[]>
}
