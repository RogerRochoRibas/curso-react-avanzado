import React from "react";
import styled from "styled-components";

const ColorInputStyled = styled.input`
  height: 30px;
  width: 60px;
  border-radius: 0.5rem;
  border: 1px solid #b0b0b0;

  &:hover {
    border: 1px solid;
  }
  &.error {
    border: 1px solid #fecaca !important;
  }
  &:focus {
    outline: 0 none;
  }
`;

export const ColorInput = ({ type = "color", defaultValue = "#0088CC" }) => {
  return (
    <>
      <ColorInputStyled
        type={type}
        defaultValue={defaultValue}
      ></ColorInputStyled>
    </>
  );
};
