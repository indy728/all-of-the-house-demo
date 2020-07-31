import React, { useState } from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container'
import { Section, DarkOverlay, Button } from 'components/UI';

const Wrapper = styled(Section)`
  height: 100vh;
  position: relative;
  background-image: url(https://images.unsplash.com/photo-1508170754725-6e9a5cfbcabf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60);
  background-position: center;
  background-size: cover;
`;

const TopSectionContent = styled.div`
  position: absolute;
  height: calc(100% - 10rem);
  width: 100%;
  z-index: 119;
  left: 0;
  bottom: 0;

  display: flex;
  align-items: center;
`;

const BigAdHeader = styled.div`

`;

const TopSection = () => {
  const [iterator, setIterator] = useState(0);

  const technologies = [
    'Redux', 'HTML', 'CSS', 'Javascript',
    'Nodejs', 'Express', 'Web Pack', 'jQuery',
  ]

  setTimeout(() => {
    setIterator((iterator + 1) % technologies.length);
  }, 2000);

  return (
    <Wrapper className="section__intro">
      <DarkOverlay />
      <TopSectionContent>
        <Container>
          <BigAdHeader>
            <h1>
              Building ReactJS apps with {technologies[iterator]}
            </h1>
          </BigAdHeader>
          <div>
            <Button className="white" height="5rem">
            <a href="https://kyledevlinmurray.com">
            Link to Kyle's Homepage
            </a>
            </Button>
          </div>
        </Container>
      </TopSectionContent>
    </Wrapper>
  );
};

export default TopSection
