import React from 'react'
import { Label, ColorInput } from '../atoms'

export default function InputColorGroup({
  children,
  id,
  defaultValue,
  handleChange,
}) {
  return (
    <p>
      <Label id={id}>{children}</Label>
      <ColorInput
        defaultValue={defaultValue}
        handleChange={handleChange}
        id={id}
      />
    </p>
  )
}
