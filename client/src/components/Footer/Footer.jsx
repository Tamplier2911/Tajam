// import "./Footer.scss";
import React from "react";

// components
import Link from "../Link/Link";
import SubscribeForm from "../SubscribeForm/SubscribeForm";

// sc
import {
  FooterContainer,
  FooterWrapper,
  FooterTop,
  FooterColOne,
  FooterColOneImgWrap,
  FooterColOneImg,
  FooterColOneText,
  FooterColTwo,
  FooterColTwoTitle,
  FooterColTwoPos,
  FooterColTwoPosWrap,
  FooterColTwoPosSVG,
  FooterColTwoAddress,
  FooterColTwoPhone,
  FooterColTwoPhoneWrap,
  FooterColTwoPhoneSvg,
  FooterColTwoPhoneNum,
  FooterColThree,
  FooterColThreeTitle,
  FooterColThreeForm,
  FooterColThreeSocials,
  FooterColThreeLink,
  FooterBot,
  FooterBotCol1,
  FooterBotCol2,
} from "./Footer.styles";

// constants
import { footerConstants } from "./Footer.constants";

// images
import logoimage from "../../assets/jpg/tjamlogo.png";

const Footer = () => {
  const {
    text,
    title1,
    address,
    phone,
    title2,
    socials,
    links,
    copy,
  } = footerConstants;
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterTop>
          <FooterColOne>
            <FooterColOneImgWrap>
              <FooterColOneImg src={logoimage} alt="logo" />
            </FooterColOneImgWrap>
            <FooterColOneText>{text}</FooterColOneText>
          </FooterColOne>
          <FooterColTwo>
            <FooterColTwoTitle>{title1}</FooterColTwoTitle>
            <FooterColTwoPos>
              <FooterColTwoPosWrap>
                <FooterColTwoPosSVG />
              </FooterColTwoPosWrap>
              <FooterColTwoAddress>{address}</FooterColTwoAddress>
            </FooterColTwoPos>
            <FooterColTwoPhone>
              <FooterColTwoPhoneWrap>
                <FooterColTwoPhoneSvg />
              </FooterColTwoPhoneWrap>
              <FooterColTwoPhoneNum>{phone}</FooterColTwoPhoneNum>
            </FooterColTwoPhone>
          </FooterColTwo>
          <FooterColThree>
            <FooterColThreeTitle>{title2}</FooterColThreeTitle>
            <FooterColThreeForm>
              <SubscribeForm />
            </FooterColThreeForm>
            <FooterColThreeSocials>
              {socials.map((social) => {
                const { id, href, SocialSVG } = social;
                return (
                  <FooterColThreeLink
                    key={id}
                    href={href}
                    rel="noreferrer noopener"
                    target="_black"
                  >
                    {SocialSVG}
                  </FooterColThreeLink>
                );
              })}
            </FooterColThreeSocials>
          </FooterColThree>
        </FooterTop>
        <FooterBot>
          <FooterBotCol1>
            {links.map((link) => {
              const { id, title } = link;
              return <Link key={id} title={title} />;
            })}
          </FooterBotCol1>
          <FooterBotCol2>{copy}</FooterBotCol2>
        </FooterBot>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
