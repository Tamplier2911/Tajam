// import "./Button.scss";
import React from "react";

// sc
import { ButtonWrapper } from "./Button.styles";

const Button = ({ title, action, type, color }) => {
  return (
    <ButtonWrapper
      color={color}
      onClick={(e) => (action ? action(e) : (e) => {})}
      type={type ? type : "button"}
    >
      {title}
    </ButtonWrapper>
  );
};

export default Button;
