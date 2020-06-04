// import "./Button.scss";
import React from "react";

// sc
import { ButtonWrapper } from "./Button.styles";

const Button = ({ title, action, type }) => {
  return (
    <ButtonWrapper
      onClick={() => (action ? action() : () => {})}
      type={type ? type : "button"}
    >
      {title}
    </ButtonWrapper>
  );
};

export default Button;
