import styled from "styled-components"

type ContainerProps = {
  display?: string
  flexDirection?: string
  m?: string
  mx?: string
  my?: string
  mt?: string
  mr?: string
  mb?: string
  ml?: string
  p?: string
}

export const Container = styled.div<ContainerProps>`
  display: ${(p) => p.display || "flex"};
  flex-direction: ${(p) => p.flexDirection || "row"};
  margin-top: ${(p) => p.mt || p.my || p.m};
  margin-right: ${(p) => p.mr || p.mx || p.m};
  margin-bottom: ${(p) => p.mb || p.my || p.m};
  margin-left: ${(p) => p.ml || p.mx || p.m};
  padding: ${(p) => p.p};
`

export const GridContainer = styled(Container)`
  display: grid;
  grid: 100% / auto-flow;
`

export const ClickersContainer = styled(Container)`
  border: 2px solid black;
`

export const ClickerHeaderContainer = styled(GridContainer)`
  border-bottom: 2px solid black;
  margin-bottom: 6px;
`
