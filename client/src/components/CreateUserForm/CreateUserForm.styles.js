import styled from "styled-components";

export const CreateUserFormContainer = styled.div`
  display: grid;
  align-self: center;
`;

export const CreateUserFormElement = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;

  @media only screen and (max-width: 425px) {
    grid-template-columns: 1fr;
    grid-row-gap: 2rem;
  }

  & button {
    white-space: nowrap;
  }
`;
