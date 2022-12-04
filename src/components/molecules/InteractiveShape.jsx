import { ColorInput, NumberInput, Text } from "../atoms";
import React from "react";
import { useState } from "react";

export const InteractiveShape = ({ children, defaultColor, defaultSize }) => {
  const [size, setSize] = useState(defaultSize);
  const [color, setColor] = useState(defaultColor);

  return (
    <>
      <Text color={color} fontSize={size}>
        {children}
      </Text>
      <Text>
        Size: <NumberInput defaultValue={size} setSize={setSize}></NumberInput>
      </Text>
      <Text>
        Color:
        <ColorInput defaultValue={color} setColor={setColor}></ColorInput>
      </Text>
    </>
  );
};
