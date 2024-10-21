import { Registration } from '~/domain/models'
import { IRegistrationRepository } from '~/domain/repository/IRegistrationRepository'

export async function removeRegistration(
  repository: IRegistrationRepository,
  id: Registration['id']
): Promise<Registration> {
  return repository.delete(id)
}
