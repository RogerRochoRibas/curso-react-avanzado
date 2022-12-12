import { React, useState, useEffect } from 'react'
import { ColorInput, NumberInput, Text } from '../atoms'

// En este nivel (molecules) deberías de crear un InputNumberGroup y InputColorGroup que combine Label+InputNumber y Label+InputColor
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
      {/* Aquí deberías de tener un label con htmlFor, y al input le faltan id y name. */}
      <Text>
        Size: <NumberInput defaultValue={defaultSize} handleChange={setSize} />
      </Text>
      <Text>
        Color:
        <ColorInput defaultValue={defaultColor} handleChange={setColor} />
      </Text>
      <Text color={color} fontSize={size}>
        {children}
      </Text>
    </>
  )
}
