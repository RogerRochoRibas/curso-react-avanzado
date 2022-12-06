import React from 'react'
import styled from 'styled-components'
import { colors } from '../../styles/colors'
import { dimensions } from '../../styles/dimensions'
import { fonts } from '../../styles/fonts'

const TextStyled = styled.p`
  margin: 5px;
`;

export const Text = ({
  children,
  color = colors.font.base,
  fontSize = dimensions.font.base,
  fontFamily = fonts.helvetica,
}) => {
    <TextStyled style={{ color, fontSize, fontFamily }}>{children}</TextStyled>
}
