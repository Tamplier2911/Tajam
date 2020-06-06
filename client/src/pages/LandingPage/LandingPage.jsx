// import "./LandingPage.scss";
import React from "react";

// contexts
import { TestimonialsContext } from "../../contexts/TestimonialsContxt/TestimonialsContext";
import { HeroContext } from "../../contexts/HeroContext/HeroContext";

// sections
import SectionHero from "../../components/SectionHero/SectionHero";
import SectionStory from "../../components/SectionStory/SectionStory";
import SectionWatch from "../../components/SectionWatch/SectionWatch";
import SectionExperience from "../../components/SectionExperience/SectionExperience";
import SectionTeam from "../../components/SectionTeam/SectionTeam";
import WorksSection from "../../components/SectionWorks/SectionWorks";
import SectionTestimonials from "../../components/SectionTestimonials/SectionTestimonials";
import SectionContacts from "../../components/SectionContacts/SectionContacts";

// sc
import { LandingPageMain } from "./LandingPage.styles";

const LandingPage = () => {
  return (
    <LandingPageMain>
      <HeroContext>
        <SectionHero />
      </HeroContext>
      <SectionStory />
      <SectionWatch />
      <SectionExperience />
      <SectionTeam />
      <WorksSection />
      <TestimonialsContext>
        <SectionTestimonials />
      </TestimonialsContext>
      <SectionContacts />
    </LandingPageMain>
  );
};

export default LandingPage;
