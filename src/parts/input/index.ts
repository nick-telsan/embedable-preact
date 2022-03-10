import styled from "styled-components"

type InputLabelProps = {
  for: string
}

export const InputLabel = styled.label<InputLabelProps>`
  font-size: 1.125rem;
`

const Input = styled.input`
  border-radius: 4px;
  font-size: 1.125rem;
  height: 2rem;
  width: 100%;
`

export const TextInput = styled(Input).attrs(() => ({
  type: "text",
}))``

export const EmailInput = styled(Input).attrs(() => ({
  type: "email",
}))``

export const LargeTextInput = styled.textarea.attrs(() => ({
  rows: 5,
}))`
  border-radius: 4px;
  font-size: 1.125rem;
  width: 100%;
`
