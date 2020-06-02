// import "./Button.scss";
import React from "react";

// sc
import { ButtonWrapper } from "./Button.styles";

const Button = ({ title, action }) => {
  return (
    <ButtonWrapper onClick={() => (action ? action() : () => {})}>
      {title}
    </ButtonWrapper>
  );
};

export default Button;
