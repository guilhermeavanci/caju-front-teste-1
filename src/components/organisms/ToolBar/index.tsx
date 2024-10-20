import { HiRefresh } from 'react-icons/hi'
import Button, { ButtonOutlined } from '~/components/atoms/Buttons'
import * as S from './styles'
import * as T from './types'
import { useBreakpoint } from '~/hooks/useBreakpoint'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { cpf as cpfValidator } from 'cpf-cnpj-validator'
import { useEffect } from 'react'
import { CpfTextField } from '~/components/molecules/CpfTextField'

const CPF_LENGTH = 11

const validationSchema: yup.Schema<{ cpf?: string }> = yup.object({
  cpf: yup.string().test('cpf validation', 'CPF inválido', value => !!value && cpfValidator.isValid(value))
})

export const ToolBar = ({
  newRegistrationButton,
  dataUpdatedAt,
  onClickRefresh,
  onCpfBecomeValid,
  onCpfBecomeIncompleteOrInvalid
}: T.ToolBarProps) => {
  const { isGreaterThan } = useBreakpoint()
  const formik = useFormik({
    validationSchema,
    initialValues: {
      cpf: ''
    },
    onSubmit: values => {
      onCpfBecomeValid(values.cpf)
    }
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
    <S.Container>
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
      <S.Actions>
        <S.DataUpdatedAt>
          {isGreaterThan('md') ? 'Última atualização: ' : null}
          {isGreaterThan('sm') ? dataUpdatedAt : null}
        </S.DataUpdatedAt>
        <ButtonOutlined $rounded aria-label='refetch' onClick={() => onClickRefresh()}>
          <HiRefresh />
        </ButtonOutlined>
        <Button onClick={() => newRegistrationButton.onClick()}>{newRegistrationButton.text}</Button>
      </S.Actions>
    </S.Container>
  )
}
