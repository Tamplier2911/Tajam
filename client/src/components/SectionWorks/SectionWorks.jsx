// import "./SectionWorks.scss";
import React from "react";

// components
import HeaderMedium from "../HeaderMedium/HeaderMedium";
import Button from "../Button/Button";
import WorkPreview from "../WorkPreview/WorkPreview";

// sc
import {
  SectionWorksContainer,
  SectionWorksTop,
  SectionWorksWrap,
  SectionWorksTitle,
  SectionWorksLinkWrap,
  SectionWorksLink,
  SectionWorksChevron,
  SectionWorksMid,
  SectionWorksBot,
  SectionWorksCta,
} from "./SectionWorks.styles";

// constants
import { sectionWorksConstants } from "./SectionWorks.constants";

const SectionWorks = () => {
  const { title, link, button, works } = sectionWorksConstants;
  return (
    <SectionWorksContainer id="works">
      <SectionWorksTop>
        <SectionWorksWrap>
          <SectionWorksTitle>
            <HeaderMedium title={title} />
          </SectionWorksTitle>
          <SectionWorksLinkWrap>
            <SectionWorksLink
              href="https://dribbble.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link}
              {`   `}
              <SectionWorksChevron>&raquo;</SectionWorksChevron>
            </SectionWorksLink>
          </SectionWorksLinkWrap>
        </SectionWorksWrap>
      </SectionWorksTop>
      <SectionWorksMid>
        {works.map((work) => {
          const { id, image } = work;
          return <WorkPreview key={id} image={image} />;
        })}
      </SectionWorksMid>
      <SectionWorksBot>
        <SectionWorksCta>
          <Button title={button} />
        </SectionWorksCta>
      </SectionWorksBot>
    </SectionWorksContainer>
  );
};

export default SectionWorks;
