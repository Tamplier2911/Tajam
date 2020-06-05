import "./ChatWindow.scss";
import React, { useContext } from "react";

// context
import AppStore from "../../contexts/GlobalContext/globalContext";

// components
import MessageForm from "../MessageForm/MessageForm";
import MessageBubble from "../MessageBubble/MessageBubble";

// sc
import {
  ChatWindowContainer,
  ChatWindowWrap,
  ChatWindowClose,
  ChatWindowHead,
  ChatWindowHeadAvatar,
  ChatWindowHeadAvatarSVG,
  ChatWindowHeadName,
  ChatWindowBody,
  ChatWindowBot,
} from "./ChatWindow.styles";

// temporary constants
import { tempChatConstants } from "./ChatWindow.constants";

const ChatWindow = () => {
  const { message } = tempChatConstants;
  const { chat, toggleChat } = useContext(AppStore);
  const { chatHidden } = chat;
  return chatHidden ? null : (
    <ChatWindowContainer onClick={() => toggleChat()}>
      <ChatWindowWrap onClick={(e) => e.stopPropagation()}>
        <ChatWindowClose onClick={() => toggleChat()}>&#10539;</ChatWindowClose>
        <ChatWindowHead>
          <ChatWindowHeadAvatar>
            <ChatWindowHeadAvatarSVG />
          </ChatWindowHeadAvatar>
          <ChatWindowHeadName>Happy User</ChatWindowHeadName>
        </ChatWindowHead>
        <ChatWindowBody>
          {message.map((messageObj) => {
            const { id, message, own } = messageObj;
            return (
              <MessageBubble key={id} message={message} own={own ? 1 : 0} />
            );
          })}
        </ChatWindowBody>
        <ChatWindowBot>
          <MessageForm wipe={() => console.log("wiped!")} />
        </ChatWindowBot>
      </ChatWindowWrap>
    </ChatWindowContainer>
  );
};

export default ChatWindow;
