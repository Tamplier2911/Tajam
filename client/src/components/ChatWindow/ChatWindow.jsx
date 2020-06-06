import "./ChatWindow.scss";
import React, { useContext } from "react";

// context
import AppStore from "../../contexts/GlobalContext/globalContext";

// components
import MessageForm from "../MessageForm/MessageForm";
import MessageBubble from "../MessageBubble/MessageBubble";
import CreateUserForm from "../CreateUserForm/CreateUserForm";

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
  const { chatHidden, currentUser } = chat;

  return chatHidden ? null : (
    <ChatWindowContainer onClick={() => toggleChat()}>
      <ChatWindowWrap onClick={(e) => e.stopPropagation()}>
        <ChatWindowClose onClick={() => toggleChat()}>&#10539;</ChatWindowClose>
        {currentUser ? (
          <React.Fragment>
            <ChatWindowHead>
              <ChatWindowHeadAvatar>
                <ChatWindowHeadAvatarSVG />
              </ChatWindowHeadAvatar>
              <ChatWindowHeadName>{currentUser}</ChatWindowHeadName>
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
          </React.Fragment>
        ) : (
          <React.Fragment>
            <ChatWindowHead>
              <ChatWindowHeadAvatar>
                <ChatWindowHeadAvatarSVG />
              </ChatWindowHeadAvatar>
              <ChatWindowHeadName>Please, choose username:</ChatWindowHeadName>
            </ChatWindowHead>
            <ChatWindowBody log={1}>
              <CreateUserForm />
            </ChatWindowBody>
            <ChatWindowBot></ChatWindowBot>
          </React.Fragment>
        )}
      </ChatWindowWrap>
    </ChatWindowContainer>
  );
};

export default ChatWindow;
