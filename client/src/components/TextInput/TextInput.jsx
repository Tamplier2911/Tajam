// import "./TextInput.scss";
import React from "react";

// sc
import {
  TextInputContainer,
  TextInputLabel,
  TextInputArea,
} from "./TextInput.styles";

const TextInput = ({ id, label, onInputChange, value, ...otherProps }) => {
  return (
    <TextInputContainer>
      {label ? <TextInputLabel htmlFor={id}>{label}</TextInputLabel> : null}
      <TextInputArea
        id={id}
        onChange={(e) => onInputChange(e)}
        {...otherProps}
      />
    </TextInputContainer>
  );
};

export default TextInput;
