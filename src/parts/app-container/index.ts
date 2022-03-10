import styled from "styled-components"
import { colors } from "../../styles"

type AppContainerProps = {
  fontFamily: string
}

export const AppContainer = styled.div<AppContainerProps>`
  background-color: ${colors.primaryBackground};
  display: flex;
  flex-direction: column;
  font-family: ${(p) => p.fontFamily || "sans-serif"};
  height: 100%;
  overflow: auto;
`
