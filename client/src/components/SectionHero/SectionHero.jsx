// import "./SectionHero.scss";
import React, { useContext, useEffect, useState } from "react";

// context
import HeroStore from "../../contexts/HeroContext/HeroContext";

// components
import Button from "../Button/Button";

// utils
import { jumper } from "../../utils/jumper";

// sc
import {
  SectionHeroContainer,
  SectionHeroContent,
  SectionHeroMessage,
  SectionHeroHeader,
  SectionHeroText,
  SectionHeroCta,
  SectionHeroBtn,
  SectionHeroCirles,
  SectionHeroCircle,
} from "./SectionHero.styles";

// constants
import { landingPageConstants } from "./SectionHero.constants";

const SectionHero = () => {
  const { header, message, button } = landingPageConstants;
  const {
    hero,
    setHeroNext,
    setHeroFirst,
    setHeroSecond,
    setHeroThird,
    setHeroFourth,
  } = useContext(HeroStore);

  const { current } = hero;

  const [isLoaded, setIsLoaded] = useState(0);

  useEffect(() => {
    setIsLoaded(0);
    setTimeout(() => {
      setIsLoaded(1);
    }, 600);

    const id = setInterval(() => {
      setHeroNext();
    }, 10000);

    return () => clearInterval(id);
  }, [current, setHeroNext]);

  return (
    <SectionHeroContainer id="hero">
      <SectionHeroContent>
        <SectionHeroMessage>
          <SectionHeroHeader>{header}</SectionHeroHeader>
          <SectionHeroText load={isLoaded}>{message[current]}</SectionHeroText>
        </SectionHeroMessage>
        <SectionHeroCta>
          <SectionHeroBtn>
            <Button title={button} action={jumper("#about")} />
          </SectionHeroBtn>
        </SectionHeroCta>
        <SectionHeroCirles>
          <SectionHeroCircle
            active={current === 0 ? 1 : 0}
            onClick={() => setHeroFirst()}
          />
          <SectionHeroCircle
            active={current === 1 ? 1 : 0}
            onClick={() => setHeroSecond()}
          />
          <SectionHeroCircle
            active={current === 2 ? 1 : 0}
            onClick={() => setHeroThird()}
          />
          <SectionHeroCircle
            active={current === 3 ? 1 : 0}
            onClick={() => setHeroFourth()}
          />
        </SectionHeroCirles>
      </SectionHeroContent>
    </SectionHeroContainer>
  );
};

export default SectionHero;
