import styled from "styled-components"
import { Button } from "../../parts"
import { colors } from "../../styles"

export const NavContainer = styled.div`
  align-items: center;
  background-color: ${colors.secondaryBackground};
  border-bottom: 2px solid black;
  box-shadow: 0 0 2px black;
  display: flex;
  padding: 8px;
  width: 100%;
`

type NavButtonProps = {
  active: boolean
}

export const NavButton = styled.button<NavButtonProps>`
  border: none;
  background-color: unset;
  border-bottom: ${(p) =>
    p.active ? `2px solid ${colors.vigetOrange}` : null};
  font-size: 1.125rem;
  margin: 0 0.75rem;
`

export const NavLink = styled.a``
