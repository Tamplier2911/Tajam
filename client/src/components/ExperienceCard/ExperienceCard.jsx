// import './ExperienceCard.scss';
import React from "react";

// sc
import {
  CardContainer,
  CardSvgWrapper,
  CardTitle,
  CardText,
} from "./ExperienceCard.styles";

const ExperienceCard = ({ title, text, svg, index }) => {
  return (
    <CardContainer index={index}>
      <CardSvgWrapper>
        {svg ? React.cloneElement(svg, {}) : null}
      </CardSvgWrapper>
      <CardTitle>{title}</CardTitle>
      <CardText>{text}</CardText>
    </CardContainer>
  );
};

export default ExperienceCard;
