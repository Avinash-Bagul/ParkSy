import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import favicon from "../../assets/favicon.ico";

const NavWrapper = styled.header`
  /* background: ${(props) => props.theme.colors.navyBlue}; */
  background: transparent;
  padding: 12px 0;
  box-shadow: 0 1px 20px rgba(0, 0, 0, 0.18);
`;

const LogoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    width: 32px;
  }

  a {
    font-size: 1.4rem;
    font-weight: 600;
    color: ${(props) => props.theme.colors.orange};;
    text-decoration: none;
  }
`;

const NavLinks = styled.ul`
  list-style: none;
  gap: 30px;

  li a {
    /* color: white; */
    text-decoration: none;
    font-weight: 500;

    &:hover {
      color: ${(props) => props.theme.colors.orange};
    }
  }
`;

const MobileMenu = styled.div`
  background: ${(props) => props.theme.colors.primary};
  padding: 20px;

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 15px;

      a {
        color: white;
        text-decoration: none;
        font-size: 1.1rem;
      }
    }
  }
`;

const Hamburger = styled.div`
  font-size: 1.8rem;
  color: white;
  cursor: pointer;
`;

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <NavWrapper>
        <div className="container">
          <div className="row align-items-center justify-content-between">
            {/* Logo */}
            <div className="col-6 col-md-3">
              <LogoBox>
                <img src={favicon} alt="logo" />
                <Link to="/">ParkSy</Link>
              </LogoBox>
            </div>

            {/* Desktop Menu */}
            <div className="col-md-7 d-none d-md-flex justify-content-end">
              <NavLinks className="d-flex align-items-center m-0">
                <li><Link to="/">Home</Link></li>
                <li><Link to="#Hiw">How It Works</Link></li>
                <li><Link to="/host">Become a Host</Link></li>
                <li><Link to="/login">Login</Link></li>
              </NavLinks>
            </div>

            {/* Mobile Hamburger */}
            <div className="col-6 d-md-none text-end">
              <Hamburger onClick={() => setOpen(!open)}>
                ☰
              </Hamburger>
            </div>
          </div>
        </div>
      </NavWrapper>

      {/* Mobile Menu */}
      {open && (
        <MobileMenu className="d-md-none">
          <ul>
            <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
            <li><Link to="#Hiw" onClick={() => setOpen(false)}>How It Works</Link></li>
            <li><Link to="/host" onClick={() => setOpen(false)}>Become a Host</Link></li>
            <li><Link to="/login" onClick={() => setOpen(false)}>Login</Link></li>
          </ul>
        </MobileMenu>
      )}
    </>
  );
};

export default Navbar;
