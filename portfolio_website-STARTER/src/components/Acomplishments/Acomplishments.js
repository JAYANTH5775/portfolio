import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 10, text: 'Open Source Projects' },
  { number: 100, text: 'Coding problems', },
  { number: 10, text: 'Github Followers', },
  { number: 2, text: 'Research Papers', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle> Personal Acomplishments</SectionTitle>

    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>

        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
