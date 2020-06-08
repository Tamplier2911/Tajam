import styled, { css } from "styled-components";

// svg
import { ReactComponent as UsersSVG } from "../../assets/svg/users.svg";

const getProperBodyStyle = ({ log }) => {
  if (log) return ``;
  return `grid-auto-rows: min-content;`;
};

const slideRight = css`
  @keyframes slideRight {
    0% {
      left: 0rem;
    }
    100% {
      left: 15rem;
    }
  }
`;

const slideLeft = css`
  @keyframes slideLeft {
    0% {
      left: 15rem;
    }
    100% {
      left: 0rem;
    }
  }
`;

const fadeIn = css`
  @keyframes fadeIn {
    0% {
      opacity: 0;
      width: 0rem;
    }
    100% {
      opacity: 1;
      width: 15rem;
    }
  }
`;

const getButtonSlideMode = ({ usersHidden }) => {
  if (usersHidden === 1)
    return `
      ${slideLeft}
      left: 0rem;
      animation: slideLeft .5s;
  `;
  if (usersHidden === 0)
    return `
    ${slideRight}
    left: 15rem;
    animation: slideRight .5s;
  `;
  return `left: 0;`;
};

export const MessagesCollectionContainer = styled.div`
  ${getProperBodyStyle}
  position: relative;
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

export const MessagesCollectionUsersSVG = styled(UsersSVG)`
  width: 3rem;
  height: 3rem;
  fill: var(--cl-secondary);

  transition: fill 0.3s;
`;

export const MessagesCollectionUsersBtn = styled.div`
  cursor: pointer;
  position: fixed;

  ${getButtonSlideMode}

  top: 7rem;
  width: 5rem;
  height: 5rem;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  background-color: var(--cl-primary);

  display: grid;
  align-items: center;
  justify-items: center;

  box-shadow: 0rem 0.2rem 0.4rem var(--cl-shadow);

  @media (hover: hover) {
    &:hover ${MessagesCollectionUsersSVG} {
      fill: var(--cl-tertiary);
    }
  }
`;

export const MessagesCollectionUsersBar = styled.div`
  ${fadeIn}
  position: fixed;
  display: grid;
  grid-auto-rows: min-content;
  padding: 2rem;

  left: 0rem;
  top: 6rem;
  height: calc(100% - 12rem);
  width: 15rem;
  border-right: solid 0.1rem var(--cl-primary);

  background-color: var(--cl-white);
  animation: fadeIn 0.5s;
`;

export const MessagesCollectionUserName = styled.div`
  cursor: pointer;
  font-size: 1.8rem;
  color: var(--cl-primary);

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  transition: color 0.3s;

  &:hover {
    color: var(--cl-secondary);
  }
`;
