import styled from "styled-components";

const getWierdStyle = ({ wierdForm }) => {
  if (wierdForm) {
    return `
      color: var(--cl-fontA);
      border-radius: none;
      border: 0.1rem solid var(--cl-fontX);

      &:focus {
        outline: none;
        box-shadow: none;
        border: 0.1rem solid var(--cl-fontA);
      }

      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus,
      &:-webkit-autofill:active {
        -webkit-box-shadow: 0 0 0 30px transparent inset !important;
        -webkit-text-fill-color: var(--cl-fontA) !important;
        transition: background-color 5000s ease-in-out 0s;
      }
    `;
  }
  return `
    color: var(--cl-primary);
    border-radius: 5px;
    border: 0.1rem solid var(--cl-form);

    &:focus {
      // outline: 0.1rem solid var(--cl-primary);
      //   box-shadow: 0rem 0rem 0.2rem var(--cl-primary);
      outline: none;
      box-shadow: none;
      border: 0.1rem solid var(--cl-primary);
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 30px transparent inset !important;
      -webkit-text-fill-color: var(--cl-primary) !important;
      transition: background-color 5000s ease-in-out 0s;
    }
  `;
};

export const FormInputContainer = styled.div`
  display: grid;
  position: relative;
`;

export const FormInputLabel = styled.label`
  position: absolute;
  bottom: 1rem;
  right: 2rem;
  transform: scale(0);
  // visibility: hidden;
`;

export const FormInputElement = styled.input`
  ${getWierdStyle}
  font-family: var(--font-text);
  padding: 1rem 1rem;
  background-color: transparent !important;
  min-width: 4rem;

  &::placeholder {
    color: var(--cl-fontW);
  }

  &::-moz-focus-inner {
    border: 0;
    outline: none;
  }

  &:invalid {
    box-shadow: none;
  }
`;
