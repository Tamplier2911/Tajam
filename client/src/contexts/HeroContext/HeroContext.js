import React, { createContext, useState } from "react";

const Context = createContext({});

export const HeroContext = ({ children }) => {
  const [heroState, setHeroState] = useState({
    hero: {
      current: 0,
    },
  });
  const { hero } = heroState;

  const setHeroNext = () => {
    const { current } = hero;
    if (current === 3) {
      setHeroState({ ...heroState, hero: { current: 0 } });
    } else {
      setHeroState({ ...heroState, hero: { current: current + 1 } });
    }
  };

  const setHeroPrew = () => {
    const { current } = hero;
    if (current === 0) {
      setHeroState({ ...heroState, hero: { current: 4 } });
    } else {
      setHeroState({ ...heroState, hero: { current: current - 1 } });
    }
  };

  const setHeroFirst = () => {
    setHeroState({ ...heroState, hero: { current: 0 } });
  };

  const setHeroSecond = () => {
    setHeroState({ ...heroState, hero: { current: 1 } });
  };

  const setHeroThird = () => {
    setHeroState({ ...heroState, hero: { current: 2 } });
  };

  const setHeroFourth = () => {
    setHeroState({ ...heroState, hero: { current: 3 } });
  };

  return (
    <Context.Provider
      value={{
        hero,
        setHeroNext,
        setHeroPrew,
        setHeroFirst,
        setHeroSecond,
        setHeroThird,
        setHeroFourth,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
