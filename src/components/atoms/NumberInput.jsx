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

export const NumberInput = ({ type = "number", defaultValue = "100" , setSize }) => {
  return (
    <>
      <NumberInputStyled
        type={type}
        defaultValue={defaultValue}
        onChange={e => setSize(+e.target.value)}
      ></NumberInputStyled>
    </>
  );
};
