import styled, { css } from "styled-components";

const arrowAnimation = css`
  @keyframes moveArrow {
    0% {
      transform: translate(0%, 0%);
    }
    50% {
      transform: translate(100%, 0%);
    }
    100% {
      transform: translate(0%, 0%);
    }
  }
`;

export const SectionWorksContainer = styled.section`
  grid-column: full-start / full-end;
  display: grid;
  grid-row-gap: 4rem;
  padding: 8rem 0rem;

  @media only screen and (max-width: 425px) {
    padding: 4rem 0rem;
  }
`;

export const SectionWorksTop = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(0rem, 117rem) 1fr;
`;

export const SectionWorksWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column: 2 / 3;
  padding: 0rem 2rem;

  @media only screen and (max-width: 425px) {
    grid-template-columns: 1fr;
    grid-row-gap: 1rem;
  }
`;

export const SectionWorksTitle = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
`;

export const SectionWorksLinkWrap = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
`;

export const SectionWorksChevron = styled.span`
  display: inline-block;
  align-items: center;
  font-size: 2rem;
  transition: transform 0.3s, color 0.3s;
`;

export const SectionWorksLink = styled.a`
  ${arrowAnimation}
  &:link,
  &:visited {
    text-decoration: none;
    color: var(--cl-fontW);
    transition: color 0.3s;
  }

  @media (hover: hover) {
    &:hover,
    &:active {
      color: var(--cl-tertiary);
    }
  }

  @media (hover: hover) {
    &:hover ${SectionWorksChevron} {
      animation: moveArrow 1s infinite linear;
    }
  }
`;

export const SectionWorksMid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: min-content;
`;

export const SectionWorksBot = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(0rem, 117rem) 1fr;
`;

export const SectionWorksCta = styled.div`
  display: grid;
  justify-items: center;
  grid-column: 2 / 3;
  padding: 0rem 2rem;
`;
