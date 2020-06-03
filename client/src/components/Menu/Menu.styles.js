import styled, { css } from "styled-components";

// svg
import { ReactComponent as MenuSVG } from "../../assets/svg/menu.svg";

const fadeInAniumation = css`
  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const MenuContainer = styled.div`
  ${fadeInAniumation}
  z-index: 10;
  position: fixed;

  display: grid;
  grid-template-columns: 1fr minmax(0rem, 117rem) 1fr;

  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(
    to bottom right,
    var(--cl-primary),
    var(--cl-bg)
  );
  animation: fadein 0.4s;
`;

export const MenuButton = styled.div`
  cursor: pointer;
  position: absolute;
  width: 5rem;
  height: 5rem;
  top: 3rem;
  right: 0.2rem;
`;

export const MenuIconSVG = styled(MenuSVG)`
  width: 3rem;
  height: 3rem;
  fill: var(--cl-tertiary);
  transform: rotate(90deg);
`;

export const MenuBlock = styled.div`
  ${fadeInAniumation}
  grid-column: 2 / 3;
  display: grid;
  align-items: center;
  justify-items: center;
  animation: fadein 1s;
`;

export const MenuBlockUL = styled.ul`
  display: grid;
  grid-row-gap: 1rem;
  list-style: none;
`;

export const MenuBlockLI = styled.li`
  text-align: center;
`;
