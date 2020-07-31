import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { device } from 'themes/media';

const Wrapper = styled.div`
  position: relative;

  @media ${device.sm} {}

  @media ${device.md} {}

  @media ${device.lg} {}

  @media ${device.xl} {}
`;

const Section = styled.section`
  width: 100%;
  height: 100vh;
  padding: 4rem 8rem;
`;

const TopSection = styled(Section)`
  background-image: url(https://images.unsplash.com/photo-1508170754725-6e9a5cfbcabf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60);
  background-position: center;
  background-size: cover;
`;

const DarkOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  background-color: rgba(0,0,0,.4);
`;

const Home = () => {

  const navLinks = null;

  return (
    <Wrapper>
      <TopSection className="section__intro">
        <DarkOverlay />
      </TopSection>
    </Wrapper>
  );
};

Home.propTypes = {
};

export default Home;
