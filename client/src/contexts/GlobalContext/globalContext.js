import React, { createContext, useState } from "react";

const Context = createContext({});

export const GlobalContext = ({ children }) => {
  const [appState, setAppState] = useState({
    menu: { menuHidden: true },
    chat: { chatHidden: true },
    testimonials: {
      current: 2,
    },
  });
  const { menu, chat, testimonials } = appState;

  const toggleMenu = () => {
    setAppState({ ...appState, menu: { menuHidden: !menu.menuHidden } });
  };

  const toggleChat = () => {
    setAppState({ ...appState, chat: { chatHidden: !chat.chatHidden } });
  };

  const setTestimonialNext = () => {
    const { current } = testimonials;
    if (current === 4) {
      setAppState({ ...appState, testimonials: { current: 0 } });
    } else {
      setAppState({ ...appState, testimonials: { current: current + 1 } });
    }
  };

  const setTestimonialPrev = () => {
    const { current } = testimonials;
    if (current === 0) {
      setAppState({ ...appState, testimonials: { current: 4 } });
    } else {
      setAppState({ ...appState, testimonials: { current: current - 1 } });
    }
  };

  return (
    <Context.Provider
      value={{
        menu,
        toggleMenu,
        chat,
        toggleChat,
        testimonials,
        setTestimonialNext,
        setTestimonialPrev,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
