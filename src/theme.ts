// export type Color = 'PRIMARY' | 'ERROR' | 'APPROVED' | 'REJECTED' | 'REVIEW'

export enum Color {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
  TERTIARY = 'TERTIARY',
  INFO = 'INFO',
  SUCCESS = 'SUCCESS',
  WARNING = 'WARNING',
  ERROR = 'ERROR',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
  REVIEW = 'REVIEW'
}

type LightColorSuffix = '_LIGHT'

type ContentColorSuffix = '_CONTENT'

type ColorPalette = {
  [key in Color as key | `${key}${LightColorSuffix}` | `${key}${ContentColorSuffix}`]: string
}

export const COLORS: ColorPalette = {
  PRIMARY: '#00E0C2',
  PRIMARY_LIGHT: '#edfffd',
  PRIMARY_CONTENT: '#004c42',
  SECONDARY: '#FF5E1C',
  SECONDARY_LIGHT: '#FDF8E9',
  SECONDARY_CONTENT: '#FFF',
  TERTIARY: '#e80537',
  TERTIARY_LIGHT: '#fff1f4',
  TERTIARY_CONTENT: '#FFF',
  // Status
  INFO: '#5820D7',
  INFO_LIGHT: '#e6dcff',
  INFO_CONTENT: '#fff',
  SUCCESS: '#64a98c',
  SUCCESS_LIGHT: '#e8fff5',
  SUCCESS_CONTENT: '#000',
  WARNING: '#FFC42B',
  WARNING_LIGHT: '#fff6de',
  WARNING_CONTENT: '#000',
  ERROR: '#e80537',
  ERROR_LIGHT: '#fff1f4',
  ERROR_CONTENT: '#FFF',
  // Registration Status
  APPROVED: '#4242DF',
  APPROVED_LIGHT: '#EEEEFD',
  APPROVED_CONTENT: '#FFF',
  REJECTED: '#CE2893',
  REJECTED_LIGHT: '#FBEDF6',
  REJECTED_CONTENT: '#FFF',
  REVIEW: '#FF5E1C',
  REVIEW_LIGHT: '#FDF8E9',
  REVIEW_CONTENT: '#FFF'
}
