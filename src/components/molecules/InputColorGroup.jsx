import React from 'react'
import { Label, ColorInput } from '../atoms'

export default function InputColorGroup({
  children,
  id,
  //  defaultValue no se usa
  defaultValue,
  handleChange,
}) {
  return (
    <p>
      <Label id={id}>{children}</Label>
      <ColorInput
        // Renombrar handleChange por por onChange => onChange={onChange}
        handleChange={handleChange}
        id={id}
      />
    </p>
  )
}
