import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Wrapper = styled.nav`
`;

const NavLinks = styled.ul`
  display: flex;
  flex-flow: row;
  list-style-type: none;

  > li {
    margin-left: 4rem;

    :hover {
      text-decoration: none;
    }
  }
`;

const Link = styled(NavLink)`
  cursor: pointer;
  color: ${({ theme }) => theme.palette.white.default};

  a {
    text-decoration: none;
  }

  span {
    transition: .2s all ease-out;
    text-decoration: none;

    :hover {
      transform: scale(1.1);
    }
  }


  &.nav__active {
    transform: none;
    pointer-events: none;

    span {
      color: ${({ theme }) => theme.palette.pink.default};

      :hover {
        color: ${({ theme }) => theme.palette.pink.focus};
      }
    }
  }
`;

const Nav = ({ navItems }) => {
  const navItemsExceptHome = navItems.filter(item => item.path !== '/');
  const navButtons = navItemsExceptHome.map((navItem) => (
    <li key={navItem.name}>
      <Link
        to={navItem.path}
        activeClassName="nav__active"
        isActive={(match, location) => {
          if (!match) {
            return false;
          }
          const { pathname } = location;
          return pathname === navItem.path;
        }}
      >
        <span>{navItem.name}</span>
      </Link>
    </li>
  ));

  return (
    <Wrapper>
      <NavLinks>
        {navButtons}
      </NavLinks>
    </Wrapper>
  );
};

export default Nav
