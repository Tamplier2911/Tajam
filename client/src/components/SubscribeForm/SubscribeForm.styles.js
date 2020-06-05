import styled from "styled-components";

// svg
import { ReactComponent as SendSVG } from "../../assets/svg/send.svg";

export const SubscribeFormContainer = styled.div`
  display: grid;
`;

export const SubscribeFormElement = styled.form`
  display: grid;
  grid-template-columns: 1fr min-content;
  grid-column-gap: 1rem;
`;

export const SubscribeFormLabel = styled.label`
  cursor: pointer;
  display: grid;
  align-items: center;
  padding: 0rem 2rem;
  background-color: var(--cl-fontX);

  transition: 0.3s background-color;
  @media (hover: hover) {
    &:hover {
      background-color: var(--cl-fontW);
    }
  }
`;

export const SubscribeFormSVG = styled(SendSVG)`
  width: 3rem;
  height: 3rem;
`;

export const SubscribeFormSubmit = styled.input`
  display: none;
`;
