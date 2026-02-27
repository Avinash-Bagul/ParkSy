import React, { useState } from "react";
import styled from "styled-components";

const PageWrapper = styled.div`
  background: #f8f9fa;
  min-height: 100vh;
  padding: 30px 0;
`;

const Card = styled.div`
  background: white;
  border-radius: 16px;
  padding: 25px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
`;

const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #e9ecef;
`;

const Button = styled.button`
  border: none;
  padding: 10px 18px;
  border-radius: 10px;
  font-weight: 600;
  background: #6f42c1;
  color: white;

  &:hover {
    background: #5a32a3;
  }
`;

export default function Profile() {
  const [user, setUser] = useState({
    name: "Raj Patil",
    email: "raj@email.com",
    phone: "+91 9876543210",
    city: "Mumbai",
    bio: "Parking space owner. Love helping people find easy parking.",
    avatar:
      "https://cdn-icons-png.flaticon.com/512/149/149071.png",
  });

  const handleChange = (field, value) => {
    setUser({ ...user, [field]: value });
  };

  return (
    <PageWrapper>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <Card>
              <div className="text-center mb-4">
                <Avatar src={user.avatar} />
                <h3 className="mt-3 mb-0">{user.name}</h3>
                <p className="text-muted">{user.email}</p>
              </div>

              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Full Name</label>
                  <input
                    className="form-control"
                    value={user.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Email</label>
                  <input
                    className="form-control"
                    value={user.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Phone</label>
                  <input
                    className="form-control"
                    value={user.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">City</label>
                  <input
                    className="form-control"
                    value={user.city}
                    onChange={(e) => handleChange("city", e.target.value)}
                  />
                </div>

                <div className="col-12">
                  <label className="form-label">Bio</label>
                  <textarea
                    className="form-control"
                    rows="3"
                    value={user.bio}
                    onChange={(e) => handleChange("bio", e.target.value)}
                  />
                </div>
              </div>

              <div className="text-end mt-4">
                <Button>Save Profile</Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
