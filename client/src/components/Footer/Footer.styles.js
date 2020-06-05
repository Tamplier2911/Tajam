import styled, { css } from "styled-components";

// footer image
import footerimage from "../../assets/jpg/footer.jpg";

// svgs
import { ReactComponent as GeoSVG } from "../../assets/svg/geo.svg";
import { ReactComponent as PhoneSVG } from "../../assets/svg/phone.svg";

const phoneAndPosSharedStyles = css`
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-column-gap: 1rem;
  align-items: center;
`;

const svgSharedStyles = css`
  cursor: pointer;
  width: 2rem;
  height: 2rem;
  fill: var(--cl-fontA);

  transition: fill 0.3s;
  @media (hover: hover) {
    &:hover {
      fill: var(--cl-tertiary);
    }
  }
`;

export const FooterContainer = styled.footer`
  display: grid;
  grid-template-columns: 1fr minmax(0rem, 117rem) 1fr;
  width: 100%;
  padding: 8rem 0rem;

  @media only screen and (max-width: 425px) {
    padding: 4rem 0rem;
  }

  background-image: linear-gradient(
      to bottom right,
      var(--cl-primaryGd),
      var(--cl-bgGd)
    ),
    url(${footerimage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const FooterWrapper = styled.div`
  grid-column: 2 / 3;
  display: grid;
  grid-row-gap: 4rem;
  padding: 0rem 2rem;
  color: var(--cl-fontA);
`;

export const FooterTop = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 4rem;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const FooterColOne = styled.div`
  display: grid;
  grid-template-rows: 8rem;

  @media only screen and (max-width: 768px) {
    grid-row-gap: 1rem;
    justify-items: center;
    text-align: center;
  }
`;

export const FooterColOneImgWrap = styled.div`
  margin-left: -1rem;
  width: 16rem;
`;

export const FooterColOneImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const FooterColOneText = styled.div`
  font-size: 1.4rem;
`;

export const FooterColTwo = styled.div`
  display: grid;
  grid-template-rows: 8rem;
  grid-auto-rows: min-content;
`;

export const FooterColTwoTitle = styled.div`
  align-self: center;
  text-transform: uppercase;
  font-size: 1.8rem;

  @media only screen and (max-width: 768px) {
    justify-self: center;
  }
`;

export const FooterColTwoPos = styled.div`
  ${phoneAndPosSharedStyles}
`;

export const FooterColTwoPosWrap = styled.div`
  align-self: center;
`;

export const FooterColTwoPosSVG = styled(GeoSVG)`
  ${svgSharedStyles}
`;

export const FooterColTwoAddress = styled.div`
  font-size: 1.4rem;
`;

export const FooterColTwoPhone = styled.div`
  ${phoneAndPosSharedStyles}
  padding: 2rem 0rem;
`;

export const FooterColTwoPhoneWrap = styled.div`
  align-self: center;
`;

export const FooterColTwoPhoneSvg = styled(PhoneSVG)`
  ${svgSharedStyles}
`;

export const FooterColTwoPhoneNum = styled.div`
  font-size: 1.4rem;
`;

export const FooterColThree = styled.div`
  display: grid;
  grid-template-rows: 8rem;

  @media only screen and (max-width: 768px) {
    grid-row-gap: 1rem;
  }

  @media only screen and (max-width: 425px) {
    grid-row-gap: 3rem;
  }
`;

export const FooterColThreeTitle = styled.div`
  align-self: center;
`;

export const FooterColThreeForm = styled.div``;

export const FooterColThreeSocials = styled.div`
  display: grid;
  grid-template-columns: repeat(6, min-content);
  grid-column-gap: 0.5rem;

  @media only screen and (max-width: 768px) {
    justify-content: center;
    grid-column-gap: 2rem;
  }

  @media only screen and (max-width: 325px) {
    grid-column-gap: 1rem;
  }

  @media only screen and (max-width: 245px) {
    grid-template-columns: repeat(2, min-content);
  }
`;

export const FooterColThreeLink = styled.div`
  display: inline-block;
`;

export const FooterBot = styled.div`
  display: grid;
  grid-template-columns: 1fr min-content;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-row-gap: 2rem;
    justify-items: center;
  }
`;

export const FooterBotCol1 = styled.div`
  display: grid;
  grid-template-columns: repeat(3, min-content);
  grid-column-gap: 4rem;

  @media only screen and (max-width: 325px) {
    grid-template-columns: 1fr;
    justify-items: center;
    grid-row-gap: 1rem;
  }

  & div {
    white-space: nowrap;
  }

  & div a {
    font-size: 1.4rem !important;
  }
`;

export const FooterBotCol2 = styled.div`
  white-space: nowrap;
  font-size: 1.4rem;

  @media only screen and (max-width: 325px) {
    white-space: pre-wrap;
    text-align: center;
  }
`;
