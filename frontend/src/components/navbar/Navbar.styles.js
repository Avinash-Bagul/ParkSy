import styled from "styled-components";

export const NavbarContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: ${(props) => props.theme.spacing(2)};
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
`;

export const Logo = styled.h1`
  font-size: 1.5rem;
`;

export const NavLink = styled.a`
  margin-left: ${(props) => props.theme.spacing(2)};
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
