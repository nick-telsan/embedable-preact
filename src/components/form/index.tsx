import { h } from "preact"
import { useState } from "preact/hooks"
import {
  Container,
  H3,
  P,
  EmailInput,
  InputLabel,
  LargeTextInput,
  TextInput,
  Button,
} from "../../parts"

export const Form = () => {
  const [formSubmitted, setFormSubmitted] = useState(false)

  return (
    <Container display="block" p="8px">
      <H3>Contact Us</H3>
      <P>
        Leave your name, email, and a brief message, and we'll get back to you
        before the heat death of the universe!
      </P>
      <Container display="block" mb="8px">
        <InputLabel for="name">Name</InputLabel>
        <TextInput id="name" placeholder="Jane Doe" />
      </Container>
      <Container display="block" mb="8px">
        <InputLabel for="email">Email</InputLabel>
        <EmailInput id="email" placeholder="jane@doe.xyz" />
      </Container>
      <Container display="block" mb="8px">
        <InputLabel for="message">Your Message</InputLabel>
        <LargeTextInput
          id="message"
          placeholder="Hey, this is a cool message."
        />
      </Container>
      <Container>
        <Button onClick={() => setFormSubmitted(true)}>Submit</Button>
      </Container>
      {formSubmitted && (
        <Container flexDirection="column" mt="2rem">
          <Container mx="auto">
            <H3>Thanks for your inquiry!</H3>
          </Container>
          <P textAlign="center">
            Someone will get back to you between now and the end of time.
          </P>
        </Container>
      )}
    </Container>
  )
}
