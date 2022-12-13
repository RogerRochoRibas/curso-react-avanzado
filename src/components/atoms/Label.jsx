import React from 'react'
import { colors } from '../../styles/colors'
import { dimensions } from '../../styles/dimensions'
import { fonts } from '../../styles/fonts'

export function Label({
  children,
  id,
  color = colors.font.base,
  fontSize = dimensions.font.base,
  fontFamily = fonts.helvetica,
}) {
  return (
    <label style={{ color, fontSize, fontFamily }} htmlFor={id}>
      {children}
    </label>
  )
}
