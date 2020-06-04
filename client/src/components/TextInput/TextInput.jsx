import "./TextInput.scss";
import React from "react";

// sc

const TextInput = ({ id, label, onInputChange, value, ...otherProps }) => {
  return (
    <div className="textInput">
      {label ? (
        <label className="textInput__label" htmlFor={id}>
          {label}
        </label>
      ) : null}
      <textarea
        id={id}
        className="textInput__element"
        onChange={(e) => onInputChange(e)}
        {...otherProps}
      />
    </div>
  );
};

export default TextInput;
