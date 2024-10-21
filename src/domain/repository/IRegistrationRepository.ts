import { NewRegistration, Registration } from '~/domain/models'

export interface IRegistrationRepository {
  create(data: NewRegistration): Promise<Registration>
  get(cpf?: Registration['cpf']): Promise<Registration[]>
  approve(id: Registration['id']): Promise<Registration>
  reject(id: Registration['id']): Promise<Registration>
  rollback(id: Registration['id']): Promise<Registration>
  delete(id: Registration['id']): Promise<Registration>
}
