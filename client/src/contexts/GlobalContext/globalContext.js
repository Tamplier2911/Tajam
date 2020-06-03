import React, { createContext, useState } from "react";

const Context = createContext({});

export const GlobalContext = ({ children }) => {
  const [appState, setAppState] = useState({ menu: { menuHidden: true } });
  const { menu } = appState;

  const toggleMenu = () => {
    setAppState({ ...appState, menu: { menuHidden: !menu.menuHidden } });
  };

  return (
    <Context.Provider value={{ menu, toggleMenu }}>{children}</Context.Provider>
  );
};

export default Context;
