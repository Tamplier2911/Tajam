// import "./FormInput.scss";
import React from "react";

// sc
import {
  FormInputContainer,
  FormInputLabel,
  FormInputElement,
} from "./FormInput.styles";

const FormInput = ({ id, label, onInputChange, ...otherProps }) => {
  return (
    <FormInputContainer>
      {label ? <FormInputLabel htmlFor={id}>{label}</FormInputLabel> : null}
      <FormInputElement
        id={id}
        onChange={(e) => onInputChange(e)}
        {...otherProps}
      />
    </FormInputContainer>
  );
};

export default FormInput;
