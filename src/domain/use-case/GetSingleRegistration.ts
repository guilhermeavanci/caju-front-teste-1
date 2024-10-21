import { Registration } from '~/domain/models'
import { IRegistrationRepository } from '~/domain/repository/IRegistrationRepository'

export async function getSingleRegistration(
  repository: IRegistrationRepository,
  cpf?: Registration['cpf']
): Promise<Registration[]> {
  return repository.get(cpf)
}
