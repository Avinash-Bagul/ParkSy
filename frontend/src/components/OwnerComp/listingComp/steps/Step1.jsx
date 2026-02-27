import React, { useRef, useState } from "react";
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

const TextArea = styled.textarea`
  border-radius: 10px;
  padding: 12px;
  border: 1px solid #e0e0e0;
  background: #f5f6f7;
  min-height: 150px;

  &:focus {
    outline: none;
    border-color: #ff7a00;
    box-shadow: 0 0 0 2px rgba(255, 122, 0, 0.1);
  }
`;

const HelperText = styled.small`
  color: #6c757d;
`;

const TypeCard = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 25px;
  text-align: center;
  cursor: pointer;
  transition: 0.2s;

  ${(props) =>
    props.active &&
    `
    border-color: #ff7a00;
    background: #fff7f0;
  `}

  &:hover {
    border-color: #ff7a00;
  }
`;


const InfoBox = styled.div`
  background: #f3e8ff;
  border: 1px solid #d8b4fe;
  color: #6b21a8;
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const UploadBox = styled.div`
  border: 2px dashed #ced4da;
  border-radius: 12px;
  height: 180px;
  width: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #6c757d;
  transition: 0.2s;

  &:hover {
    border-color: #ff7a00;
    background: #fff7f0;
  }
`;

const PreviewImage = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 12px;
  object-fit: cover;
`;

const TipsBox = styled.div`
  background: #fff8e1;
  border: 1px solid #ffe082;
  border-radius: 12px;
  padding: 20px;
  margin-top: 30px;
`;

export default function Step1() {
  const [spaceType, setSpaceType] = useState("");

  const fileRef = useRef();
  const [photos, setPhotos] = useState([]);

  const handleUploadClick = () => {
    fileRef.current.click();
  };

  const handleFiles = (e) => {
    const files = Array.from(e.target.files);

    const newPhotos = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setPhotos((prev) => [...prev, ...newPhotos]);
  };

  return (
    <div className="container mt-4">
      <Card>

        <Title>Basic Info</Title>
        <Subtitle>Tell us about your space</Subtitle>

        {/* Space Title */}
        <div className="mb-4">
          <label className="form-label fw-semibold">
            Space Title *
          </label>

          <Input
            className="form-control"
            placeholder="e.g., Downtown Secure Garage with EV Charging"
          />

          <HelperText>
            Create a catchy title that highlights your space
          </HelperText>
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="form-label fw-semibold">
            Description *
          </label>

          <TextArea
            className="form-control"
            placeholder="Describe your parking space in detail. Include nearby landmarks, access instructions, and any special features..."
          />

          <div className="text-muted mt-1">
            0/500 characters
          </div>
        </div>

        {/* Space Type */}
        <div className="mb-3">
          <label className="form-label fw-semibold">
            Space Type *
          </label>

          <div className="row g-3">

            <div className="col-md-4">
              <TypeCard
                active={spaceType === "garage"}
                onClick={() => setSpaceType("garage")}
              >
                <div style={{ fontSize: 30 }}>🏠</div>
                <div className="mt-2 fw-semibold">Garage</div>
              </TypeCard>
            </div>

            <div className="col-md-4">
              <TypeCard
                active={spaceType === "driveway"}
                onClick={() => setSpaceType("driveway")}
              >
                <div style={{ fontSize: 30 }}>🏡</div>
                <div className="mt-2 fw-semibold">Driveway</div>
              </TypeCard>
            </div>

            <div className="col-md-4">
              <TypeCard
                active={spaceType === "lot"}
                onClick={() => setSpaceType("lot")}
              >
                <div style={{ fontSize: 30 }}>🚗</div>
                <div className="mt-2 fw-semibold">Parking Lot</div>
              </TypeCard>
            </div>
            <div className="col-md-4">
              <TypeCard
                active={spaceType === "StreetParking"}
                onClick={() => setSpaceType("StreetParking")}
              >
                <div style={{ fontSize: 30 }}>📍</div>
                <div className="mt-2 fw-semibold">Street Parking</div>
              </TypeCard>
            </div>
            <div className="col-md-4">
              <TypeCard
                active={spaceType === "Covered parking"}
                onClick={() => setSpaceType("Covered parking")}
              >
                <div style={{ fontSize: 30 }}>☀️</div>
                <div className="mt-2 fw-semibold">Covered Parking</div>
              </TypeCard>
            </div>
            <div className="col-md-4">
              <TypeCard
                active={spaceType === "Underground"}
                onClick={() => setSpaceType("Underground")}
              >
                <div style={{ fontSize: 30 }}>🏠</div>
                <div className="mt-2 fw-semibold">Underground</div>
              </TypeCard>
            </div>

          </div>
        </div>

      </Card>

      <Card>

        <Title>Photos</Title>
        <Subtitle>Show your space</Subtitle>

        <InfoBox>
          📷
          <span>
            High-quality photos increase bookings by up to 40%.
            Show different angles and highlight key features.
          </span>
        </InfoBox>

        <label className="fw-semibold mb-3">
          Photos * (Minimum 3)
        </label>

        {/* Upload Section */}
        <div className="d-flex gap-3 flex-wrap">

          {/* Upload Button */}
          <UploadBox onClick={handleUploadClick}>
            <div style={{ fontSize: 30 }}>⬆️</div>
            <div>Upload Photo</div>
          </UploadBox>

          <input
            type="file"
            multiple
            ref={fileRef}
            style={{ display: "none" }}
            onChange={handleFiles}
            accept="image/*"
          />

          {/* Preview Images */}
          {photos.map((photo, index) => (
            <PreviewImage
              key={index}
              src={photo.preview}
              alt="preview"
            />
          ))}

        </div>

        {/* Tips Section */}
        <TipsBox>
          <h6 className="fw-semibold mb-3">⭐ Photo Tips</h6>

          <div>✓ Take photos in good lighting (daytime preferred)</div>
          <div>✓ Show the entrance and how to access the space</div>
          <div>✓ Capture multiple angles</div>
          <div>✓ Highlight security features if available</div>
        </TipsBox>

      </Card>

    </div>
  );
}