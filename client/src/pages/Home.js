import React from 'react';
import styled from 'styled-components';
import { Section } from 'components/UI';
import { TopSection } from 'components/TopSection';

const Wrapper = styled.div`
  position: relative;
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

const Home = () => {

  return (
    <Wrapper>
      <TopSection />
      <QuoteSection className="section__quote">
        <h3>Some Truth, Some Dilbert</h3>
        <p>Give me a goal and I will find a means to re-build it.</p>
        <p><em>— Some engineer, probably</em></p>
      </QuoteSection>
    </Wrapper>
  );
};

export default Home;
