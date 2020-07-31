import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { device } from 'themes/media';
import Container from 'react-bootstrap/Container';

const Wrapper = styled.div`

  @media ${device.sm} {}

  @media ${device.md} {}

  @media ${device.lg} {}

  @media ${device.xl} {}
`;

const Footer = () => {

  return (
    <Wrapper>

    </Wrapper>
  );
};

Footer.propTypes = {
};

export default Footer;
