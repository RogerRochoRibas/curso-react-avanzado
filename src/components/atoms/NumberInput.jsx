import React from "react";
import styled from "styled-components";

const NumberInputStyled = styled.input`
  height: 18px;
  width: 60px;
  padding: 0.5rem;
  margin: 5px;
  border-radius: 0.5rem;
  border: 1px solid #b0b0b0;
  font-size: 16px;

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

export const NumberInput = ({
  type = "number",
  defaultValue = "100",
  setSize,
}) => {
  return (
    <>
      {/* Falta la prop value */}
      <NumberInputStyled
        type={type}
        name="NumberInput"
        defaultValue={defaultValue}
        // onChange debería ser más generico a este nivel. setSize es demasiado especifico y solo se podra reusar para un proposito si fuese a crece la app.
        onChange={(e) => setSize(+e.target.value)}
      ></NumberInputStyled>
    </>
  );
};
