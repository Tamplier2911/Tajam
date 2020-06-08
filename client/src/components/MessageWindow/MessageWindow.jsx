import "./MessageWindow.scss";
import React, { useEffect, useState } from "react";
import io from "socket.io-client";

// components
import MessageForm from "../MessageForm/MessageForm";
import MessagesCollection from "../MessagesCollection/MessagesCollection";

// sc
import {
  MessageWindowHead,
  MessageWindowHeadAvatar,
  MessageWindowHeadAvatarSVG,
  MessageWindowHeadName,
  MessageWindowBot,
} from "./MessageWindow.styles";

// socketize
let socket;

const MessageWindow = ({ userName, roomName, setUserData }) => {
  const onSendMessage = (message) => {
    // console.log(message, "from onSendMessage");
    if (message) {
      socket.emit("sendMessage", message);
    }
  };

  const [messages, setMessages] = useState([]);
  const [roomData, setRoomData] = useState({});

  const ENDPOINT = "/";

  useEffect(() => {
    // establish server connection
    socket = io(ENDPOINT);

    // socket
    // console.log(socket);

    // send user data to server on user joins chat
    socket.emit("join", { name: userName, room: roomName }, (data) => {
      // if data is not empty - means error occured (user name is not unique)
      // forward user to login screan again
      if (data) {
        // console.log(data, "server-side cb executed with error");
        setUserData({ name: "", room: "" });
      }

      // triggered if cb on server-side is executed
      // console.log(data, "server-side cb exectued with no error");
    });

    return () => {
      // disconnect the socket on component unmount
      socket.emit("disconnect");
      socket.off();
    };
  }, [ENDPOINT, userName, roomName, setUserData]);

  useEffect(() => {
    // handle message events emmited from server
    socket.on("message", (message) => {
      // update state with new messages
      setMessages((messages) => [...messages, message]);
    });
  }, []);

  useEffect(() => {
    // handle roomData events emited from server
    socket.on("roomData", (data, cb) => {
      // update roomData state with new users joined
      setRoomData((roomData) => ({ ...roomData, ...data }));
    });
  });

  return (
    <React.Fragment>
      <MessageWindowHead headers={2}>
        <MessageWindowHeadAvatar>
          <MessageWindowHeadAvatarSVG />
        </MessageWindowHeadAvatar>
        <MessageWindowHeadName>User: {userName}</MessageWindowHeadName>
        <MessageWindowHeadName>Room: {roomName}</MessageWindowHeadName>
      </MessageWindowHead>
      <MessagesCollection
        messages={messages}
        userName={userName}
        users={roomData.users}
      />
      <MessageWindowBot>
        <MessageForm onSendMessage={onSendMessage} />
      </MessageWindowBot>
    </React.Fragment>
  );
};

export default MessageWindow;
