// import "./ChatButton.scss";
import React, { useContext } from "react";

// context
import AppStore from "../../contexts/GlobalContext/globalContext";

// sc
import {
  ChatButtonContainer,
  ChatButtonSvgWrap,
  ChatButtonSVG,
} from "./ChatButton.styles";

const ChatButton = () => {
  const { toggleChat } = useContext(AppStore);
  return (
    <ChatButtonContainer onClick={() => toggleChat()}>
      <ChatButtonSvgWrap>
        <ChatButtonSVG />
      </ChatButtonSvgWrap>
    </ChatButtonContainer>
  );
};

export default ChatButton;
