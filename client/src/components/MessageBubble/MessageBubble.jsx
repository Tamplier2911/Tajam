// import "./MessageBubble.scss";
import React from "react";

// cs
import {
  MessageBubbleContainer,
  MessageBubbleSVGWrap,
  MessageBubbleSVG,
  MessageText,
} from "./MessageBubble.styles";

const MessageBubble = ({ message, own }) => {
  return (
    <MessageBubbleContainer own={own}>
      <MessageBubbleSVGWrap own={own}>
        <MessageBubbleSVG own={own} />
      </MessageBubbleSVGWrap>
      <MessageText own={own}>{message}</MessageText>
    </MessageBubbleContainer>
  );
};

export default MessageBubble;
