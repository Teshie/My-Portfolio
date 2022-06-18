import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TestimonialsStyles";

const Technologies = () => (
  <Section id="tech">
    <Section />
    <SectionTitle>Testimonials</SectionTitle>

    <List>
      <ListItem>
        <ListContainer>
          <ListTitle>Abrham G. CEO Atum Technologies</ListTitle>
          <ListParagraph>
            "" With Teshome’s help, we were able to increase the functionality
            of our website dramatically while cutting our costs.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Thomas A.</ListTitle>
          <ListParagraph>
            "" Without doubt one of the most talented programmers out there. I
            always go back to Teshome when I'm out of my depth and he's never
            failed to deliver what I ask for. Smart, trustworthy and
            professional. You won't be disappointed.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Abel A.</ListTitle>
          <ListParagraph>
            "" Teshome is a great help managing a very out of date website.
            Everything we ask him to do is done quickly and efficiently, we
            would be lost without him.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
