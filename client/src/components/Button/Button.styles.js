import styled from "styled-components";

export const ButtonWrapper = styled.button`
  cursor: pointer;
  display: inline-block;
  outline: none;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.6rem;
  text-transform: uppercase;
  font-family: "Open Sans", sans-serif;
  color: var(--cl-tertiary);
  border: 0.1rem solid var(--cl-tertiary);
  border-radius: 0.4rem;
  background-color: transparent;

  transition: 0.3s color, 0.3s background-color;

  @media (hover: hover) {
    &:hover {
      color: var(--cl-white);
      background-color: var(--cl-tertiary);
    }
  }
`;
