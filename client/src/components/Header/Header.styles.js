import styled from "styled-components";
import Headroom from "react-headroom";

// svg
import { ReactComponent as MenuSVG } from "../../assets/svg/menu.svg";

const getRespectiveBgColor = ({ scroll }) =>
  scroll
    ? // ? `background-image: linear-gradient(to right, var(--cl-primary), var(--cl-bg));`
      `background-color:  var(--cl-bg);`
    : `background-color: transparent;`;

export const HeaderContainer = styled(Headroom)`
  height: 8rem;
  background-color: transparent;
  position: absolute;
  color: var(--cl-white);
  width: 100%;

  & > div {
    ${getRespectiveBgColor}
    display: grid;
    grid-template-columns: 1fr minmax(0rem, 117rem) 1fr;
    transition: background-color 0.5s;
  }
`;

export const HeaderElement = styled.header`
  grid-column: 2 / 3;
  padding-right: 1rem;
  display: grid;
  grid-template-columns: min-content 1fr;
  height: 8rem;

  @media only screen and (max-width: 700px) {
    grid-template-columns: min-content 1fr;
    padding-right: 0rem;
    padding-left: 1rem;
  }
`;

export const HeaderLogo = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  cursor: pointer;
`;

export const HeaderLogoWrap = styled.div`
  width: 14rem;
  @media only screen and (max-width: 700px) {
    width: 10rem;
  }
`;

export const HeaderLogoImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const HeaderLinks = styled.div`
  display: grid;
  align-items: center;
  justify-items: end;

  @media only screen and (max-width: 700px) {
    display: none;
  }
`;

export const HeaderLinksUL = styled.ul`
  display: grid;
  grid-template-columns: repeat(7, min-content);
  grid-column-gap: 2rem;
  list-style: none;
`;

export const HeaderLinksLI = styled.li`
  white-space: nowrap;
`;

export const HeaderMenu = styled.div`
  display: grid;
  align-items: center;
  justify-items: end;
  padding-right: 1rem;

  @media only screen and (min-width: 700px) {
    display: none;
  }
`;

export const HeaderMenuSVG = styled(MenuSVG)`
  cursor: pointer;
  width: 3rem;
  height: 3rem;
  fill: var(--cl-tertiary);
`;
