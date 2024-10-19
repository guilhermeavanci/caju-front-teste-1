import styled from 'styled-components'

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 16px;
  border-radius: 8px;
  padding: 20px;
  background-color: #fff;
  h3,
  p {
    margin: 0;
  }
  box-shadow:
    0 1px 3px rgba(0, 0, 0, 0.12),
    0 1px 2px rgba(0, 0, 0, 0.24);
`

export const IconAndText = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  &[aria-disabled='true'] {
    opacity: 0.5;
    cursor: auto;
  }
`

export const Actions = styled.div`
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  gap: 4px;

  svg {
    cursor: pointer;
  }
`
