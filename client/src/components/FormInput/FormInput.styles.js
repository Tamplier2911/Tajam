import styled from "styled-components";

export const FormInputContainer = styled.div`
  display: grid;
`;

export const FormInputLabel = styled.label``;

export const FormInputElement = styled.input`
  font-family: var(--font-text);
  color: var(--cl-primary);
  padding: 1rem 1rem;
  border-radius: 5px;
  background-color: transparent !important;
  border: 0.1rem solid var(--cl-form);

  &::placeholder {
    color: var(--cl-fontW);
  }

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

  &::-moz-focus-inner {
    border: 0;
    outline: none;
  }

  &:invalid {
    box-shadow: none;
  }
`;
