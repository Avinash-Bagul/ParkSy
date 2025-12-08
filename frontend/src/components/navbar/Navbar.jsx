import React from "react";
import { Link } from "react-router-dom";
import favicon from "../../assets/favicon.ico"
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


const Navbar = () => {
    return (
        <>

            <div className="container">
                <nav className="navbar w-100">
                    <div className="row w-100 justify-content-between">
                        <div className="col-6">
                            <div>
                                <img src={favicon} alt="" />
                                <Link to="/">ParkSy</Link>
                            </div>

                        </div>
                        <div className="col-5">
                            <ul className="d-flex justify-content-between align-items-center">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/how-it-works">How It Works</Link></li>
                                <li><Link to="/host">Become a Host</Link></li>
                                <li><Link to="/login">Login</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar;