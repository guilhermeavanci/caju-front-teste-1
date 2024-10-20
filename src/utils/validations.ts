import * as yup from 'yup'
import { cpf as cpfValidator } from 'cpf-cnpj-validator'

const fullname = () => yup.string().matches(/^[^0-9].*\s.*[a-zA-Z]{2,}/, 'Nome completo inválido')

const email = () =>
  yup.string().matches(/^([A-Z0-9_+-]+\.?)*[A-Z0-9_+-]@([A-Z0-9][A-Z0-9-]*\.)+[A-Z]{2,}$/i, 'Email inválido')

const cpf = () => yup.string().test('cpf validation', 'CPF inválido', value => !!value && cpfValidator.isValid(value))

const date = () => yup.string()

export default { fullname, email, cpf, date }
