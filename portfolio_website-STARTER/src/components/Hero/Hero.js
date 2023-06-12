import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My portfolio Website
      </SectionTitle>
      <SectionText>
        Myself Jayanth H S , Full-Stack Web developer , Flutter🍃, and aspiring web 3.0 , ML enthuasist
      </SectionText>
      <Button onclick={() => window.location = "https://github.com"}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;