import { NewRegistration, Registration } from '~/domain/models'
import { IRegistrationRepository } from '~/domain/repository/IRegistrationRepository'

export async function createRegistration(
  repository: IRegistrationRepository,
  data: NewRegistration
): Promise<Registration> {
  return repository.create(data)
}
