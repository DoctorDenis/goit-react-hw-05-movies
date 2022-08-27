import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { StyledNavLink, StyledNav } from './SharedLayout.styled';

export function SharedLayout() {
  return (
    <>
      <StyledNav>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/movies">Movies</StyledNavLink>
      </StyledNav>
      <Suspense fallback={<h2>Loading ... Please wait</h2>}>
        <Outlet />
      </Suspense>
    </>
  );
}
