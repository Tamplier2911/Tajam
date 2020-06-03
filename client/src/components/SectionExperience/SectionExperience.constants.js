import React from "react";

// svgs
import { ReactComponent as WebdesignSVG } from "../../assets/svg/screen.svg";
import { ReactComponent as BrandingSVG } from "../../assets/svg/brush.svg";
import { ReactComponent as MobilegSVG } from "../../assets/svg/mobile.svg";
import { ReactComponent as SeoSVG } from "../../assets/svg/chart.svg";
import { ReactComponent as GameSVG } from "../../assets/svg/gamedev.svg";
import { ReactComponent as LoveSVG } from "../../assets/svg/heart.svg";

export const sectionExperienceConstants = {
  title: "expertise",
  text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  cards: [
    {
      id: "webdesign",
      title: "web design & development",
      text:
        "Lorem ipsum dolor sit, amet consectetur adipisicing consectetur elit lorem ipsum dolor sit, amet consectetur elit.",
      svg: <WebdesignSVG />,
    },
    {
      id: "branding",
      title: "branding identity",
      text:
        "Lorem ipsum dolor sit, amet consectetur adipisicing consectetur elit lorem ipsum dolor sit, amet consectetur elit.",
      svg: <BrandingSVG />,
    },
    {
      id: "mobile",
      title: "mobile app",
      text:
        "Lorem ipsum dolor sit, amet consectetur adipisicing consectetur elit lorem ipsum dolor sit, amet consectetur elit.",
      svg: <MobilegSVG />,
    },
    {
      id: "seoopt",
      title: "search engine optimization",
      text:
        "Lorem ipsum dolor sit, amet consectetur adipisicing consectetur elit lorem ipsum dolor sit, amet consectetur elit.",
      svg: <SeoSVG />,
    },
    {
      id: "gamedev",
      title: "game development",
      text:
        "Lorem ipsum dolor sit, amet consectetur adipisicing consectetur elit lorem ipsum dolor sit, amet consectetur elit.",
      svg: <GameSVG />,
    },
    {
      id: "withlove",
      title: "made with love",
      text:
        "Lorem ipsum dolor sit, amet consectetur adipisicing consectetur elit lorem ipsum dolor sit, amet consectetur elit.",
      svg: <LoveSVG />,
    },
  ],
};
