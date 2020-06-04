import styled, { css } from "styled-components";

// image
import testimonials from "../../assets/jpg/testimonials.jpg";

// svg
import { ReactComponent as QuoteSVG } from "../../assets/svg/quote.svg";
import { ReactComponent as LeftSVG } from "../../assets/svg/left.svg";
import { ReactComponent as RightSVG } from "../../assets/svg/right.svg";

const arrLeftAnimation = css`
  @keyframes arrowLeft {
    0% {
      transform: translate(0%, 0%);
    }
    50% {
      transform: translate(-50%, 0%);
    }
    100% {
      transform: translate(0%, 0%);
    }
  }
`;

const arrRightAnimation = css`
  @keyframes arrowRight {
    0% {
      transform: translate(0%, 0%);
    }
    50% {
      transform: translate(50%, 0%);
    }
    100% {
      transform: translate(0%, 0%);
    }
  }
`;

const getActiveImageSize = ({ active }) =>
  active
    ? `
        width: 5rem;
        height: 5rem;
    `
    : `
        width: 4rem;
        height: 4rem;
    `;

export const SectionTestimonialsContainer = styled.section`
  grid-column: full-start / full-end;
  display: grid;
  grid-template-columns: 1fr minmax(0rem, 117rem) 1fr;

  padding: 8rem 0rem;

  background-image: linear-gradient(
      to bottom right,
      var(--cl-primaryGd),
      var(--cl-bgGd)
    ),
    url(${testimonials});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media only screen and (max-width: 425px) {
    padding: 4rem 0rem;
  }
`;

export const SectionTestimonialsWrap = styled.div`
  grid-column: 2 / 3;
  display: grid;
  grid-row-gap: 4rem;
  padding: 0rem 2rem;
  color: var(--cl-fontA);

  @media only screen and (max-width: 425px) {
    grid-row-gap: 2rem;
  }
`;

export const SectionTestimonialsQuote = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
`;

export const SectionTestimonialsSign = styled(QuoteSVG)`
  width: 3.5rem;
  height: 3.5rem;
  fill: var(--cl-fontA);

  @media only screen and (max-width: 425px) {
    width: 2rem;
    height: 2rem;
  }
`;

export const SectionTestimonialsReview = styled.div`
  display: grid;
  justify-items: center;
`;

export const SectionTestimonialsText = styled.p`
  height: 18rem;
  overflow: hidden;
  width: 60%;
  text-align: center;
  color: var(--cl-fontW);

  @media only screen and (max-width: 425px) {
    width: 100%;
  }
`;

export const SectionTestimonialsInfo = styled.div`
  display: grid;
  justify-items: center;
`;

export const SectionTestimonialsName = styled.div`
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const SectionTestimonialsPos = styled.div`
  text-transform: uppercase;
  font-size: 1.4rem;
  color: var(--cl-fontW);
`;

export const SectionTestimonialsPeople = styled.div`
  ${arrLeftAnimation}
  display: grid;
  grid-template-columns: min-content 1fr min-content;
  justify-self: center;
  align-items: center;
  grid-column-gap: 1rem;

  @media only screen and (max-width: 275px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 8rem;
  }
`;

export const SectionTestimonialsArrLeft = styled(LeftSVG)`
  cursor: pointer;
  width: 2rem;
  height: 2rem;
  fill: var(--cl-fontW);

  transition: transform 0.3s;
  @media (hover: hover) {
    &:hover {
      animation: arrowLeft 1s infinite linear;
    }
  }
`;

export const SectionTestimonialsImgBar = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 1rem;
  align-items: center;
  justify-items: center;

  @media only screen and (max-width: 275px) {
    display: none;
  }
`;

export const SectionTestimonialsAvatarWrap = styled.div`
  ${getActiveImageSize}
  border-radius: 50%;
  overflow: hidden;
`;

export const SectionTestimonialsAvatarImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const SectionTestimonialsArrRight = styled(RightSVG)`
  ${arrRightAnimation}
  cursor: pointer;
  width: 2rem;
  height: 2rem;
  fill: var(--cl-fontW);

  transition: transform 0.3s;
  @media (hover: hover) {
    &:hover {
      animation: arrowRight 1s infinite linear;
    }
  }
`;
