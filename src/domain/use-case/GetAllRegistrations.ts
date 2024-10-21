import { Registration } from '~/domain/models'
import { IRegistrationRepository } from '~/domain/repository/IRegistrationRepository'

export async function getAllRegistrations(repository: IRegistrationRepository): Promise<Registration[]> {
  return repository.get()
}
