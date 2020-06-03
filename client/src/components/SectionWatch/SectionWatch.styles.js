import styled from "styled-components";

// image
import cityimg from "../../assets/jpg/city.jpg";

// svg
import { ReactComponent as PlaySVG } from "../../assets/svg/play-button.svg";

export const SectionWatchContainer = styled.section`
  grid-column: full-start / full-end;
  display: grid;
  grid-template-columns: 1fr minmax(0rem, 117rem) 1fr;
  padding: 20rem 0rem;

  background-image: linear-gradient(
      to bottom right,
      var(--cl-primaryGd),
      var(--cl-bgGd)
    ),
    url(${cityimg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const SectionWatchCta = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-row-gap: 1rem;
  grid-column: 2 / 3;
  padding: 0rem 2rem;
`;

export const SectionWatchBtn = styled.div``;

export const SectionWatchSVG = styled(PlaySVG)`
  cursor: pointer;
  width: 14rem;
  height: 14rem;
  fill: var(--cl-fontW);

  @media only screen and (max-width: 425px) {
    width: 8rem;
    height: 8rem;
  }

  transition: fill 0.3s;
  @media (hover: hover) {
    &:hover {
      fill: var(--cl-tertiary);
    }
  }
`;

export const SectionWatchText = styled.div`
  color: var(--cl-white);
  font-size: 2.2rem;
  text-transform: uppercase;
  text-align: center;
`;
