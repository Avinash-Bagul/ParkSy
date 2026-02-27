import React, { useState } from "react";
import styled from "styled-components";

const Card = styled.div`
  background: #ffffff;
  border-radius: 14px;
  padding: 30px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
`;

const Title = styled.h2`
  font-weight: 700;
  margin-bottom: 5px;
`;

const Subtitle = styled.p`
  color: #6c757d;
  margin-bottom: 25px;
`;

const InfoBox = styled.div`
  background: #e9f2ff;
  border: 1px solid #bcd3ff;
  color: #3b5b9a;
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Input = styled.input`
  border-radius: 10px;
  padding: 12px;
  border: 1px solid #e0e0e0;
  background: #f5f6f7;

  &:focus {
    outline: none;
    border-color: #ff7a00;
    box-shadow: 0 0 0 2px rgba(255, 122, 0, 0.1);
  }
`;

const Select = styled.select`
  border-radius: 10px;
  padding: 12px;
  border: 1px solid #e0e0e0;
  background: #f5f6f7;

  &:focus {
    outline: none;
    border-color: #ff7a00;
    box-shadow: 0 0 0 2px rgba(255, 122, 0, 0.1);
  }
`;

const MapPreview = styled.div`
  border: 2px dashed #9ec5fe;
  background: #f8fbff;
  border-radius: 14px;
  height: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
  text-align: center;
  color: #6c757d;
`;

export default function Step2() {
  const [form, setForm] = useState({
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "United States",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container mt-4">
      <Card>

        <Title>Location</Title>
        <Subtitle>Where is your space?</Subtitle>

        <InfoBox>
          📍
          <span>
            Your exact address will only be shared with confirmed bookings.
            We'll show the general area to potential customers.
          </span>
        </InfoBox>

        {/* Street */}
        <div className="mb-4">
          <label className="form-label fw-semibold">
            Street Address *
          </label>

          <Input
            className="form-control"
            name="address"
            placeholder="123 Main Street"
            value={form.address}
            onChange={handleChange}
          />
        </div>

        {/* City + State */}
        <div className="row">
          <div className="col-md-6 mb-4">
            <label className="form-label fw-semibold">
              City *
            </label>

            <Input
              className="form-control"
              name="city"
              placeholder="San Francisco"
              value={form.city}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6 mb-4">
            <label className="form-label fw-semibold">
              State/Province *
            </label>

            <Input
              className="form-control"
              name="state"
              placeholder="California"
              value={form.state}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Zip + Country */}
        <div className="row">
          <div className="col-md-6 mb-4">
            <label className="form-label fw-semibold">
              ZIP/Postal Code *
            </label>

            <Input
              className="form-control"
              name="zip"
              placeholder="94102"
              value={form.zip}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6 mb-4">
            <label className="form-label fw-semibold">
              Country *
            </label>

            <Select
              className="form-control"
              name="country"
              value={form.country}
              onChange={handleChange}
            >
              <option>United States</option>
              <option>India</option>
              <option>Canada</option>
              <option>United Kingdom</option>
            </Select>
          </div>
        </div>

        {/* Map Preview */}
        <MapPreview>
          <div style={{ fontSize: 40 }}>📍</div>
          <h5 className="mt-2">Location Preview</h5>
          <div>Your location will be displayed on an interactive map here</div>
        </MapPreview>

      </Card>
    </div>
  );
}