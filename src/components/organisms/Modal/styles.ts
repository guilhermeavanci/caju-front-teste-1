import styled from 'styled-components'

// Based on https://daisyui.com/components/modal/

/*
MIT License

Copyright (c) 2020 Pouya Saadeghi

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

export const ModalDialog = styled.dialog`
  pointer-events: none;
  position: fixed;
  inset: 0;
  margin: 0;
  display: grid;
  height: 100%;
  max-height: none;
  width: 100%;
  max-width: none;
  justify-items: center;
  padding: 0;
  opacity: 0;
  overscroll-behavior: contain;
  z-index: 999;
  background-color: transparent;
  color: inherit;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  transition-property: transform, opacity, visibility;
  overflow-y: hidden;
  align-items: center;

  &.modal-open,
  &:target,
  &.modal-toggle:checked + &,
  &[open] {
    pointer-events: auto;
    visibility: visible;
    opacity: 1;
  }

  &:not(dialog:not(.modal-open)),
  &::backdrop {
    background-color: #0006;
    animation: modal-pop 0.2s ease-out;
  }
`

export const ModalBox = styled.div`
  max-height: calc(100vh - 5em);
  grid-column-start: 1;
  grid-row-start: 1;
  width: 91.666667%;
  max-width: 32rem;
  --tw-scale-x: 0.9;
  --tw-scale-y: 0.9;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))
    skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  border-radius: 32px;
  background-color: #fff;
  padding: 1.5rem;
  transition: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform,
    filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  overflow-y: auto;
  overscroll-behavior: contain;

  &.modal-open,
  &.modal-toggle:checked + &,
  &:target,
  &[open] {
    --tw-translate-y: 0;
    --tw-scale-x: 1;
    --tw-scale-y: 1;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))
      skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
`

export const ModalAction = styled.div`
  display: flex;
  margin-top: 1.5rem;
  justify-content: flex-end;
`

export const ModalForm = styled.form`
  display: flex;
  gap: 0.5rem;
`

export const ModalBackdrop = styled.label`
  z-index: -1;
  grid-column-start: 1;
  grid-row-start: 1;
  display: grid;
  align-self: stretch;
  justify-self: stretch;
  color: transparent;
`
