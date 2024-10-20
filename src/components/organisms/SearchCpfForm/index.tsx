import * as T from './types'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useEffect } from 'react'
import { CpfTextField } from '~/components/molecules/CpfTextField'
import validations from '~/utils/validations'

const CPF_LENGTH = 11

const validationSchema: yup.Schema<T.SearchCpfFormSchema> = yup.object({
  cpf: validations.cpf().required()
})

const initialValues: T.SearchCpfFormSchema = {
  cpf: ''
}

export const SearchCpfForm = ({ onSubmit, onCpfBecomeIncompleteOrInvalid }: T.SearchCpfFormProps) => {
  const formik = useFormik({
    validationSchema,
    initialValues,
    onSubmit: values => onSubmit(values)
  })

  useEffect(() => {
    if (formik.values.cpf.length === CPF_LENGTH) {
      formik.submitForm()
    } else {
      onCpfBecomeIncompleteOrInvalid()
    }
    // Disabling eslint here because listening to formik creates an infinity loop
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formik.values.cpf])

  return (
    <form onSubmit={formik.handleSubmit}>
      <CpfTextField
        error={formik.touched.cpf ? formik.errors.cpf : undefined}
        value={formik.values.cpf}
        onChange={cpf => {
          formik.setFieldTouched('cpf', false)
          formik.handleChange({
            target: { id: 'cpf', name: 'cpf', value: cpf }
          })
        }}
      />
    </form>
  )
}
