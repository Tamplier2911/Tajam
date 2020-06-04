import "./TeamMemberCard.scss";
import React from "react";

// cs

import {
  TeamMemberCardFigure,
  TeamMemberImgWrapper,
  TeamMemberImg,
  TeamMemberInfo,
  TeamMemberName,
  TeamMemberPosition,
} from "./TeamMemberCard.styles";

const TeamMemberCard = ({ image, name, position, index }) => {
  return (
    <TeamMemberCardFigure index={index}>
      <TeamMemberImgWrapper>
        <TeamMemberImg src={image} alt="team member" />
      </TeamMemberImgWrapper>
      <TeamMemberInfo>
        <TeamMemberName>{name}</TeamMemberName>
        <TeamMemberPosition>{position}</TeamMemberPosition>
      </TeamMemberInfo>
    </TeamMemberCardFigure>
  );
};

export default TeamMemberCard;
