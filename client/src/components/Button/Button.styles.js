import styled from "styled-components";

const getButtonColor = ({ color }) => {
  if (color === "dark") {
    return `
      color: var(--cl-primary);
      border: 0.1rem solid var(--cl-primary);
      @media (hover: hover) {
        &:hover {
          color: var(--cl-white);
          background-color: var(--cl-primary);
        }
      }
    `;
  }
  return `
    color: var(--cl-tertiary);
    border: 0.1rem solid var(--cl-tertiary);
    @media (hover: hover) {
      &:hover {
        color: var(--cl-white);
        background-color: var(--cl-tertiary);
      }
    }
  `;
};

export const ButtonWrapper = styled.button`
  cursor: pointer;
  display: inline-block;
  outline: none;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.6rem;
  text-transform: uppercase;
  font-family: "Open Sans", sans-serif;
  // color: var(--cl-tertiary);
  // border: 0.1rem solid var(--cl-tertiary);
  border-radius: 0.4rem;
  background-color: transparent;
  ${getButtonColor}

  transition: 0.3s color, 0.3s background-color;

  // @media (hover: hover) {
  //   &:hover {
  //     color: var(--cl-white);
  //     background-color: var(--cl-tertiary);
  //   }
  // }
`;
