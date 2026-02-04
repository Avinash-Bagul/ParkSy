import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  background: #fff;
`;

const CardHeader = styled.div`
  background: linear-gradient(90deg, #3b82f6, #9333ea);
  color: white;
  padding: 18px 20px;
`;

const LiveBadge = styled.span`
  background: rgba(255,255,255,0.85);
  color: #333;
  font-size: 12px;
  padding: 4px 10px;
  border-radius: 20px;
  font-weight: 500;
`;

const Orangebtn = styled.header`
    background-color: ${(props) => props.theme.colors.light_orange};;
    color: white;
    
`

const InfoBox = styled.div`
  background: #f8f9fa;
  border-radius: 12px;
  padding: 15px;
`;

const CostText = styled.span`
  color: #2563eb;
  font-weight: 600;
  font-size: 20px;
`;

const EndBtn = styled.button`
  background: ${(props) => props.theme.colors.orange};
  color: white;
  border: none;
  padding: 12px;
  border-radius: 10px;
  width: 100%;
  font-weight: 500;

  &:hover {
    background: #b91c1c;
  }
`;

const ActiveBooking = () => {
    return (
        <Card>

            {/* Header */}
            <CardHeader className="d-flex justify-content-between align-items-start">
                <div>
                    <h5 className="mb-1">Active Booking</h5>
                    <small>Currently parked</small>
                </div>

                <LiveBadge>Live</LiveBadge>
            </CardHeader>

            {/* Body */}
            <div className="p-3 p-md-4">

                {/* Location */}
                <div className="mb-4">
                    <small className="text-muted">Location</small>
                    <h6 className="mb-1 mt-1">Downtown Garage</h6>
                    <small className="text-muted">123 Main St</small>
                </div>

                {/* Spot + Duration */}
                <div className="row mb-4">
                    <div className="col-6">
                        <small className="text-muted">Spot Number</small>
                        <h5 className="mt-1">A-23</h5>
                    </div>

                    <div className="col-6">
                        <small className="text-muted">Duration</small>
                        <h5 className="mt-1">3 hours</h5>
                    </div>
                </div>

                {/* Time Info */}
                <InfoBox className="mb-4">
                    <div className="d-flex justify-content-between mb-2">
                        <span className="text-muted">Start Time</span>
                        <span>2:30 PM</span>
                    </div>

                    <div className="d-flex justify-content-between mb-2">
                        <span className="text-muted">End Time</span>
                        <span>5:30 PM</span>
                    </div>

                    <hr />

                    <div className="d-flex justify-content-between">
                        <span className="text-muted">Total Cost</span>
                        <CostText>$15</CostText>
                    </div>
                </InfoBox>

                {/* Buttons */}
                <div className="d-flex gap-2 mb-3">
                    <button className="btn btn-outline-secondary w-50 d-flex align-items-center justify-content-center gap-2">
                        <ion-icon name="navigate-outline"></ion-icon>
                        Navigate
                    </button>

                    <div className="btn btn-primary w-50">
                        Extend Time
                    </div>
                </div>

                <EndBtn>
                    End Booking
                </EndBtn>

            </div>
        </Card>
    );
};

export default ActiveBooking;
