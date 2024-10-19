import { useCallback } from 'react'
import _useBreakpoint from 'use-breakpoint'

type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

const BREAKPOINTS: {
  [key in Breakpoint]: number
} = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
}

export function useBreakpoint() {
  const bp = _useBreakpoint(BREAKPOINTS)

  const isLessThan = useCallback(
    (breakpoint: Breakpoint) => bp.breakpoint && BREAKPOINTS[bp.breakpoint] < BREAKPOINTS[breakpoint],
    [bp]
  )

  const isLessOrEqualTo = useCallback(
    (breakpoint: Breakpoint) => bp.breakpoint && BREAKPOINTS[bp.breakpoint] <= BREAKPOINTS[breakpoint],
    [bp]
  )

  const isGreaterThan = useCallback(
    (breakpoint: Breakpoint) => bp.breakpoint && BREAKPOINTS[bp.breakpoint] > BREAKPOINTS[breakpoint],
    [bp]
  )

  const isGreaterOrEqualTo = useCallback(
    (breakpoint: Breakpoint) => bp.breakpoint && BREAKPOINTS[bp.breakpoint] >= BREAKPOINTS[breakpoint],
    [bp]
  )

  return { ...bp, isLessThan, isLessOrEqualTo, isGreaterThan, isGreaterOrEqualTo }
}
