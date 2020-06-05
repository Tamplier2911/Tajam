// import "./MessageForm.scss";
import React, { useState } from "react";

// components
import FormInput from "../FormInput/FormInput";

// cs
import {
  MessageFormContainer,
  MessageFormElement,
  MessageFormWipe,
  MessageFormWipeSVG,
  MessageFormLabel,
  MessageFormLabelSVG,
  MessageFormSubmit,
} from "./MessageForm.styles";

const MessageForm = ({ wipe }) => {
  const [userMessage, setUserMessage] = useState({ user: "", message: "" });
  const { user, message } = userMessage;

  const onInputChange = (e) => {
    const { name, value } = e.target;
    // handle errors
    setUserMessage({ ...userMessage, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // validate
    alert(`${user} ${message}`);
  };

  return (
    <MessageFormContainer>
      <MessageFormElement onSubmit={(e) => onSubmit(e)} autoComplete="off">
        <FormInput
          onInputChange={onInputChange}
          value={message}
          name="message"
          type="text"
          placeholder="Message..."
          id="usermessageid"
        />
        <MessageFormWipe onClick={() => wipe()}>
          <MessageFormWipeSVG />
        </MessageFormWipe>
        <MessageFormLabel htmlFor="messagesubmit">
          <MessageFormLabelSVG />
        </MessageFormLabel>
        <MessageFormSubmit type="submit" id="messagesubmit" />
      </MessageFormElement>
    </MessageFormContainer>
  );
};

export default MessageForm;
