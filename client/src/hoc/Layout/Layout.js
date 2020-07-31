import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { device } from 'themes/media';
import { Header } from './Header';
import { Footer } from './Footer';

const Wrapper = styled.div`

  @media ${device.sm} {}

  @media ${device.md} {}

  @media ${device.lg} {}

  @media ${device.xl} {}
`;

const Layout = ({ children, routeComponents }) => {

  return (
    <Wrapper>
      <Header routeComponents={routeComponents} />
        {children}
      <Footer />
    </Wrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.elementType.isRequired,
  routeComponents: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    component: PropTypes.elementType,
    path: PropTypes.string,
    exact: PropTypes.bool,
  })),
};

export default Layout;
