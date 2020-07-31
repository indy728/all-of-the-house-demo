import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;

  &.flow-column {
    flex-flow: column;
  }

  &.align-center {
    align-items: center;
  }

  &.justify-center {
    justify-content: center;
  }
`;

const FlexParent = ({ className, children }) => {

  return (
    <Wrapper className={className}>
      {children}
    </Wrapper>
  );
};

FlexParent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.elementType.isRequired,
};

FlexParent.defaultProps = {
  className: 'flex-parent',
}

export default FlexParent;
