import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import loginSchema from "../features/auth/validation/LoginSchema";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "../store/features/authSlice.js";
import { useEffect } from "react";

const API = import.meta.env.VITE_API;

const LoginWrapper = styled.section`
  min-height: 93vh;
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


const loginValues = {
  email: "",
  password: ""
}

const Login = () => {

  const navigate = useNavigate();

  //redux 
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik(
    {
      initialValues: loginValues,
      validationSchema: loginSchema,
      onSubmit: async (values) => {
        // console.log(values);
        // console.log(`${API}/api/auth/login`);
        try {
          
          const res = await axios.put(`${API}/api/auth/login`, values,  { withCredentials: true });
          console.log(res);

          localStorage.setItem("token", res.data.token);

          dispatch(
            loginSuccess({
              user: res.data.user,
              token: res.data.token
            })
          );


          navigate('/')
        } catch (error) {
          console.log(error);
        }
      }
    }
  );

  useEffect(() => {
  console.log("Updated User:", user);
}, [user]);


  return (
    <LoginWrapper>
      <div className="container">
        <div className="row align-items-center gy-5">

          {/* LEFT */}
          <div className="col-lg-6 d-flex justify-content-center">
            <LeftContent>
              <Badge>• Join thousands of users</Badge>
              <h1 className="mt-4">
                Welcome Back <br />
                <span>to ParkSy</span>
              </h1>
              <p className="mt-3">
                Sign in to access your account and manage your parking
                spaces or bookings.
              </p>
            </LeftContent>
          </div>

          {/* RIGHT */}
          <form className="col-lg-6 d-flex justify-content-center" onSubmit={handleSubmit}>
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
                <label>Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  value={values.email}

                />
              </div>
              <p>{errors.email}</p>

              <div className="mb-3 position-relative">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  id="password"
                  name="password"
                  onChange={handleChange}
                  value={values.password}

                />
                <p>{errors.password}</p>
                <div
                  style={{
                    position: "absolute",
                    right: "15px",
                    top: "45px",
                    color: "#9ca3af",
                  }}
                />
              </div>

              <div className="d-flex justify-content-between align-items-center mb-4">
                <div className="d-flex justify-content-center align-items-center">
                  <input type="checkbox" className="me-2" />
                  Remember me
                </div>
                <Link to="/forgot-password">Forgot password?</Link>
              </div>

              <PrimaryBtn className="w-100 mb-3" type="submit">
                Sign In
              </PrimaryBtn>

              <p className="text-center mb-0">
                Don’t have an account? <Link to="/signup">Sign Up</Link>
              </p>

            </LoginCard>
          </form>

        </div>
      </div>
    </LoginWrapper>
  );
};

export default Login;
