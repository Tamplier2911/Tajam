import React, { createContext, useState } from "react";

const Context = createContext({});

export const GlobalContext = ({ children }) => {
  const [appState, setAppState] = useState({
    menu: { menuHidden: true },
    testimonials: {
      current: 2,
    },
  });
  const { menu, testimonials } = appState;

  const toggleMenu = () => {
    setAppState({ ...appState, menu: { menuHidden: !menu.menuHidden } });
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
