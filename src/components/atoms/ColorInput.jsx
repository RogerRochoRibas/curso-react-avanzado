import React from 'react'
import styled from 'styled-components'

const ColorInputStyled = styled.input`
  height: 30px;
  width: 60px;
  border-radius: 0.5rem;
  border: 1px solid #b0b0b0;

  &:hover {
    border: 1px solid;
  }
  &.error {
    border: 1px solid #fecaca !important;
  }
  &:focus {
    outline: 0 none;
  }
`

export function ColorInput({ defaultValue = '#0088CC', onChange, id }) {
  return (
    <ColorInputStyled
      type="color"
      name={id}
      defaultValue={defaultValue}
      onChange={(e) => onChange(e.target.value)}
      id={id}
    />
  )
}
