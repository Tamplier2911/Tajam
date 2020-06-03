// import "./SectionExperience.scss";
import React from "react";

// components
import HeaderMedium from "../HeaderMedium/HeaderMedium";
import ExperienceCard from "../ExperienceCard/ExperienceCard";

// sc
import {
  SectionExpContainer,
  SectionExpWrap,
  SectionExpTop,
  SectionExpText,
  SectionExpBot,
} from "./SectionExperience.styles";

// constants
import { sectionExperienceConstants } from "./SectionExperience.constants";

const SectionExperience = () => {
  const { title, text, cards } = sectionExperienceConstants;
  return (
    <SectionExpContainer id="experience">
      <SectionExpWrap>
        <SectionExpTop>
          <HeaderMedium title={title} />
          <SectionExpText>{text}</SectionExpText>
        </SectionExpTop>
        <SectionExpBot>
          {cards.map((card, i) => {
            const { id } = card;
            return <ExperienceCard {...card} index={i} key={id} />;
          })}
        </SectionExpBot>
      </SectionExpWrap>
    </SectionExpContainer>
  );
};

export default SectionExperience;
