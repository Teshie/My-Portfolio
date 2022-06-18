import React from "react";
import Link from "next/link";
import { NavLink } from "../Header/HeaderStyles";
import {
  Section,
  SectionText,
  SectionTitle,
  SectionTitleStack,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle>
        Hi, I am Teshome
        <br />
      </SectionTitle>
      <SectionTitleStack>React.JS Developer</SectionTitleStack>
      <SectionText>I turn problems into usable solutions.</SectionText>
      <Link href="#about">
        <Button>Learn More5tr</Button>
      </Link>
    </LeftSection>
  </Section>
);

export default Hero;
