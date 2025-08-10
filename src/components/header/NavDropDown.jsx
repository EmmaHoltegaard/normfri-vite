import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useUI } from "../../state/ui-context";

export const NavDropDown = () => {
  const { toggleMenu } = useUI();

  const handleNavLinkClick = () => {
    toggleMenu(); // or closeMenu() if you always want it closed after click
  };

  return (
    <NavOptions>
      <div><StyledNavLink to="/" onClick={handleNavLinkClick}>Forside</StyledNavLink></div>
      <div><StyledNavLink to="/ydelser" onClick={handleNavLinkClick}>Jeg tilbyder</StyledNavLink></div>
      <div><StyledNavLink to="/praktiskInfo" onClick={handleNavLinkClick}>Praktisk info</StyledNavLink></div>
      <div><StyledNavLink to="/minTilgang" onClick={handleNavLinkClick}>Min tilgang</StyledNavLink></div>
      <div><StyledNavLink to="/kontakt" onClick={handleNavLinkClick}>Kontakt mig</StyledNavLink></div>
      <div><StyledNavLink to="/english" onClick={handleNavLinkClick}>In English</StyledNavLink></div>
    </NavOptions>
  );
};

// your styled-components from before...
const NavOptions = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;
  text-align: center;
  animation: fadeIn 0.5s;
  transform-origin: top center;
  @media (min-width: 1024px) { display: none; }
  @keyframes fadeIn { 0%{opacity:0} 100%{opacity:1} }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-family: "M PLUS Rounded 1c","Courier Prime","Courier New",monospace;
  font-weight: 700;
  color: var(--purple);
  font-size: 1.125rem;
  letter-spacing: 1.3px;
  background: var(--transparentWhite);
  padding: 0.8em;
  width: 100vw;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  &.active { text-decoration: underline; background-color: var(--transparentPurple); }
  &:hover { background-color: var(--lightPurple); }
  @media (min-width: 1024px) { display: none; }
`;