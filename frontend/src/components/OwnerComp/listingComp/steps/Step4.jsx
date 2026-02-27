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

const SelectBox = styled.select`
  background: #f1f3f5;
  border: none;
  border-radius: 10px;
  padding: 12px;
  width: 100%;
  margin-bottom: 20px;
`;

const DateRangeCard = styled.div`
  background: #eef4ff;
  border: 1px solid #b6ccff;
  border-radius: 14px;
  padding: 20px;
  margin-bottom: 25px;
`;

const InputWrapper = styled.div`
  background: #f1f3f5;
  border-radius: 10px;
  padding: 10px 12px;
  display: flex;
  align-items: center;
`;

const DateInput = styled.input`
  border: none;
  background: transparent;
  width: 100%;
  outline: none;
`;

const CalendarPreview = styled.div`
  border: 2px dashed #c084fc;
  border-radius: 16px;
  padding: 40px;
  text-align: center;
  background: #faf5ff;
`;

const Icon = styled.div`
  font-size: 40px;
  color: #9333ea;
  margin-bottom: 10px;
`;

export default function Step4() {
  const [availabilityType, setAvailabilityType] = useState("specific");
  const [dates, setDates] = useState({
    start: "",
    end: "",
  });

  const handleChange = (field, value) => {
    setDates({
      ...dates,
      [field]: value,
    });
  };

  return (
    <div className="container mt-4">
      <Card>

        <Title>Availability</Title>
        <Subtitle>When is it available?</Subtitle>

        <div className="mb-3">
          <label className="form-label fw-semibold">
            When is your space available?
          </label>

          <SelectBox
            value={availabilityType}
            onChange={(e) => setAvailabilityType(e.target.value)}
          >
            <option value="specific">Specific Dates</option>
            <option value="always">Always Available</option>
            <option value="custom">Custom Schedule</option>
          </SelectBox>
        </div>

        {/* Date Range */}
        <DateRangeCard>

          <h5 className="mb-4">Date Range</h5>

          <div className="row g-3">

            <div className="col-md-6">
              <label className="form-label">Start Date</label>

              <InputWrapper>
                <DateInput
                  type="date"
                  value={dates.start}
                  onChange={(e) =>
                    handleChange("start", e.target.value)
                  }
                />
              </InputWrapper>
            </div>

            <div className="col-md-6">
              <label className="form-label">End Date</label>

              <InputWrapper>
                <DateInput
                  type="date"
                  value={dates.end}
                  onChange={(e) =>
                    handleChange("end", e.target.value)
                  }
                />
              </InputWrapper>
            </div>

          </div>

        </DateRangeCard>

        {/* Calendar Preview */}
        <CalendarPreview>

          <Icon>📅</Icon>

          <h5>Availability Calendar</h5>

          <p className="text-muted mb-0">
            Your availability schedule will be displayed here
          </p>

        </CalendarPreview>

      </Card>
    </div>
  );
}