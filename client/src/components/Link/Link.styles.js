import styled from "styled-components";

const getActiveColor = ({ active }) =>
  active ? `color: var(--cl-tertiary);` : `color: var(--cl-white);`;

export const LinkWrap = styled.div`
  display: inline-block;
`;

export const LinkElement = styled.a`
  &:link,
  &:visited {
    ${getActiveColor}
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1.5rem;
    letter-spacing: 0.5px;
    transition: color 0.3s;
  }

  @media (hover: hover) {
    &:hover,
    &:active {
      color: var(--cl-tertiary);
    }
  }
`;
