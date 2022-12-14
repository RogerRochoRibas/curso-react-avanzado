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

// Al tener name definido por defecto y tener varios inputs, vas a tener problemas porque esta repetido.
export function ColorInput({ defaultValue = '#0088CC', handleChange, id }) {
  return (
    <ColorInputStyled
      type="color"
      name="ColorInput"
      defaultValue={defaultValue}
      // Renombrar handleChange por por onChange => onChange={onChange}
      onChange={(e) => handleChange(e.target.value)}
      id={id}
    />
  )
}
