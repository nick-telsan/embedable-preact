import { h, render } from "preact"
import { StyleSheetManager } from "styled-components"
import { Form, Navigation } from "./components"
import css from "./index.css"
import { AppContainer } from "./parts"

type EmbedProps = {
  shadowRoot: ShadowRoot
  fontFamily: string
}

type RootProps = {
  rootId: string
  fontFamily: string
}

const Embed = ({ shadowRoot, fontFamily }: EmbedProps) => {
  return (
    <StyleSheetManager target={shadowRoot as unknown as HTMLElement}>
      <AppContainer fontFamily={fontFamily}>
        <Navigation />
        <Form />
      </AppContainer>
    </StyleSheetManager>
  )
}

export const init = ({ rootId, fontFamily }: RootProps) => {
  const appRoot = document.querySelector(`#${rootId}`)

  if (!appRoot) {
    console.error("App root could not be found. Check your rootId")
    return null
  }

  appRoot.attachShadow({
    mode: "open",
  })

  if (!appRoot.shadowRoot) {
    console.error("Shadow root could not be attached")
    return null
  }

  const styleTag = document.createElement("style")
  styleTag.innerHTML = css
  appRoot.shadowRoot.appendChild(styleTag)

  render(
    <Embed shadowRoot={appRoot.shadowRoot} fontFamily={fontFamily} />,
    appRoot.shadowRoot
  )
}
