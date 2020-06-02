import React, { createContext, useState } from "react";

const Context = createContext({});

export const GlobalContext = ({ children }) => {
  const [appState, setAppState] = useState({ modal: { modalHidden: true } });
  const { modal } = appState;

  const toggleModal = () => {
    setAppState({ ...appState, modal: { modalHidden: !modal.modalHidden } });
  };

  return (
    <Context.Provider value={{ modal, toggleModal }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
