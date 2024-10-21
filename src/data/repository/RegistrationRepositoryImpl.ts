import { IRegistrationRepository } from '~/domain/repository/IRegistrationRepository'
import { IRegistrationDataSource } from '../data-source/IRegistrationDataSource'
import { NewRegistration, Registration } from '~/domain/models'

export class RegistrationRepositoryImpl implements IRegistrationRepository {
  dataSource: IRegistrationDataSource

  constructor(dataSource: IRegistrationDataSource) {
    this.dataSource = dataSource
  }
  create(data: NewRegistration): Promise<Registration> {
    return this.dataSource.postRegistrations({
      body: {
        ...data,
        // Default status when it's a new registration
        status: 'REVIEW'
      }
    })
  }
  get(cpf?: Registration['cpf']): Promise<Registration[]> {
    return this.dataSource.getRegistrations(cpf)
  }
  approve(id: Registration['id']): Promise<Registration> {
    return this.dataSource.patchRegistrations({
      id,
      body: {
        status: 'APPROVED'
      }
    })
  }
  reject(id: Registration['id']): Promise<Registration> {
    return this.dataSource.patchRegistrations({
      id,
      body: {
        status: 'REJECTED'
      }
    })
  }
  rollback(id: Registration['id']): Promise<Registration> {
    return this.dataSource.patchRegistrations({
      id,
      body: {
        status: 'REVIEW'
      }
    })
  }
  delete(id: Registration['id']): Promise<Registration> {
    return this.dataSource.deleteRegistrations({ id })
  }
}
