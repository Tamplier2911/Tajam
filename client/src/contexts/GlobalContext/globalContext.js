import React, { createContext, useState } from "react";

const Context = createContext({});

export const GlobalContext = ({ children }) => {
  const [appState, setAppState] = useState({
    menu: { menuHidden: true },
    chat: { chatHidden: true },
  });
  const { menu, chat } = appState;

  const toggleMenu = () => {
    setAppState({ ...appState, menu: { menuHidden: !menu.menuHidden } });
  };

  const toggleChat = () => {
    setAppState({ ...appState, chat: { chatHidden: !chat.chatHidden } });
  };

  return (
    <Context.Provider
      value={{
        menu,
        toggleMenu,
        chat,
        toggleChat,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
