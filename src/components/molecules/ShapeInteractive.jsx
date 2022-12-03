import { ColorInput, NumberInput, Text } from "../atoms";
import { colors } from "../../styles/colors";
import { dimensions } from "../../styles/dimensions";

import React from "react";

export const ShapeInteractive = ({children}) => {
  return (
    <>
      <Text color={colors.blue} fontSize={dimensions.xxxl}>
        {children}
      </Text>
      <NumberInput></NumberInput>
      <ColorInput></ColorInput>
    </>
  );
};
