import "./SectionContacts.scss";
import React from "react";

// components
import HeaderMedium from "../HeaderMedium/HeaderMedium";
import ContactForm from "../ContactForm/ContactForm";
import ClientsCollection from "../ClientsCollection/ClientsCollection";

// sc
import {
  SectionContactsContainer,
  SectionContactsWrap,
  SectionContactsTop,
  SectionContactsTopTitle,
  SectionContactsBot,
  SectionContactsBotTitle,
} from "./SectionContacts.styles";

// constants
import { sectionContactsConstants } from "./SectionConctacts.constants";

const SectionContacts = () => {
  const { titleLeft, titleRight } = sectionContactsConstants;
  return (
    <SectionContactsContainer id="contacts">
      <SectionContactsWrap>
        <SectionContactsTop>
          <SectionContactsTopTitle>
            <HeaderMedium title={titleLeft} />
          </SectionContactsTopTitle>
          <ContactForm />
        </SectionContactsTop>
        <SectionContactsBot>
          <SectionContactsBotTitle>
            <HeaderMedium title={titleRight} />
          </SectionContactsBotTitle>
          <ClientsCollection />
        </SectionContactsBot>
      </SectionContactsWrap>
    </SectionContactsContainer>
  );
};

export default SectionContacts;
