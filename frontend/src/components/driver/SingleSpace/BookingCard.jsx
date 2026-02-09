import { useState } from "react";
import styled from "styled-components";

const Card = styled.div`
  background: #fff;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
`;

const Header = styled.div`
  background: linear-gradient(135deg, #2563eb, #9333ea);
  color: #fff;
  padding: 22px;
  font-size: 26px;
  font-weight: 700;

  span {
    font-size: 16px;
    font-weight: 400;
    margin-left: 6px;
  }
`;

const Body = styled.div`
  padding: 22px;
`;

const SectionTitle = styled.p`
  font-weight: 600;
  margin-bottom: 10px;
`;

const DurationGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-bottom: 20px;
`;

const DurationBox = styled.div`
  border: 2px solid ${props => (props.active ? "#2563eb" : "#e5e7eb")};
  background: ${props => (props.active ? "#eff6ff" : "#fff")};
  border-radius: 12px;
  padding: 14px;
  text-align: center;
  cursor: pointer;

  h6 {
    margin: 0;
    font-weight: 600;
  }

  span {
    font-size: 14px;
    color: #6b7280;
  }
`;

const DateTimeGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-bottom: 22px;
`;

const Input = styled.input`
  border: 1.5px solid #e5e7eb;
  border-radius: 12px;
  padding: 14px;
  width: 100%;
  outline: none;

  &:focus {
    border-color: #2563eb;
  }
`;

const PriceBox = styled.div`
  background: #f9fafb;
  border-radius: 14px;
  padding: 16px;
  font-size: 15px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const Total = styled(Row)`
  font-weight: 700;
  font-size: 18px;
  color: #2563eb;
`;

const BookBtn = styled.button`
  background: linear-gradient(135deg, #2563eb, #9333ea);
  color: #fff;
  border: none;
  width: 100%;
  padding: 16px;
  border-radius: 14px;
  font-size: 18px;
  font-weight: 600;
  margin-top: 18px;
`;

const BookingCard = (props) => {
    console.log(props.space);
  const [duration, setDuration] = useState("hourly");

  const baseRate = duration === "hourly" ? props.space.price_per_hour : props.space?.price_per_day;
  const serviceFee = 2;

  return (
    <Card>
      {/* Header */}
      <Header>
        {baseRate} Rs <span>per {duration === "hourly" ? "hour" : "day"}</span>
      </Header>

      <Body>
        {/* Duration */}
        <SectionTitle>Select Duration</SectionTitle>
        <DurationGrid>
          <DurationBox
            active={duration === "hourly"}
            onClick={() => setDuration("hourly")}
          >
            <h6>Hourly</h6>
            <span> {props.space.price_per_hour} Rs</span>
          </DurationBox>

          <DurationBox
            active={duration === "daily"}
            onClick={() => setDuration("daily")}
          >
            <h6>Daily</h6>
            <span>{props.space?.price_per_day ? props.space?.price_per_day : "Not Available"}</span>
          </DurationBox>
        </DurationGrid>

        {/* Date & Time */}
        <SectionTitle>Start Date & Time</SectionTitle>
        <DateTimeGrid className="bg-light">
          <Input type="date" id="sdate" name="sdate" className="bg-light text-dark"/>
          <Input type="time" id="stime" name="stime" className="bg-light text-dark"/>
        </DateTimeGrid>

        <SectionTitle>End Date & Time</SectionTitle>
        <DateTimeGrid>
          <Input type="date" id="edate" name="edate" className="bg-light text-dark"/>
          <Input type="time" id="edate" name="etime" className="bg-light text-dark"/>
        </DateTimeGrid>

        {/* Pricing */}
        <PriceBox>
          <Row>
            <span>Base rate</span>
            <span>${baseRate}</span>
          </Row>
          <Row>
            <span>Service fee</span>
            <span>${serviceFee}</span>
          </Row>
          <hr />
          <Total>
            <span>Total</span>
            <span>${baseRate + serviceFee}</span>
          </Total>
        </PriceBox>

        {/* CTA */}
        <BookBtn>Book Now</BookBtn>

        <p className="text-center text-muted mt-3" style={{ fontSize: "13px" }}>
          Free cancellation up to 24 hours before arrival
        </p>
      </Body>
    </Card>
  );
};

export default BookingCard;
