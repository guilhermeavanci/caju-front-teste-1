import { InputHTMLAttributes } from 'react'

export type TextFieldProps = {
  id: string
  label: string
  name: string
  placeholder?: string
  error?: string
} & InputHTMLAttributes<any>
