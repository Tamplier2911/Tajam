import styled from "styled-components";

// image
import teamBg from "../../assets/jpg/team.jpg";

export const SectionTeamContainer = styled.section`
  grid-column: full-start / full-end;
  display: grid;
  grid-template-columns: 1fr minmax(0rem, 117rem) 1fr;
  padding: 7rem 0rem;

  background-image: linear-gradient(
      to bottom right,
      var(--cl-primaryGd),
      var(--cl-bgGd)
    ),
    url(${teamBg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media only screen and (max-width: 425px) {
    padding: 4rem 0rem;
  }
`;

export const SectionTeamWrap = styled.div`
  grid-column: 2 / 3;
  display: grid;
  grid-row-gap: 8rem;
  padding: 0rem 2rem;
  color: var(--cl-white);

  @media only screen and (max-width: 425px) {
    grid-row-gap: 4rem;
  }
`;

export const SectionTeamTop = styled.div`
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

  & h2 {
    font-weight: 400;
  }
`;

export const SectionTeamTopText = styled.div`
  color: var(--cl-fontA);
`;

export const SectionTeamMid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  grid-template-rows: min-content;
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  }

  @media only screen and (max-width: 425px) {
    grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
  }
`;

export const SectionTeamBot = styled.div`
  display: grid;
  grid-row-gap: 2rem;
  align-items: center;
  justify-items: center;
`;

export const SectionTeamBotText = styled.div`
  text-align: center;
`;

export const SectionTeamBotCta = styled.div``;
