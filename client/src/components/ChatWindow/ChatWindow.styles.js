import styled from "styled-components";

// svg
import { ReactComponent as AvatarSVG } from "../../assets/svg/avatar.svg";

const getProperBodyStyiles = ({ log }) => {
  if (log) return ``;
  return `grid-auto-rows: min-content;`;
};

const getRequiredColumns = ({ headers }) =>
  headers === 1
    ? `grid-template-columns: min-content  1fr;`
    : `grid-template-columns: min-content repeat(2, 1fr);`;

export const ChatWindowContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: var(--cl-bgGd);
  z-index: 20;
`;

export const ChatWindowWrap = styled.div`
  position: fixed;

  display: grid;
  grid-template-rows: 6rem 1fr 6rem;

  width: 70rem;
  height: 50rem;
  left: 50%;
  top: 50%;
  background-color: var(--cl-white);

  transform: translate(-50%, -50%);
  box-shadow: 0rem 0.2rem 0.4rem var(--cl-shadow);

  @media only screen and (max-width: 768px) {
    width: 80vw;
    height: 80vh;
  }
`;

export const ChatWindowClose = styled.div`
  cursor: pointer;
  position: absolute;
  right: 2rem;
  top: 0.8rem;
  font-size: 2.5rem;
  color: var(--cl-fontA);

  transition: color 0.3s;
  &:hover {
    color: var(--cl-fontX);
  }
`;

export const ChatWindowHead = styled.div`
  display: grid;
  ${getRequiredColumns}
  align-items: center;
  grid-column-gap: 2rem;
  padding: 0rem 4rem 0rem 1rem;
  background-image: linear-gradient(to right, var(--cl-bg), var(--cl-primary));
`;

export const ChatWindowHeadAvatar = styled.div``;

export const ChatWindowHeadAvatarSVG = styled(AvatarSVG)`
  width: 4rem;
  height: 4rem;
  fill: var(--cl-secondary);
`;

export const ChatWindowHeadName = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: center;
  color: var(--cl-fontA);
`;

export const ChatWindowBody = styled.div`
  ${getProperBodyStyiles}
  padding: 2rem;

  overflow-y: scroll;
  overflow-x: hidden;
  display: grid;

  grid-row-gap: 2rem;

  &::-webkit-scrollbar {
    width: 0.8rem;
    background-color: var(--cl-scroll-bg);
  }
  &::-webkit-scrollbar-thumb {
    background-image: linear-gradient(
      to bottom,
      var(--cl-primary),
      var(--cl-secondary)
    );
    border-radius: 5rem;
  }
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px var(--cl-scroll-shadow);
    box-shadow: inset 0 0 6px var(--cl-scroll-shadow);
  }
`;

export const ChatWindowBot = styled.div`
  display: grid;
  padding: 0rem 2rem;
  align-items: center;
`;
