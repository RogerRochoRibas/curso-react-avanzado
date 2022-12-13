import { React, useState, useEffect } from 'react'
import { Text } from '../atoms'
import InputNumberGroup from '../molecules/InputNumberGroup'
import InputColorGroup from '../molecules/InputColorGroup'

export function InteractiveShape({
  children,
  defaultColor,
  defaultSize,
  setShape,
  shape,
}) {
  const [size, setSize] = useState(defaultSize)
  const [color, setColor] = useState(defaultColor)

  useEffect(() => {
    const newShape = { ...shape }
    newShape.size = size
    setShape(newShape)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [size])

  useEffect(() => {
    const newShape = { ...shape }
    newShape.color = color
    setShape(newShape)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [color])

  return (
    <>
      <InputNumberGroup
        defaultValue={defaultSize}
        handleChange={setSize}
        id="size"
      >
        Size:{' '}
      </InputNumberGroup>
      <InputColorGroup
        defaultValue={defaultColor}
        handleChange={setColor}
        id="color"
      >
        Color:{' '}
      </InputColorGroup>
      <Text color={color} fontSize={size}>
        {children}
      </Text>
    </>
  )
}
