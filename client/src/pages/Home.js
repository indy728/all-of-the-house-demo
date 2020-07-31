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
  padding: 4rem 8rem;
`;

const TopSection = styled(Section)`
  height: 100vh;
  position: relative;
  background-image: url(https://images.unsplash.com/photo-1508170754725-6e9a5cfbcabf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60);
  background-position: center;
  background-size: cover;
`;

const QuoteSection = styled(Section)`
  min-height: 30vh;
  padding: 10rem;
  background-color: ${({ theme }) => theme.palette.black.default};
  text-align: center;

  * {
    color: ${({ theme }) => theme.palette.white.default};
  }

  h3 {
    font-size: 4rem;
    font-family: ${({ theme }) => theme.fonts.jumboSans};
  }

  p {
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.fonts.serif};
  }

  > :not(:first-child) {
    margin-top: 2rem;
  }
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
      <Section>
      </Section>
      <QuoteSection>
        <h3>Some Truth, Some Dilbert</h3>
        <p>Give me a goal and I will find a means to re-build it.</p>
        <p><em>— Some engineer, probably</em></p>
      </QuoteSection>
    </Wrapper>
  );
};

Home.propTypes = {
};

export default Home;
