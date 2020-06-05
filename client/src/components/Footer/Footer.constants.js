import React from "react";
import styled, { css } from "styled-components";

// svg
import { ReactComponent as FacebookSVG } from "../../assets/svg/face.svg";
import { ReactComponent as MediumSVG } from "../../assets/svg/medi.svg";
import { ReactComponent as GitSVG } from "../../assets/svg/git.svg";
import { ReactComponent as InstagramSVG } from "../../assets/svg/inst.svg";
import { ReactComponent as GoogleSVG } from "../../assets/svg/google.svg";
import { ReactComponent as TubeSVG } from "../../assets/svg/tube.svg";

const svgStyle = css`
  cursor: pointer;
  width: 3.5rem;
  height: 3.5rem;
  fill: var(--cl-fontA);

  transition: fill 0.3s;
  @media (hover: hover) {
    &:hover {
      fill: var(--cl-tertiary);
    }
  }
`;

const Facebook = styled(FacebookSVG)`
  ${svgStyle}
`;
const Medium = styled(MediumSVG)`
  ${svgStyle}
`;
const Git = styled(GitSVG)`
  ${svgStyle}
`;
const Instagram = styled(InstagramSVG)`
  ${svgStyle}
`;
const Google = styled(GoogleSVG)`
  ${svgStyle}
`;
const Tube = styled(TubeSVG)`
  ${svgStyle}
`;

export const footerConstants = {
  text:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, asperiores inventore rerum, accusamus, explicabo cumque dignissimos hic reprehenderit at porro ullam facere.",
  address:
    "Ruko cucruk, Jl. Radio luar dalem jos No.12 - 13, Kalideres - Jakarta Barat 11480 - Indonesia",
  phone: "(+62) 21-2224 3333",
  title1: "Our studio",
  title2: "Stay in touch",
  socials: [
    {
      id: "facebooksocial",
      href: "https://www.facebook.com/",
      SocialSVG: <Facebook />,
    },
    {
      id: "mediumsocial",
      href: "https://medium.com/",
      SocialSVG: <Medium />,
    },
    {
      id: "gitesocial",
      href: "https://github.com/",
      SocialSVG: <Git />,
    },
    {
      id: "instagramsocial",
      href: "https://www.instagram.com/",
      SocialSVG: <Instagram />,
    },
    {
      id: "googleplussocial",
      href: "https://www.google.com/",
      SocialSVG: <Google />,
    },
    {
      id: "youtubesocial",
      href: "https://www.youtube.com/",
      SocialSVG: <Tube />,
    },
  ],
  links: [
    {
      id: "linkhelp",
      title: "Help",
      action: () => {},
    },
    {
      id: "linkterms",
      title: "Terms & Conditions",
      action: () => {},
    },
    {
      id: "linkprivacy",
      title: "Privacy",
      action: () => {},
    },
  ],
  copy: "Copyright © 2020 - Tajem Creative",
};
