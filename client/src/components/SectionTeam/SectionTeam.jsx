// import "./SectionTeam.scss";
import React from "react";

// components
import HeaderMedium from "../HeaderMedium/HeaderMedium";
import TeamMemberCard from "../TeamMemberCard/TeamMemberCard";
import Button from "../Button/Button";

// utils
import { jumper } from "../../utils/jumper";

// sc
import {
  SectionTeamContainer,
  SectionTeamWrap,
  SectionTeamTop,
  SectionTeamTopText,
  SectionTeamMid,
  SectionTeamBot,
  SectionTeamBotText,
  SectionTeamBotCta,
} from "./SectionTeam.styles";

// constants
import { sectionTeamConstants } from "./SectionTeam.constants";

const SectionTeam = () => {
  const { team, title, textTop, textBot, button } = sectionTeamConstants;

  return (
    <SectionTeamContainer id="team">
      <SectionTeamWrap>
        <SectionTeamTop>
          <HeaderMedium title={title} />
          <SectionTeamTopText>{textTop}</SectionTeamTopText>
        </SectionTeamTop>
        <SectionTeamMid>
          {team.map((member, index) => {
            const { id } = member;
            return <TeamMemberCard key={id} index={index} {...member} />;
          })}
        </SectionTeamMid>
        <SectionTeamBot>
          <SectionTeamBotText>{textBot}</SectionTeamBotText>
          <SectionTeamBotCta>
            <Button title={button} action={jumper("#works")} />
          </SectionTeamBotCta>
        </SectionTeamBot>
      </SectionTeamWrap>
    </SectionTeamContainer>
  );
};

export default SectionTeam;
