import styled from "styled-components";

export const ContactsFormContainer = styled.div`
  display: grid;
`;

export const ContactsFormElement = styled.form`
  display: grid;
  grid-auto-rows: min-content;
  grid-row-gap: 2rem;

  & button {
    justify-self: start;
    @media only screen and (max-width: 768px) {
      justify-self: auto;
    }
  }
`;
