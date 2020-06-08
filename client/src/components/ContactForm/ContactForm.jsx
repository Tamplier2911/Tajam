// import "./ContactForm.scss";
import React, { useState } from "react";

// components
import FormInput from "../FormInput/FormInput";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";

// sc
import {
  ContactsFormContainer,
  ContactsFormElement,
} from "./ContactForm.styles";

const ContactForm = () => {
  const [userCredentials, setUserCredentials] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { name, email, subject, message } = userCredentials;

  const onInputChange = (e) => {
    const { name, value } = e.target;
    // handle errors
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // validate here
    alert(`${name}, ${email}, ${subject}, ${message}`);
  };

  return (
    <ContactsFormContainer>
      <ContactsFormElement autoComplete="off" onSubmit={(e) => onSubmit(e)}>
        <FormInput
          onInputChange={onInputChange}
          value={name}
          name="name"
          type="text"
          id="formInputName"
          placeholder="Name"
          label="Name"
          required
        />
        <FormInput
          onInputChange={onInputChange}
          value={email}
          name="email"
          type="email"
          id="formInputEmail"
          placeholder="Email"
          label="Email"
          required
        />
        <FormInput
          onInputChange={onInputChange}
          value={subject}
          name="subject"
          type="text"
          id="formInputSubject"
          placeholder="Subject"
          label="Subject"
          required
        />
        <TextInput
          onInputChange={onInputChange}
          value={message}
          name="message"
          id="formTextMessage"
          rows="6"
          placeholder="Message"
          label="Message"
          required
        />
        <Button title="submit" type="submit" color="dark" />
      </ContactsFormElement>
    </ContactsFormContainer>
  );
};

export default ContactForm;
