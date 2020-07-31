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
  justify-content: center;
`;

const BigAdHeader = styled.div`
  margin-bottom: 6rem;
  text-align: center;

  h1 {
    font-size: 6rem;
    font-weight: 600;
    font-family: ${({ theme }) => theme.fonts.jumboSans};
    color: ${({ theme }) => theme.palette.white.default};
  }

  span.outer {
    border-right: 2px solid ${({ theme }) => theme.palette.black.default};

    overflow: hidden;

    span.inner {
      color: ${({ theme }) => theme.palette.pink.default};
      transform: translateX(50%;);
    }
  }
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
        <Container className="col-8 d-flex flex-column align-items-center">
          <BigAdHeader>
            <h1>
              Building ReactJS apps with <span className="outer"><span className="inner">{technologies[iterator]}</span></span>
            </h1>
          </BigAdHeader>
          <div>
            <a href="https://kyledevlinmurray.com" style={{'textDecoration': 'none'}}>
              <Button className="white" height="5rem">
              Link to Kyle's Homepage
              </Button>
            </a>
          </div>
        </Container>
      </TopSectionContent>
    </Wrapper>
  );
};

export default TopSection
