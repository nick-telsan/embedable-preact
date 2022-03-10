import { h } from "preact"
import { GithubIcon } from "../../assets"
import { Container, H2 } from "../../parts"
import { NavContainer, NavLink } from "./styles"

export const Navigation = () => {
  return (
    <NavContainer>
      <H2>Embedable Form</H2>
      <Container ml="auto" mr="8px">
        <NavLink>
          <GithubIcon />
        </NavLink>
      </Container>
    </NavContainer>
  )
}
