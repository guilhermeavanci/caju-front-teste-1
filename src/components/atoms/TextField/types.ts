import { InputHTMLAttributes } from 'react'

export type TextFieldProps = {
  id: string
  label: string
  placeholder?: string
  error?: string
} & InputHTMLAttributes<any>
