import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  width: 100%;
  padding: 4rem 8rem;
`;

const Section = ({ className, children }) => (
  <Wrapper className={className}>
    {children}
  </Wrapper>
);

export default Section;
