import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { device } from 'themes/media';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { FlexSpacer } from 'components/Util';
import { LogoSVG } from 'components/UI';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { palette } from 'themes/palette';

const Wrapper = styled.footer`
  background-color: ${({ theme }) => theme.palette.blue.footer};

  * {
    color: ${({ theme }) => theme.palette.grey.footer};
  }

  > div {
    padding: 2.4rem 0;
  }

  @media ${device.sm} {}

  @media ${device.md} {}

  @media ${device.lg} {}

  @media ${device.xl} {}
`;

const FooterMenu = styled.div`
  font-size: 1.6rem;
`;

const FooterMenuItem = styled.div`
  padding: 0 2.4rem;
  font-family: ${({ theme }) => theme.fonts.serif};
`;

const FooterSocialIcons = styled.div`
  font-size: 1.4rem;

  > :not(:last-child) {
    margin-right: 2rem;
  }
`;

const FooterWidgets = styled.div`
  border-top: .5px solid ${({ theme }) => theme.palette.grey.border};
`;

const FooterBottom = styled.div`
  font-size: 80%;
  font-family: ${({ theme }) => theme.fonts.serif};
`;

const Footer = (props) => {
  const footerMenuItems = ['Contact', 'Legal'];
  const footerMenu = footerMenuItems.map(item => (
    <FooterMenuItem key={item}>{item}</FooterMenuItem>
  ));

  return (
    <Wrapper>
      <FooterMenu>
        <Container>
          <Row>
            {footerMenu}
            <FlexSpacer />
            <FooterSocialIcons>
              <a href="https://www.facebook.com/kyle.murray.7758235/">
                <FontAwesomeIcon icon={faFacebook} size="2x"/>
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faTwitter} size="2x"/>
              </a>
              <a href="https://www.linkedin.com/in/kyledevlinmurray/">
                <FontAwesomeIcon icon={faLinkedin} size="2x"/>
              </a>
              <a href="https://www.instagram.com/indy728/">
                <FontAwesomeIcon icon={faInstagram} size="2x"/>
              </a>
            </FooterSocialIcons>
          </Row>
        </Container>
      </FooterMenu>
      <FooterWidgets>
        <Container>
          <LogoSVG width='5rem' fill={palette.grey.footer} />
        </Container>
      </FooterWidgets>
      <FooterBottom>
       <Container className="text-center">
          © 2020 Indy728, github.com/indy728, kyledevlinmurray.com
        </Container>
      </FooterBottom>
    </Wrapper>
  );
};

Footer.propTypes = {
};

export default Footer;
