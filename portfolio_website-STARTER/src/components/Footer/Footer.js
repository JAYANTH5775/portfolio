import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillMessage, AiFillSecurityScan } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="789-244-3488">789-244-3488</LinkItem>
        </LinkColumn>

        <LinkColumn>
          <LinkTitle>Email </LinkTitle>
          <LinkItem href="jayanth.h.s.2002jay@gmail.com">Jayanth.h.s.2002jay@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>


      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>We dream tech</Slogan>
          <SocialIcons href="https://google.com/JAYANTH5775">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://google.com">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://google.com">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://stackoverflow.com">
            <AiFillSecurityScan size="4rem" />
          </SocialIcons>
          <SocialIcons>
            <AiFillMessage size="3rem"></AiFillMessage>
          </SocialIcons>

        </CompanyContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
