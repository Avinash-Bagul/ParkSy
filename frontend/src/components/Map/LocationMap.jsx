import "leaflet/dist/leaflet.css";


import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const defaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = defaultIcon;



import { MapContainer, TileLayer, Marker } from "react-leaflet";
import styled from "styled-components";

const Card = styled.div`
  background: #fff;
  border-radius: 18px;
  overflow: hidden;
  /* box-shadow: 0 8px 28px rgba(0, 0, 0, 0.06); */
`;

const Header = styled.div`
  padding: 20px;
  border-bottom: 1px solid #e5e7eb;

  h5 {
    margin: 0;
    font-weight: 700;
  }

  p {
    margin: 6px 0 0;
    color: #6b7280;
    font-size: 14px;
  }
`;

const MapWrapper = styled.div`
  height: 320px;
  position: relative;
`;

const DirectionsBtn = styled.a`
  position: absolute;
  top: 16px;
  right: 16px;
  background: #fff;
  padding: 10px 14px;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
  font-weight: 600;
  text-decoration: none;
  color: #111827;
  display: flex;
  gap: 6px;
  align-items: center;
  z-index: 9999999;
  &:hover {
    background: #f3f4f6;
  }
`;

const LocationMap = ({ lat, lng, address }) => {
  return (
    <Card>
      {/* Header */}
      <Header>
        <h5>Location</h5>
        <p>{address}</p>
      </Header>

      {/* Map */}
      <MapWrapper>
        <MapContainer
          center={[lat, lng]}
          zoom={15}
          scrollWheelZoom={false}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[lat, lng]} />
        </MapContainer>

        {/* Directions */}
        <DirectionsBtn
          href={`https://www.openstreetmap.org/directions?to=${lat},${lng}`}
          target="_blank"
        >
          <ion-icon name="navigate-outline"></ion-icon> Get Directions
        </DirectionsBtn>
      </MapWrapper>
    </Card>
  );
};

export default LocationMap;
