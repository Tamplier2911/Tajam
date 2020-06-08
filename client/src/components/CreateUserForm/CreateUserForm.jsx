// import "./CreateUserForm.scss";
import React, { useState } from "react";

// components
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";

// sc
import {
  CreateUserFormContainer,
  CreateUserFormElement,
} from "./CreateUserForm.styles";

const CreateUserForm = ({ onCreateChatUser }) => {
  const [chatObject, setChatObject] = useState({ userName: "", roomName: "" });
  const { userName, roomName } = chatObject;

  const onInputChange = (e) => {
    const { name, value } = e.target;
    // handle errors
    setChatObject({ ...chatObject, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // validate
    onCreateChatUser({ name: userName, room: roomName });
  };

  return (
    <CreateUserFormContainer>
      <CreateUserFormElement autoComplete="off" onSubmit={(e) => onSubmit(e)}>
        <FormInput
          onInputChange={onInputChange}
          value={userName}
          name="userName"
          type="text"
          id="usernameforminput"
          placeholder="Name"
          label="User Name"
          required
        />
        <FormInput
          onInputChange={onInputChange}
          value={roomName}
          name="roomName"
          type="text"
          id="roomnameforminput"
          placeholder="Room"
          label="Room name"
          required
        />
        <Button title="Login to Chat" type="submit" color="dark" />
      </CreateUserFormElement>
    </CreateUserFormContainer>
  );
};

export default CreateUserForm;
