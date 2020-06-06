// import "./CreateUserForm.scss";
import React, { useState, useContext } from "react";

// contexts
import AppStore from "../../contexts/GlobalContext/globalContext";

// components
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";

// sc
import {
  CreateUserFormContainer,
  CreateUserFormElement,
} from "./CreateUserForm.styles";

const CreateUserForm = () => {
  const { setChatCurrentUser } = useContext(AppStore);

  const [userObject, setUserObject] = useState({ userName: "" });
  const { userName } = userObject;

  const onInputChange = (e) => {
    const { name, value } = e.target;
    // handle errors
    setUserObject({ ...userObject, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // validate
    setChatCurrentUser(userName);
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
          placeholder="Pick a random name"
          label="User Name"
          required
        />
        <Button title="Login to Chat" type="submit" />
      </CreateUserFormElement>
    </CreateUserFormContainer>
  );
};

export default CreateUserForm;
