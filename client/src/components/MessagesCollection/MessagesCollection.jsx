// import './MessagesCollection.scss'
import React, { useEffect, useState } from "react";
import { animateScroll } from "react-scroll";

// components
import MessageBubble from "../MessageBubble/MessageBubble";

// sc
import {
  MessagesCollectionContainer,
  MessagesCollectionUsersBtn,
  MessagesCollectionUsersBar,
  MessageCollectionUserName,
} from "./MessagesCollection.styles";

// utils
import { nameChecker } from "../../utils/nameChecker";

const MessagesCollection = ({ messages, users, userName }) => {
  const [usersHidden, setUsersHidden] = useState(null);

  const scrollToBottom = () => {
    animateScroll.scrollToBottom({ containerId: "chatbody" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <MessagesCollectionContainer id="chatbody">
      {messages.map((messageObj) => {
        const { id, user, ...otherProps } = messageObj;
        return (
          <MessageBubble
            key={id}
            user={user}
            {...otherProps}
            style={nameChecker(userName, user)}
          />
        );
      })}
      <MessagesCollectionUsersBtn
        usersHidden={usersHidden === true ? 1 : usersHidden === false ? 0 : 2}
        onClick={() =>
          usersHidden === true || usersHidden === false
            ? setUsersHidden((usersHidden) => !usersHidden)
            : setUsersHidden(false)
        }
      />
      {usersHidden === false ? (
        <MessagesCollectionUsersBar>
          {users
            ? users.map((user, i) => {
                return (
                  <MessageCollectionUserName key={i}>
                    {user.name}
                  </MessageCollectionUserName>
                );
              })
            : null}
        </MessagesCollectionUsersBar>
      ) : null}
    </MessagesCollectionContainer>
  );
};

export default MessagesCollection;
