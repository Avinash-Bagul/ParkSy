import React from "react";
import { Link } from "react-router-dom";
import favicon from "../../assets/favicon.ico"
import { NavbarContainer, Logo, NavLink } from "./Navbar.styles";

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