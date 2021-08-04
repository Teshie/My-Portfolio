import React from "react";
import Link from "next/link";
import { NavLink } from "../Header/HeaderStyles";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;
`;

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
      <Link href="#about">
        <Button>Learn More</Button>
      </Link>
    </LeftSection>
    <RightSection>
      <Img src="https://www.lunapic.com/editor/premade/transparent.gif" />
    </RightSection>
  </Section>
);

export default Hero;
