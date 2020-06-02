import styled, { css } from "styled-components";

// image
import HeroImage from "../../assets/jpg/hero.jpg";

const sharedCircleStyles = css`
  cursor: pointer;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  transition: 0.3s background-color;
`;

const getCircleBgColor = ({ active }) =>
  active
    ? `
  background-color: var(--cl-tertiary);
  &:hover {
    background-color: var(--cl-secondary);
  }`
    : `
  border: 0.1rem solid var(--cl-fontW);
  &:hover {
    background-color: var(--cl-secondary);
    border: none;
  }`;

export const SectionHeroContainer = styled.section`
  grid-column: full-start / full-end;
  display: grid;
  grid-template-columns: 1fr minmax(0rem, 117rem) 1fr;
  align-content: center;
  justify-items: center;
  min-height: 70vh;
  background-image: linear-gradient(
      to bottom right,
      var(--cl-bgGd),
      var(--cl-primaryGd)
    ),
    url(${HeroImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding-top: 6rem;
  padding-bottom: 6rem;
`;

export const SectionHeroContent = styled.div`
  grid-column: 2 / 3;
  display: grid;
  grid-auto-rows: min-content;
  grid-row-gap: 8rem;
  color: var(--cl-white);
  max-width: 70rem;
  text-align: center;

  @media only screen and (max-width: 768px) {
    grid-row-gap: 6rem;
    padding: 0 2rem;
  }

  @media only screen and (max-width: 375px) {
    grid-row-gap: 4rem;
  }
`;

export const SectionHeroMessage = styled.div`
  display: grid;
`;

export const SectionHeroHeader = styled.h1`
  display: grid;
  grid-row-gap: 2rem;
  font-size: 3.2rem;
  font-weight: 300;

  &::after {
    display: inline-block;
    justify-self: center;
    content: "";
    background-color: var(--cl-tertiary);
    height: 0.2rem;
    width: 10rem;
    margin-bottom: 2rem;
  }
`;

export const SectionHeroText = styled.p`
  color: var(--cl-fontW);
  font-size: 1.6rem;
`;

export const SectionHeroCta = styled.div``;

export const SectionHeroBtn = styled.div``;

export const SectionHeroCirles = styled.div`
  display: grid;
  grid-template-columns: repeat(4, min-content);
  justify-content: center;
  grid-column-gap: 0.8rem;
`;

export const SectionHeroCircle = styled.div`
  ${sharedCircleStyles}
  ${getCircleBgColor}
`;
