import styled, { css } from "styled-components";

const titleStyle = css`
  display: grid;
  justify-items: center;
`;

export const SectionContactsContainer = styled.section`
  grid-column: full-start / full-end;
  display: grid;
  grid-template-columns: 1fr minmax(0rem, 117rem) 1fr;
  padding: 8rem;

  @media only screen and (max-width: 768px) {
    padding: 6rem;
  }

  @media only screen and (max-width: 425px) {
    padding: 4rem;
  }
`;

export const SectionContactsWrap = styled.div`
  grid-column: 2 / 3;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 6rem;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-row-gap: 4rem;
  }
`;

export const SectionContactsTop = styled.div`
  display: grid;
  grid-auto-rows: min-content;
  grid-row-gap: 4rem;

  @media only screen and (max-width: 768px) {
    order: 2;
  }

  @media only screen and (max-width: 375px) {
    grid-row-gap: 2rem;
  }
`;

export const SectionContactsTopTitle = styled.div`
  ${titleStyle}
`;

export const SectionContactsBot = styled.div`
  display: grid;
  grid-auto-rows: min-content;
  grid-row-gap: 4rem;

  @media only screen and (max-width: 768px) {
    order: 1;
  }

  @media only screen and (max-width: 375px) {
    grid-row-gap: 2rem;
  }
`;

export const SectionContactsBotTitle = styled.div`
  ${titleStyle}
`;
