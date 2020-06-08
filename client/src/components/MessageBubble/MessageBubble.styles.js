import styled from "styled-components";

// svg
import { ReactComponent as AvatarSVG } from "../../assets/svg/avatar.svg";

const getMessageLayout = ({ style }) => {
  if (style === 1)
    return `grid-template-columns: 1fr min-content; justify-items: right;`;
  if (style === 2)
    return `grid-template-columns: min-content 1fr; justify-items: left;`;
  return `grid-template-columns: 1fr min-content; justify-items: right;`;
};

const getMessageSVGColor = ({ style }) => {
  if (style === 1) return `fill: var(--cl-primaryGd);`;
  if (style === 2) return `fill: var(--cl-secondary);`;
  return `fill: var(--cl-primary);`;
};

const getMessageOrder = ({ style }) => {
  if (style === 1) return `order: 2;`;
  if (style === 2) return ``;
  return `order: 2;`;
};

const getMessageBgColor = ({ style }) => {
  if (style === 1)
    return `background-image: linear-gradient(to top right, var(--cl-primaryGd), var(--cl-bgGd));`;
  if (style === 2)
    return `background-image: linear-gradient(to top right, var(--cl-secondary), var(--cl-tertiary));`;
  return `background-image: linear-gradient(to top right, var(--cl-secondary), var(--cl-primary));`;
};

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

export const MessageTextWrap = styled.div`
  ${getMessageBgColor}
  display: grid;
  grid-row-gap: 2rem;
  grid-template row;
  border-radius: 5rem;
  padding: 2rem 1rem;
  word-break: break-word;

  box-shadow: 0rem 0.2rem 0.4rem var(--cl-shadow);
`;

export const MessageText = styled.div`
  word-break: break-word;
  padding: 0rem 3rem;
`;

export const MessageUser = styled.div`
  font-size: 1.2rem;
  padding: 0rem 3rem;
`;
