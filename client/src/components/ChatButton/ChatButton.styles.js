import styled, { css } from "styled-components";

// svg
import { ReactComponent as MessageSVG } from "../../assets/svg/message.svg";

const animations = css`
  @-webkit-keyframes pulse {
    0% {
      -webkit-box-shadow: 0 0 0 0 var(--cl-pulse1);
    }
    70% {
      -webkit-box-shadow: 0 0 0 15px var(--cl-pulse2);
    }
    100% {
      -webkit-box-shadow: 0 0 0 0 var(--cl-pulse3);
    }
  }

  @keyframes pulse {
    0% {
      -moz-box-shadow: 0 0 0 0 var(--cl-pulse1);
      box-shadow: 0 0 0 0 var(--cl-pulse1);
    }
    70% {
      -moz-box-shadow: 0 0 0 15px var(--cl-pulse2);
      box-shadow: 0 0 0 15px var(--cl-pulse2);
    }
    100% {
      -moz-box-shadow: 0 0 0 0 var(--cl-pulse3);
      box-shadow: 0 0 0 0 var(--cl-pulse3);
    }
  }

  @keyframes chatPumps {
    0% {
      transform: rotate(0deg);
    }
    20% {
      transform: rotate(30deg);
    }
    80% {
      transform: rotate(-30deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;

export const ChatButtonContainer = styled.div`
  ${animations}
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 5;

  width: 6rem;
  height: 6rem;
  right: 2rem;
  bottom: 2rem;
  padding: 3.2rem;
  border-radius: 50%;
  border: 1rem var(--cl-primary) solid;
  background-color: var(--cl-white);

  animation: chatPumps infinite linear 2s;
  transition: 0.3s transform;

  &:hover {
    animation: pulse infinite linear 2s;
  }
`;

export const ChatButtonSvgWrap = styled.div`
  cursor: pointer;

  &:hover svg {
    transform: scale(1.1);
  }
`;

export const ChatButtonSVG = styled(MessageSVG)`
  width: 4rem;
  height: 4rem;
  fill: var(--cl-primary);
  transition: transform 0.3s;
`;
