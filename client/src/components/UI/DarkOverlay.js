import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,.4);
  z-index: 101;
`;

const DarkOverlay = () => <Wrapper />;

export default DarkOverlay
