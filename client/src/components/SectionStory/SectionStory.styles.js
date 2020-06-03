import styled from "styled-components";

export const SectionStoryContainer = styled.section`
  grid-column: full-start / full-end;
  display: grid;
  grid-template-columns: 1fr minmax(0rem, 117rem) 1fr;
  padding: 5rem 0rem;
`;

export const SectionStoryContent = styled.div`
  grid-column: 2 / 3;
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-column-gap: 10rem;

  @media only screen and (max-width: 1024px) {
    grid-column-gap: 4rem;
  }

  @media only screen and (max-width: 768px) {
    grid-column-gap: 0rem;
  }

  @media only screen and (max-width: 646px) {
    grid-template-columns: 1fr;
  }
`;

export const SectionStoryLogo = styled.div`
  display: grid;
  @media only screen and (max-width: 646px) {
    justify-items: center;
    align-items: center;
  }
`;

export const SectionStoryLogoWrap = styled.div`
  width: 35rem;
  height: 35rem;

  @media only screen and (max-width: 425px) {
    width: 20rem;
    height: 20rem;
  }
`;

export const SectionStoryLogoImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const SectionStoryInfo = styled.div`
  display: grid;
  grid-auto-rows: min-content;
  grid-row-gap: 3rem;
  padding-right: 2rem;
  @media only screen and (max-width: 646px) {
    padding-left: 2rem;
    text-align: center;
  }
`;

export const SectionStoryInfoText = styled.p`
  font-size: 1.6rem;
  color: var(--cl-fontB);
`;

export const SectionStoryInfoCTA = styled.div`
  @media only screen and (max-width: 646px) {
    justify-self: center;
  }
`;
