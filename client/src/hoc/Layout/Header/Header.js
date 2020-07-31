import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import { FlexParent, FlexSpacer } from 'components/Util';
import { demoIcon } from 'assets';
import { device } from 'themes/media';

const Wrapper = styled.div`
  width: 100%;
  height: 5rem;
  position: absolute;
  background-color: transparent;
  z-index: 120;

  * {
    color: ${({ theme }) => theme.palette.white.default};
  }

  @media ${device.sm} {}

  @media ${device.md} {}

  @media ${device.lg} {}

  @media ${device.xl} {}
`;

const Logo = styled.div`

`;

const Title = styled.div`

`;

const NavHeader = styled.div`

`;

const Nav = styled.nav`

`;

const Login = styled.div`

`;

const Header = () => {
  const navLinks = null;

  return (
    <Wrapper>
      <Container>
        <FlexParent className="align-center">
        <NavHeader>
          <Logo>
            <img src={demoIcon} alt="demo" />
          </Logo>
          <Title>
            All of the House
          </Title>
        </NavHeader>
          <Nav>
            {navLinks}
          </Nav>
          <FlexSpacer />
          <Login>
            Sign In
          </Login>
        </FlexParent>
      </Container>
    </Wrapper>
  );
};

Header.propTypes = {
};

export default Header
