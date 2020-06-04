import "./SectionContacts.scss";
import React from "react";

// components
import HeaderMedium from "../HeaderMedium/HeaderMedium";
import ContactForm from "../ContactForm/ContactForm";
import ClientsCollection from "../ClientsCollection/ClientsCollection";

// sc
import {} from "./SectionContacts.styles";

// constants
import { sectionContactsConstants } from "./SectionConctacts.constants";

const SectionContacts = () => {
  const { titleLeft, titleRight } = sectionContactsConstants;
  return (
    <section className="contacts">
      <div className="contacts__wrap">
        <div className="contacts__top">
          <div className="contacts__top--title">
            <HeaderMedium title={titleLeft} />
          </div>
          <ContactForm />
        </div>
        <div className="contacts__bot">
          <div className="contacts__bot--title">
            <HeaderMedium title={titleRight} />
          </div>
          <ClientsCollection />
        </div>
        {/* <div className="contacts__top">
          <HeaderMedium title={titleLeft} />
          <HeaderMedium title={titleRight} />
        </div>
        <div className="contacts__bot">
          <ContactForm />
          <ClientsCollection />
        </div> */}
      </div>
    </section>
  );
};

export default SectionContacts;
