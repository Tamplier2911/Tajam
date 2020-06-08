// import "./MessageBubble.scss";
import React from "react";

// cs
import {
  MessageBubbleContainer,
  MessageBubbleSVGWrap,
  MessageBubbleSVG,
  MessageTextWrap,
  MessageText,
  MessageUser,
} from "./MessageBubble.styles";

// utils
import { dateConverter } from "../../utils/dateConverter";

const MessageBubble = ({ text, style, user, time }) => {
  const date = dateConverter(time);
  return (
    <MessageBubbleContainer style={style}>
      <MessageBubbleSVGWrap style={style}>
        <MessageBubbleSVG style={style} />
      </MessageBubbleSVGWrap>
      <MessageTextWrap style={style}>
        <MessageText>{text}</MessageText>
        <MessageUser>{`${user}, ${date}`}</MessageUser>
      </MessageTextWrap>
    </MessageBubbleContainer>
  );
};

export default MessageBubble;
