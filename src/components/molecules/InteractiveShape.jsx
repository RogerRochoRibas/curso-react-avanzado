import { React, useState } from 'react'
import ColorInput from '../atoms/ColorInput'
import NumberInput from '../atoms/NumberInput'
import Text from '../atoms/Text'

export default function InteractiveShape ({
  children,
  defaultColor,
  defaultSize,
  modifyShape,
}) {
  const [size, setSize] = useState(defaultSize);
  const [color, setColor] = useState(defaultColor);

  return (
    <>
      <Text>
        Size:{" "}
        <NumberInput
          defaultValue={size}
          setSize={setSize}
          modifyShape={modifyShape}
          parameter="size"
        />
      </Text>
      <Text>
        Color:{" "}
        <ColorInput
          defaultValue={color}
          setColor={setColor}
          modifyShape={modifyShape}
          parameter="color"
        />
      </Text>
      <Text color={color} fontSize={size}>
        {children}
      </Text>
    </>
  );
};
