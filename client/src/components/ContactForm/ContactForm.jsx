import "./ContactForm.scss";
import React, { useState } from "react";

// components
import FormInput from "../FormInput/FormInput";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";

// sc
import {} from "./ContactForm.styles";

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
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // validate here
    console.log(userCredentials);
  };

  return (
    <div className="contactForm">
      <form
        className="contactForm__element"
        autoComplete="off"
        onSubmit={(e) => onSubmit(e)}
      >
        <FormInput
          onInputChange={onInputChange}
          value={name}
          name="name"
          type="text"
          id="formInputName"
          placeholder="Name"
          required
        />
        <FormInput
          onInputChange={onInputChange}
          value={email}
          name="email"
          type="email"
          id="formInputEmail"
          placeholder="Email"
          required
        />
        <FormInput
          onInputChange={onInputChange}
          value={subject}
          name="subject"
          type="text"
          id="formInputSubject"
          placeholder="Subject"
          required
        />
        <TextInput
          onInputChange={(e) => onInputChange(e)}
          value={message}
          name="message"
          id="formTextMessage"
          rows="6"
          placeholder="Message"
          required
        />
        <Button title="submit" type="submit" />
      </form>
    </div>
  );
};

export default ContactForm;
