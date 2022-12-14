import React from 'react'
import { Label, NumberInput } from '../atoms'

export default function InputNumberGroup({
  children,
  id,
  defaultValue,
  onChange,
}) {
  return (
    <p>
      <Label id={id}>{children}</Label>
      <NumberInput
        defaultValue={defaultValue}
        onChange={onChange}
        id={id}
      />
    </p>
  )
}
