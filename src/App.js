import "./App.css";
import { Container, Button, Form } from "react-bootstrap";
import Amplify, { API } from "aws-amplify";
import awsExports from "./aws-exports";
import { useState } from "react";
Amplify.configure(awsExports);

function App() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const updateFormState = (e) => {
    setForm((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  const addContact = async () => {
    const data = {
      body: { name: form.name, email: form.email, message: form.message },
    };

    const apiData = await API.post("apicontactform", "/contact", data);
    console.log(apiData);
    alert("Mail sent");
  };

  return (
    <Container>
      <div>
        <h3>Get in touch</h3>
        <br />
        <Form>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              placeholder="Name"
              name="name"
              value={form.name}
              onChange={updateFormState}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              placeholder="Email"
              name="email"
              value={form.email}
              onChange={updateFormState}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Message</Form.Label>
            <Form.Control
              placeholder="Message"
              name="message"
              value={form.message}
              onChange={updateFormState}
            />
          </Form.Group>
          <Button onClick={addContact}>Send a message</Button>
        </Form>
      </div>
    </Container>
  );
}

export default App;
