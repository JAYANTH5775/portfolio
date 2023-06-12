import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have Worked with range of the technology from the front end to the backend in the web development world and now exploring the Web 3.0 , ML
      I have the Basic Idea  of the Flutter🍃

    </SectionText>

    <List>
      <ListItem >
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <ListParagraph>
            Experience With <br />
            React JS
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <List>
      <ListItem >
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience With <br />
            Node JS
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>

    <List>
      <ListItem >
        <DiZend size="3rem" />
        <ListContainer>
          <ListTitle>App-dev</ListTitle>
          <ListParagraph>
            Experience With <br />
            Flutter🍃
          </ListParagraph>
        </ListContainer>
      </ListItem>

    </List>


  </Section>
);

export default Technologies;
