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
  background: #e6f4ea;
  border: 1px solid #a5d6a7;
  color: #2e7d32;
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const RateCard = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 16px;
  padding: 20px;
  height: 100%;
`;

const IconBox = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
  background: ${(props) => props.bg};
`;

const InputWrapper = styled.div`
  background: #f1f3f5;
  border-radius: 10px;
  padding: 10px 12px;
  display: flex;
  align-items: center;
  margin-top: 15px;
`;

const PriceInput = styled.input`
  border: none;
  background: transparent;
  color: black;
  width: 100%;
  outline: none;
  font-size: 16px;
`;

const Badge = styled.div`
  display: inline-block;
  background: ${(props) => props.bg};
  color: ${(props) => props.color};
  border-radius: 8px;
  padding: 5px 10px;
  font-size: 12px;
  margin-top: 10px;
`;

export default function Step3() {
  const [pricing, setPricing] = useState({
    hourly: 5,
    daily: 35,
    weekly: 200,
    monthly: 600,
  });

  const handleChange = (type, value) => {
    setPricing({
      ...pricing,
      [type]: value,
    });
  };

  return (
    <div className="container mt-4">
      <Card>

        <Title>Pricing</Title>
        <Subtitle>Set your rates</Subtitle>

        <InfoBox>
          💲
          <span>
            Set competitive rates to attract more customers.
            You can always adjust pricing later.
          </span>
        </InfoBox>

        <div className="row g-4">

          {/* Hourly */}
          <div className="col-md-6">
            <RateCard>

              <div className="d-flex align-items-center gap-3">
                <IconBox bg="linear-gradient(135deg,#3b82f6,#06b6d4)">
                  ⏱
                </IconBox>

                <div>
                  <h5 className="mb-0">Hourly Rate</h5>
                  <small className="text-muted">Short-term parking</small>
                </div>
              </div>

              <InputWrapper>
                <span>$</span>
                <PriceInput
                  type="number"
                  value={pricing.hourly}
                  onChange={(e) =>
                    handleChange("hourly", e.target.value)
                  }
                />
                <span>/hour</span>
              </InputWrapper>

            </RateCard>
          </div>

          {/* Daily */}
          <div className="col-md-6">
            <RateCard>

              <div className="d-flex align-items-center gap-3">
                <IconBox bg="linear-gradient(135deg,#22c55e,#16a34a)">
                  📅
                </IconBox>

                <div>
                  <h5 className="mb-0">Daily Rate</h5>
                  <small className="text-muted">24-hour parking</small>
                </div>
              </div>

              <InputWrapper>
                <span>$</span>
                <PriceInput
                  type="number"
                  value={pricing.daily}
                  onChange={(e) =>
                    handleChange("daily", e.target.value)
                  }
                />
                <span>/day</span>
              </InputWrapper>

            </RateCard>
          </div>

          {/* Weekly */}
          <div className="col-md-6">
            <RateCard>

              <div className="d-flex align-items-center gap-3">
                <IconBox bg="linear-gradient(135deg,#a855f7,#ec4899)">
                  📆
                </IconBox>

                <div>
                  <h5 className="mb-0">Weekly Rate</h5>
                  <small className="text-muted">7-day parking</small>
                </div>
              </div>

              <InputWrapper>
                <span>$</span>
                <PriceInput
                  type="number"
                  value={pricing.weekly}
                  onChange={(e) =>
                    handleChange("weekly", e.target.value)
                  }
                />
                <span>/week</span>
              </InputWrapper>

              <Badge bg="#f3e8ff" color="#7c3aed">
                Save 43%
              </Badge>

            </RateCard>
          </div>

          {/* Monthly */}
          <div className="col-md-6">
            <RateCard>

              <div className="d-flex align-items-center gap-3">
                <IconBox bg="linear-gradient(135deg,#f97316,#ef4444)">
                  🗓
                </IconBox>

                <div>
                  <h5 className="mb-0">Monthly Rate</h5>
                  <small className="text-muted">30-day parking</small>
                </div>
              </div>

              <InputWrapper>
                <span>$</span>
                <PriceInput
                  type="number"
                  value={pricing.monthly}
                  onChange={(e) =>
                    handleChange("monthly", e.target.value)
                  }
                />
                <span>/month</span>
              </InputWrapper>

              <Badge bg="#fff3e0" color="#ea580c">
                Save 60%
              </Badge>

            </RateCard>
          </div>

        </div>

      </Card>
    </div>
  );
}