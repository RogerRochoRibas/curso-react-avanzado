import React from 'react'
import { Label, NumberInput } from '../atoms'

export default function InputNumberGroup({
  children,
  id,
  defaultValue,
  handleChange,
}) {
  return (
    <p>
      <Label id={id}>{children}</Label>
      <NumberInput
        defaultValue={defaultValue}
        handleChange={handleChange}
        id={id}
      />
    </p>
  )
}
