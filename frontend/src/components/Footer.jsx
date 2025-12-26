import React from "react";
import styled from "styled-components";

export const FooterStyle = styled.footer`
  background: ${(props) => props.theme.colors.gradiant};
  color: ${(props) => props.theme.colors.white};
  padding: 60px 0 20px;

  h5 {
    font-weight: 600;
    margin-bottom: 20px;
  }

  p,
  a {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
  }

  a:hover {
    color: #fff;
    transform: translateX(4px);
    transition: all 0.3s ease;
  }

  .social-icons a {
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.15);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 12px;
    transition: all 0.3s ease;
  }

  .social-icons a:hover {
    background: #fff;
    color: #ff7a00;
    transform: translateY(-5px);
  }

  .bottom-bar {
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    margin-top: 40px;
    padding-top: 15px;
    text-align: center;
    font-size: 13px;
    opacity: 0.8;
  }
`;


const Footer = () => {
    return (
        <>
            <FooterStyle>
                <div className="container">
                    <div className="row gy-4">

                        {/* Logo & Description */}
                        <div className="col-lg-4 col-md-6">
                            <h5>ParkSy</h5>
                            <p>
                                Smart parking made simple. Find, book, and park faster while
                                saving time and money.
                            </p>
                            <div className="social-icons d-flex mt-3">
                                <a href="#"><i className="bi bi-facebook"></i></a>
                                <a href="#"><i className="bi bi-twitter"></i></a>
                                <a href="#"><i className="bi bi-instagram"></i></a>
                                <a href="#"><i className="bi bi-linkedin"></i></a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="col-lg-2 col-md-6">
                            <h5>Quick Links</h5>
                            <ul className="list-unstyled">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Find Parking</a></li>
                                <li><a href="#">How it Works</a></li>
                                <li><a href="#">Pricing</a></li>
                            </ul>
                        </div>

                        {/* Support */}
                        <div className="col-lg-3 col-md-6">
                            <h5>Support</h5>
                            <ul className="list-unstyled">
                                <li><a href="#">Help Center</a></li>
                                <li><a href="#">Terms & Conditions</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className="col-lg-3 col-md-6">
                            <h5>Contact</h5>
                            <p>Email: support@parksy.com</p>
                            <p>Phone: +91 98765 43210</p>
                            <p>Location: India</p>
                        </div>
                    </div>

                    <div className="bottom-bar">
                        © {new Date().getFullYear()} ParkSy. All rights reserved.
                    </div>
                </div>
            </FooterStyle>


        </>
    )
}

export default Footer;