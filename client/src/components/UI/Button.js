import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  height: ${({ height }) => height};
  border-radius: ${({ height }) => height};
  background-color: ${({ theme }) => theme.palette.pink.default};
  cursor: pointer;
  padding: 0 3rem;
  display: flex;
  align-items: center;
  justify-content: center;

  * {
    color: ${({ theme }) => theme.palette.white.default};
  }

  &.white {
    background-color: ${({ theme }) => theme.palette.white.default};
    font-family: ${({ theme }) => theme.fonts.serif};
    transition: .2s all ease-out;

    * {
      color: ${({ theme }) => theme.palette.black.default};
    }

    :hover {
      background-color: ${({ theme }) => theme.palette.pink.default};
      transform: scale(1.1);

      * {
        color: ${({ theme }) => theme.palette.white.default};
      }
    }
  }

`;

const Button = ({ height, className, children }) => {

  return (
    <Wrapper className={className} height={height}>
      <span>
        {children}
      </span>
    </Wrapper>
  );
};

Button.propTypes = {
  height: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.elementType.isRequired,
};

Button.defaultProps = {
  height: '4rem',
  className: '',
}

export default Button
