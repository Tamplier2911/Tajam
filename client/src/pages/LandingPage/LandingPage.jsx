import "./LandingPage.scss";
import React from "react";

// sections
import SectionHero from "../../components/SectionHero/SectionHero";
import SectionStory from "../../components/SectionStory/SectionStory";
import SectionWatch from "../../components/SectionWatch/SectionWatch";
import SectionExperience from "../../components/SectionExperience/SectionExperience";
import SectionTeam from "../../components/SectionTeam/SectionTeam";

// sc
import {} from "./LandingPage.styles";

const LandingPage = () => {
  return (
    <main className="landingPage">
      <SectionHero />
      <SectionStory />
      <SectionWatch />
      <SectionExperience />
      <SectionTeam />
    </main>
  );
};

export default LandingPage;
