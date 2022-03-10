import styled from "styled-components"
import { colors } from "../../styles"

export const Button = styled.button`
  background-color: ${colors.vigetBlue};
  border: none;
  border-radius: 8px;
  box-shadow: 2px 2px 4px #a5a58d;
  color: white;
  font-size: 1.125rem;
  font-weight: 700;
  height: 3rem;
  padding: 4px;
  width: 100%;

  &:disabled {
    background-color: ${colors.vigetBlueDisabled};
    cursor: not-allowed;
  }
`
