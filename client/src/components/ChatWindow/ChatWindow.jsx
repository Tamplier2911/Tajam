import "./ChatWindow.scss";
import React, { useContext, useState } from "react";

// context
import AppStore from "../../contexts/GlobalContext/globalContext";

// components
import MessageWindow from "../MessageWindow/MessageWindow";
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

const ChatWindow = () => {
  const { toggleChat } = useContext(AppStore);

  const [userData, setUserData] = useState({ name: "", room: "" });
  const { name, room } = userData;

  const onCreateChatUser = (userData) => {
    setUserData(userData);
  };

  return (
    // <ChatWindowContainer onClick={() => toggleChat()}>
    <ChatWindowContainer>
      <ChatWindowWrap onClick={(e) => e.stopPropagation()}>
        <ChatWindowClose onClick={() => toggleChat()}>&#10539;</ChatWindowClose>
        {name ? (
          <MessageWindow
            userName={name}
            roomName={room}
            setUserData={setUserData}
          />
        ) : (
          <React.Fragment>
            <ChatWindowHead headers={1}>
              <ChatWindowHeadAvatar>
                <ChatWindowHeadAvatarSVG />
              </ChatWindowHeadAvatar>
              <ChatWindowHeadName>
                Please, pick a user name and a room:
              </ChatWindowHeadName>
            </ChatWindowHead>
            <ChatWindowBody log={1}>
              <CreateUserForm onCreateChatUser={onCreateChatUser} />
            </ChatWindowBody>
            <ChatWindowBot></ChatWindowBot>
          </React.Fragment>
        )}
      </ChatWindowWrap>
    </ChatWindowContainer>
  );
};

export default ChatWindow;
