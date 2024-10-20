import TextField from '~/components/atoms/TextField'
import Button from '~/components/atoms/Buttons'
import * as T from './types'
import * as S from './styles'
import { useFormik } from 'formik'
import validations from '~/utils/validations'
import * as yup from 'yup'
import { CpfTextField } from '~/components/molecules/CpfTextField'

const validationSchema: yup.Schema<T.RegistrationFormSchema> = yup.object({
  employeeName: validations.fullname().required('Campo obrigatório'),
  email: validations.email().required('Campo obrigatório'),
  cpf: validations.cpf().required('Campo obrigatório'),
  admissionDate: validations.date().required('Campo obrigatório')
})

const initialValues: T.RegistrationFormSchema = {
  employeeName: '',
  email: '',
  cpf: '',
  admissionDate: ''
}

const RegistrationForm = ({ isLoading, onSubmit }: T.RegistrationFormProps) => {
  const formik = useFormik({
    validationSchema,
    initialValues,
    onSubmit: values => onSubmit(values)
  })
  return (
    <S.Form onSubmit={formik.handleSubmit}>
      <TextField
        id='employeeName'
        name='employeeName'
        placeholder='Nome'
        label='Nome'
        error={formik.touched.employeeName ? formik.errors.employeeName : undefined}
        value={formik.values.employeeName}
        onChange={e => {
          formik.setFieldTouched('employeeName', false)
          formik.handleChange({
            target: { id: 'employeeName', name: 'employeeName', value: e.target.value }
          })
        }}
        disabled={isLoading}
        aria-disabled={isLoading}
      />
      <TextField
        id='email'
        name='email'
        type='email'
        placeholder='Email'
        label='Email'
        error={formik.touched.email ? formik.errors.email : undefined}
        value={formik.values.email}
        onChange={e => {
          formik.setFieldTouched('email', false)
          formik.handleChange({
            target: { id: 'email', name: 'email', value: e.target.value }
          })
        }}
        disabled={isLoading}
        aria-disabled={isLoading}
      />
      <CpfTextField
        error={formik.touched.cpf ? formik.errors.cpf : undefined}
        value={formik.values.cpf}
        onChange={cpf => {
          formik.setFieldTouched('cpf', false)
          formik.handleChange({
            target: { id: 'cpf', name: 'cpf', value: cpf }
          })
        }}
        disabled={isLoading}
        aria-disabled={isLoading}
      />
      <TextField
        id='admissionDate'
        name='admissionDate'
        type='date'
        label='Data de admissão'
        error={formik.touched.admissionDate ? formik.errors.admissionDate : undefined}
        value={formik.values.admissionDate}
        onChange={e => {
          formik.setFieldTouched('admissionDate', false)
          formik.handleChange({
            target: { id: 'admissionDate', name: 'admissionDate', value: e.target.value }
          })
        }}
        disabled={isLoading}
        aria-disabled={isLoading}
      />
      <Button type='submit' disabled={isLoading} aria-disabled={isLoading}>
        Cadastrar
      </Button>
    </S.Form>
  )
}

export default RegistrationForm
