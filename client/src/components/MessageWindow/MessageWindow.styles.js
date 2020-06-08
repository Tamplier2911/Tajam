import styled from "styled-components";

// svg
import { ReactComponent as AvatarSVG } from "../../assets/svg/avatar.svg";

const getProperBodyStyle = ({ log }) => {
  if (log) return ``;
  return `grid-auto-rows: min-content;`;
};

const getRequiredColumns = ({ headers }) =>
  headers === 1
    ? `grid-template-columns: min-content  1fr;`
    : `grid-template-columns: min-content repeat(2, 1fr);`;

export const MessageWindowHead = styled.div`
  display: grid;
  ${getRequiredColumns}
  align-items: center;
  grid-column-gap: 2rem;
  padding: 0rem 4rem 0rem 1rem;
  background-image: linear-gradient(to right, var(--cl-bg), var(--cl-primary));
`;

export const MessageWindowHeadAvatar = styled.div``;

export const MessageWindowHeadAvatarSVG = styled(AvatarSVG)`
  width: 4rem;
  height: 4rem;
  fill: var(--cl-secondary);
`;

export const MessageWindowHeadName = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: center;
  color: var(--cl-fontA);
`;

export const MessageWindowBody = styled.div`
  ${getProperBodyStyle}
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

export const MessageWindowBot = styled.div`
  display: grid;
  padding: 0rem 2rem;
  align-items: center;
`;
