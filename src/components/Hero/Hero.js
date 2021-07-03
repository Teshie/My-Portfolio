import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle>
        Welcome to
        <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Hi, I am Teshome. I design and build user interfaces.
      </SectionText>
      <Button onClick={() => (window.location = "https://www.google.com")}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
