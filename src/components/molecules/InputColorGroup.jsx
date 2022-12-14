import React from 'react'
import { Label, ColorInput } from '../atoms'

export default function InputColorGroup({
  children,
  id,
  defaultValue,
  onChange,
}) {
  return (
    <p>
      <Label id={id}>{children}</Label>
      <ColorInput
        defaultValue={defaultValue}
        onChange={onChange}
        id={id}
      />
    </p>
  )
}
