import { ColorInput, NumberInput, Text } from "../atoms";
import React from "react";
import { useState } from "react";

export const InteractiveShape = ({
  children,
  defaultColor,
  defaultSize,
  modifyShape,
  shape,
}) => {
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
        ></NumberInput>
      </Text>
      <Text>
        Color:
        <ColorInput
          defaultValue={color}
          setColor={setColor}
          modifyShape={modifyShape}
          parameter="color"
        ></ColorInput>
      </Text>
      <Text color={color} fontSize={size}>
        {children}
      </Text>
    </>
  );
};
