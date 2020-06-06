// import "./SubscribeForm.scss";
import React, { useState } from "react";

// components
import FormInput from "../FormInput/FormInput";

// sc
import {
  SubscribeFormContainer,
  SubscribeFormElement,
  SubscribeFormLabel,
  SubscribeFormSVG,
  SubscribeFormSubmit,
} from "./SubscribeForm.styles";

const SubscribeForm = () => {
  const [subscribeObject, setSubscribeObject] = useState({ email: "" });
  const { email } = subscribeObject;

  const onInputChange = (e) => {
    const { name, value } = e.target;
    // handle errors
    setSubscribeObject({ ...subscribeObject, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // validate and send to the server
    alert(`${email}`);
  };

  return (
    <SubscribeFormContainer>
      <SubscribeFormElement onSubmit={(e) => onSubmit(e)} autoComplete="on">
        <FormInput
          onInputChange={onInputChange}
          value={email}
          name="email"
          type="email"
          placeholder="Subscribe our newslatter"
          id="emailsubscribe"
          label="Email address"
          wierdForm={1}
        />
        <SubscribeFormLabel htmlFor="submissive">
          <SubscribeFormSVG />
        </SubscribeFormLabel>
        <SubscribeFormSubmit type="submit" id="submissive" />
      </SubscribeFormElement>
    </SubscribeFormContainer>
  );
};

export default SubscribeForm;
