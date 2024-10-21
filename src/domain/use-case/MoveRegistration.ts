import { Registration, RegistrationStatus } from '~/domain/models'
import { IRegistrationRepository } from '~/domain/repository/IRegistrationRepository'

export async function moveRegistration(
  repository: IRegistrationRepository,
  id: string,
  toStatus: RegistrationStatus
): Promise<Registration> {
  switch (toStatus) {
    case 'REVIEW': {
      return repository.rollback(id)
    }
    case 'APPROVED': {
      return repository.approve(id)
    }
    case 'REJECTED': {
      return repository.reject(id)
    }
  }
}
