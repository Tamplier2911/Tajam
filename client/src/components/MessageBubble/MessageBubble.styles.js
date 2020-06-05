import styled from "styled-components";

// svg
import { ReactComponent as AvatarSVG } from "../../assets/svg/avatar.svg";

const getMessageLayout = ({ own }) =>
  own
    ? `grid-template-columns: min-content 1fr;`
    : `grid-template-columns: 1fr min-content;`;

const getMessageSVGColor = ({ own }) =>
  own ? `fill: var(--cl-secondary);` : `fill: var(--cl-primary);`;

const getMessageOrder = ({ own }) => (own ? `` : `order: 2;`);

const getMessageBgColor = ({ own }) =>
  own
    ? `background-color: var(--cl-secondary);`
    : `background-color: var(--cl-primary);`;

export const MessageBubbleContainer = styled.div`
  ${getMessageLayout}
  color: var(--cl-fontA);
  display: grid;
  grid-column-gap: 2rem;
  padding: 1rem;
`;

export const MessageBubbleSVGWrap = styled.div`
  ${getMessageOrder}
`;

export const MessageBubbleSVG = styled(AvatarSVG)`
  ${getMessageSVGColor}
  width: 4rem;
  height: 4rem;
`;

export const MessageText = styled.div`
  ${getMessageBgColor}
  border-radius: 5rem;
  padding: 2rem;
  word-break: break-word;
`;
