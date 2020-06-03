// import "./SectionHero.scss";
import React from "react";

// components
import Button from "../Button/Button";

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
  return (
    <SectionHeroContainer id="hero">
      <SectionHeroContent>
        <SectionHeroMessage>
          <SectionHeroHeader>{header}</SectionHeroHeader>
          <SectionHeroText>{message}</SectionHeroText>
        </SectionHeroMessage>
        <SectionHeroCta>
          <SectionHeroBtn>
            <Button title={button} action={() => {}} />
          </SectionHeroBtn>
        </SectionHeroCta>
        <SectionHeroCirles>
          <SectionHeroCircle active={1} />
          <SectionHeroCircle />
          <SectionHeroCircle />
          <SectionHeroCircle />
        </SectionHeroCirles>
      </SectionHeroContent>
    </SectionHeroContainer>
  );
};

export default SectionHero;
