import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import { FaGoogle, FaApple, div } from "react-icons/fa";

const LoginWrapper = styled.section`
  min-height: 90vh;
  /* background: linear-gradient(135deg, #f8fbff, #eef3ff); */
  display: flex;
  align-items: center;
`;

const LeftContent = styled.div`
  h1 {
    font-size: 3rem;
    font-weight: 700;
  }

  span {
    color: ${(props) => props.theme.colors.primary || "#2f5bff"};
  }

  p {
    max-width: 420px;
    color: #6b7280;
  }

  @media (max-width: 992px) {
    text-align: center;

    h1 {
      font-size: 2.2rem;
    }

    p {
      margin: auto;
    }
  }
`;

const Badge = styled.span`
  background: #e6efff;
  color: #2f5bff;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
`;

const LoginCard = styled.div`
  background: #ffffff;
  border-radius: 18px;
  padding: 35px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);

  h4 {
    font-weight: 600;
  }

  .social-btn {
    border: 1px solid #e5e7eb;
    border-radius: 10px;
    padding: 10px;
    background: #fff;
    font-weight: 500;
    transition: 0.3s;
    color: black;
    text-align: center;

    &:hover {
      background: #f9fafb;
    }
  }

  input {
    height: 48px;
    border-radius: 10px;
  }
`;

const PrimaryBtn = styled.button`
  background: linear-gradient(90deg, #2f5bff, #6a5cff);
  border: none;
  color: white;
  height: 48px;
  border-radius: 12px;
  font-weight: 600;
  transition: 0.3s;

  &:hover {
    opacity: 0.9;
  }
`;

const Login = () => {
    return (
        <LoginWrapper>
            <div className="container">
                <div className="row align-items-center gy-5">

                    {/* LEFT */}
                    <div className="col-lg-6 d-flex justify-content-center">
                        <LeftContent>
                            <Badge>• Join thousands of users</Badge>
                            <h1 className="mt-4">
                               Start Your Journey <br />
                                <span>to ParkSy</span>
                            </h1>
                            <p className="mt-3">
                                Create an account to start finding parking instantly or earning from your space.
                            </p>
                        </LeftContent>
                    </div>

                    {/* RIGHT */}
                    <div className="col-lg-6 d-flex justify-content-center">
                        <LoginCard className="w-100" style={{ maxWidth: "420px" }}>

                            <div className="text-center mb-4">
                                <h4>ParkSy</h4>
                            </div>

                            <div className="d-flex gap-3 mb-3">
                                <button className="social-btn w-50 d-flex justify-content-center align-items-center">
                                    <ion-icon name="logo-google" className="me-2 fs-4"></ion-icon>
                                </button>
                                <button className="social-btn w-50">
                                    <ion-icon name="logo-apple" className="me-2 fs-4"></ion-icon>
                                </button>
                            </div>

                            <div className="text-center text-muted mb-3">
                                or continue with email
                            </div>

                            <div className="mb-3">
                                <label>Full Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Your Name"
                                />
                            </div>

                            <div className="mb-3">
                                <label>Email Address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                />
                            </div>

                            <div className="mb-3 position-relative">
                                <label>Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Password"
                                />
                                <div
                                    style={{
                                        position: "absolute",
                                        right: "15px",
                                        top: "45px",
                                        color: "#9ca3af",
                                    }}
                                />
                            </div>


                            <PrimaryBtn className="w-100 mb-3">
                                Create Account
                            </PrimaryBtn>

                            <p className="text-center mb-0">
                                Already have an account? <Link to="/login">Login</Link>
                            </p>

                        </LoginCard>
                    </div>

                </div>
            </div>
        </LoginWrapper>
    );
};

export default Login;
