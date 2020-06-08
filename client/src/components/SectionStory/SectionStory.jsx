// import "./SectionStory.scss";
import React from "react";

// components
import Button from "../Button/Button";
import HeaderMedium from "../HeaderMedium/HeaderMedium";

// utils
import { jumper } from "../../utils/jumper";

// logo image
import logo from "../../assets/jpg/awsomelogo.png";

// sc
import {
  SectionStoryContainer,
  SectionStoryContent,
  SectionStoryLogo,
  SectionStoryLogoWrap,
  SectionStoryLogoImage,
  SectionStoryInfo,
  SectionStoryInfoText,
  SectionStoryInfoCTA,
} from "./SectionStory.styles";

// constants
import { sectionStoryConstants } from "./SectionStory.constats";

const SectionStory = () => {
  const { title, firstText, secondText, button } = sectionStoryConstants;
  return (
    <SectionStoryContainer id="about">
      <SectionStoryContent>
        <SectionStoryLogo>
          <SectionStoryLogoWrap>
            <SectionStoryLogoImage src={logo} alt="awsome logo" />
          </SectionStoryLogoWrap>
        </SectionStoryLogo>
        <SectionStoryInfo>
          <HeaderMedium title={title} />
          <SectionStoryInfoText>{firstText}</SectionStoryInfoText>
          <SectionStoryInfoText>{secondText}</SectionStoryInfoText>
          <SectionStoryInfoCTA>
            <Button
              title={button}
              action={jumper("#experience")}
              color="dark"
            />
          </SectionStoryInfoCTA>
        </SectionStoryInfo>
      </SectionStoryContent>
    </SectionStoryContainer>
  );
};

export default SectionStory;
