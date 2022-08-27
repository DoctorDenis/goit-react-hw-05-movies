import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNav = styled.nav`
  background-color: #818080;
  display: flex;
  justify-content: center;
  align-items: center;
  color: darkgray;
`;

export const StyledNavLink = styled(NavLink)`
  padding: 1rem 2rem;
  text-decoration: none;
  box-shadow: 0px 0px 5px black;
  margin: 1rem;
  border: 1px solid black;
  text-shadow: 0px 0px 5px black;
  &:is(:visited) {
    color: white;
  }
  &.active {
    background-color: lightgrey;
    color: black;
    text-shadow: 0px 0px 2px black;
    box-shadow: inset 0px 0px 5px black;
  }
  /* &:is(:visited, :hover, :focus, :active) {
    color: white;
  } */
`;
