import styled, { css } from "styled-components";

// image
import HeroImage from "../../assets/jpg/hero.jpg";
import HeroImageLaptop from "../../assets/jpg/hero-laptop.jpg";
import HeroImageTablet from "../../assets/jpg/hero-tablet.jpg";
import HeroImagePhone from "../../assets/jpg/hero-phone.jpg";

const sharedCircleStyles = css`
  cursor: pointer;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  transition: 0.3s background-color;
`;

const fadeInText = (props) => {
  const { load } = props;
  if (!load) {
    return `opacity: 0;`;
  } else if (load) {
    return `
        opacity: 1;
        transition: opacity 1s ease-in;
      `;
  }
};

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

  @media only screen and (min-width: 1025px) {
    background-image: linear-gradient(
        to bottom right,
        var(--cl-bgGd),
        var(--cl-primaryGd)
      ),
      url(${HeroImage});
  }

  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    background-image: linear-gradient(
        to bottom right,
        var(--cl-bgGd),
        var(--cl-primaryGd)
      ),
      url(${HeroImageLaptop});
  }

  @media only screen and (min-width: 426px) and (max-width: 768px) {
    background-image: linear-gradient(
        to bottom right,
        var(--cl-bgGd),
        var(--cl-primaryGd)
      ),
      url(${HeroImageTablet});
  }

  @media only screen and (min-width: 190px) and (max-width: 425px) {
    background-image: linear-gradient(
        to bottom right,
        var(--cl-bgGd),
        var(--cl-primaryGd)
      ),
      url(${HeroImagePhone});
  }

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding-top: 8rem;
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
  ${fadeInText}
  color: var(--cl-fontW);
  font-size: 1.6rem;
  min-height: 7.5rem;
  // height: 7.5rem;
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
