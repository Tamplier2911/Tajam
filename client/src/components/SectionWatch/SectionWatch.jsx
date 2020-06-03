// import "./SectionWatch.scss";
import React from "react";

// sc
import {
  SectionWatchContainer,
  SectionWatchCta,
  SectionWatchBtn,
  SectionWatchSVG,
  SectionWatchText,
} from "./SectionWatch.styles";

// constants
import { sectionWatchConstants } from "./SectionWatch.constants";

const SectionWatch = () => {
  const { title } = sectionWatchConstants;
  return (
    <SectionWatchContainer id="watch">
      <SectionWatchCta>
        <SectionWatchBtn>
          <SectionWatchSVG />
        </SectionWatchBtn>
        <SectionWatchText>{title}</SectionWatchText>
      </SectionWatchCta>
    </SectionWatchContainer>
  );
};

export default SectionWatch;
