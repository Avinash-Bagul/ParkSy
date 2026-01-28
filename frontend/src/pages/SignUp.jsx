import React, { use, useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import signUpSchema from "../features/auth/validation/signUpSchema";
import axios from "axios";

const API = import.meta.env.VITE_API;

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

const signUpValues = {
  name: "",
  email: "",
  phone_number: "",
  password: "",
  role: "driver"
}

const SignUp = () => {
  const navigate = useNavigate();
  const { values, errors, handleSubmit, handleChange } = useFormik({

    initialValues: signUpValues,
    validationSchema: signUpSchema,
    onSubmit: async (values) => {
      console.log(values);
      try {
        const res = await axios.post(`${API}/api/auth/register`, values,  { withCredentials: true });
        console.log(res);
        navigate('/')
      } catch (error) {
        console.log(error);
      }
    }

  })


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
          <form className="col-lg-6 d-flex justify-content-center" onSubmit={handleSubmit}>
            <LoginCard className="w-100" style={{ maxWidth: "420px" }}>

              <div className="text-center mb-4">
                <h4>ParkSy</h4>
              </div>


              <div className="mb-3">
                <label>Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                  id="name"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                />
              </div>
              <p>{errors.name}</p>


              <div className="mb-3">
                <label>Phone Number</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone No"
                  id="phone_number"
                  name="phone_number"
                  value={values.phone_number}
                  onChange={handleChange}
                />
              </div>
              <p>{errors.phone_number}</p>

              <div className="mb-3">
                <label>Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  id="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                />
              </div>
              <p>{errors.email}</p>

              <div className="mb-3 position-relative">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  autoComplete="off"
                  id="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
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
              <p>{errors.password}</p>
              <div className="d-flex align-items-center">
                <input type="checkbox" name="role" id="role" value={values.role} onChange={(e) =>
                  handleChange({
                    target: {
                      name: "role",
                      value: e.target.checked ? "owner" : "driver"
                    }
                  })} />
                <label htmlFor="role" className="ms-2">Login as Owner</label>
              </div>


              <PrimaryBtn className="w-100 mb-3" type="submit" onClick={handleSubmit}>
                Create Account
              </PrimaryBtn>

              <p className="text-center mb-0">
                Already have an account? <Link to="/login">Login</Link>
              </p>

            </LoginCard>
          </form>

        </div>
      </div>
    </LoginWrapper>
  );
};

export default SignUp;
