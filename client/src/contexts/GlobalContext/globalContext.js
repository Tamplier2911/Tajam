import React, { createContext, useState } from "react";

const Context = createContext({});

export const GlobalContext = ({ children }) => {
  const [appState, setAppState] = useState({
    menu: { menuHidden: true },
    chat: {
      currentUser: "",
      chatHidden: true,
    },
  });
  const { menu, chat } = appState;

  const toggleMenu = () => {
    setAppState({ ...appState, menu: { menuHidden: !menu.menuHidden } });
  };

  const toggleChat = () => {
    setAppState({ ...appState, chat: { chatHidden: !chat.chatHidden } });
  };

  const setChatCurrentUser = (userName) => {
    setAppState({ ...appState, chat: { currentUser: userName } });
  };

  return (
    <Context.Provider
      value={{
        menu,
        toggleMenu,
        chat,
        toggleChat,
        setChatCurrentUser,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
