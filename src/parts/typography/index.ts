import styled from "styled-components"
import { colors } from "../../styles"

export const H1 = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 8px;
`

export const H2 = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
`

export const H3 = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
`

type PProps = {
  textAlign?: string
}

export const P = styled.p<PProps>`
  margin-bottom: 8px;
  text-align: ${(p) => p.textAlign};
`

export const Em = styled.em`
  color: ${colors.vigetOrange};
`
