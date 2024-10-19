import { createGlobalStyle } from 'styled-components'
import { COLORS } from './theme'

export const GlobalStyle = createGlobalStyle<{ $whiteColor?: boolean }>`
  :root {
    --toastify-color-info: ${COLORS.INFO};
    --toastify-color-success: ${COLORS.SUCCESS};
    --toastify-color-warning: ${COLORS.REVIEW};
    --toastify-color-error: ${COLORS.ERROR};
  }
`
