import styled from "styled-components";

export const SectionExpContainer = styled.div`
  grid-column: full-start / full-end;
  display: grid;
  grid-template-columns: 1fr minmax(0rem, 117rem) 1fr;
  padding: 10rem 0rem;

  @media only screen and (max-width: 582px) {
    padding: 6rem 0rem;
  }
`;

export const SectionExpWrap = styled.div`
  grid-column: 2 / 3;
  display: grid;
  grid-row-gap: 5rem;
  padding: 0rem 2rem;

  @media only screen and (max-width: 582px) {
    grid-row-gap: 3rem;
  }
`;

export const SectionExpTop = styled.div`
  display: grid;
  text-align: center;
  justify-items: center;
  grid-row-gap: 1rem;

  &::after {
    content: "";
    display: inline-block;
    background-color: var(--cl-fontW);
    height: 0.2rem;
    width: 6rem;
  }
`;

export const SectionExpText = styled.div`
  color: var(--cl-fontB);
`;

export const SectionExpBot = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  grid-template-rows: min-content;
  @media only screen and (max-width: 325px) {
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  }
`;
