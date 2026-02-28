import React, { useEffect, useRef, useState, useCallback } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled, { keyframes, createGlobalStyle } from "styled-components";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// ─── Animations ───────────────────────────────────────────────────────────────
const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

// ─── Global ───────────────────────────────────────────────────────────────────
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=DM+Mono:wght@400;500&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }
  .leaflet-container { font-family: 'DM Sans', sans-serif; }
  .leaflet-routing-container { display: none !important; }
`;

// ─── Full-screen map ──────────────────────────────────────────────────────────
const MapFull = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

const MapEl = styled.div`
  width: 100%;
  height: 100%;
`;

// ─── Floating Back Button ─────────────────────────────────────────────────────
const BackBtn = styled.button`
  position: absolute;
  top: 16px;
  left: 16px;
  z-index: 800;
  display: flex;
  align-items: center;
  gap: 6px;
  background: #fff;
  border: none;
  border-radius: 10px;
  padding: 9px 14px;
  font-size: 0.82rem;
  font-weight: 600;
  color: #444;
  cursor: pointer;
  box-shadow: 0 2px 12px rgba(0,0,0,0.12);
  font-family: 'DM Sans', sans-serif;
  transition: background 0.2s, color 0.2s;
  animation: ${fadeUp} 0.3s ease both;

  &:hover { background: #f97316; color: #fff; }
  svg { width: 13px; height: 13px; stroke: currentColor; fill: none; stroke-width: 2.5; }
`;

// ─── Floating Info Card (top-right) ──────────────────────────────────────────
const InfoCard = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 800;
  background: #fff;
  border-radius: 14px;
  padding: 14px 16px;
  min-width: 200px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.13);
  animation: ${fadeUp} 0.3s ease both;
  font-family: 'DM Sans', sans-serif;
`;

const SpaceName = styled.div`
  font-size: 0.88rem;
  font-weight: 700;
  color: #111;
  margin-bottom: 10px;
`;

const RouteRow = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  margin-bottom: ${(p) => (p.$gap ? "2px" : "0")};
`;

const RouteDot = styled.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${(p) => (p.$dest ? "#f97316" : "#16a34a")};
  flex-shrink: 0;
  box-shadow: 0 0 0 2px ${(p) => (p.$dest ? "#fff5ed" : "#f0fdf4")};
`;

const RouteStem = styled.div`
  width: 1.5px;
  height: 10px;
  background: repeating-linear-gradient(
    to bottom, #ddd 0, #ddd 3px, transparent 3px, transparent 6px
  );
  margin-left: 2.5px;
`;

const RouteLabel = styled.span`
  font-size: 0.74rem;
  color: #999;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 180px;
`;

const Divider = styled.div`
  height: 1px;
  background: #f0f0f0;
  margin: 10px 0;
`;

const SummaryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
`;

const SummaryItem = styled.div`
  .label {
    font-size: 0.62rem;
    font-weight: 600;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    color: #ccc;
    margin-bottom: 2px;
  }
  .value {
    font-size: 0.9rem;
    font-weight: 700;
    color: #111;
    font-family: 'DM Mono', monospace;
  }
`;

// ─── Floating Loading / Error ─────────────────────────────────────────────────
const FloatState = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 800;
  background: #fff;
  border-radius: 14px;
  padding: 20px 24px;
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.88rem;
  color: #555;
  font-family: 'DM Sans', sans-serif;
  box-shadow: 0 4px 24px rgba(0,0,0,0.13);
  animation: ${fadeUp} 0.25s ease both;
`;

const Spinner = styled.div`
  width: 20px;
  height: 20px;
  border: 2.5px solid #f0f0f0;
  border-top-color: #f97316;
  border-radius: 50%;
  animation: ${spin} 0.7s linear infinite;
  flex-shrink: 0;
`;

const ErrorFloat = styled(FloatState)`
  color: #991b1b;
  background: #fff5f5;
  border: 1px solid #fecaca;
  max-width: 320px;
  text-align: center;
  flex-direction: column;
  gap: 6px;
  font-size: 0.83rem;
`;

// ─── Helpers ──────────────────────────────────────────────────────────────────
const fmtDist = (m) =>
    m >= 1000 ? `${(m / 1000).toFixed(1)} km` : `${Math.round(m)} m`;

const fmtDuration = (s) => {
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    return h > 0 ? `${h}h ${m}m` : `${m} min`;
};

const coordLabel = (coords) =>
    coords ? `${coords.lat.toFixed(4)}, ${coords.lng.toFixed(4)}` : "—";

// ─── Custom Markers ───────────────────────────────────────────────────────────
const makeMarker = (color, label) =>
    L.divIcon({
        className: "",
        html: `<div style="
      width:34px;height:34px;border-radius:50% 50% 50% 0;
      background:${color};border:3px solid #fff;
      box-shadow:0 3px 12px rgba(0,0,0,0.25);
      transform:rotate(-45deg);display:flex;
      align-items:center;justify-content:center;
    "><span style="transform:rotate(45deg);color:#fff;font-weight:700;font-size:11px;font-family:DM Sans,sans-serif">${label}</span></div>`,
        iconSize: [34, 34],
        iconAnchor: [17, 34],
    });

// ─── OSRM Fetch ───────────────────────────────────────────────────────────────
const fetchRoute = async (from, to) => {
    const url = `https://router.project-osrm.org/route/v1/driving/${from.lng},${from.lat};${to.lng},${to.lat}?overview=full&geometries=geojson&steps=true`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("Routing service unavailable.");
    const data = await res.json();
    if (data.code !== "Ok") throw new Error(data.message ?? "No route found.");
    return data.routes[0];
};

// ─── Component ────────────────────────────────────────────────────────────────
const DirectionPage = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const fromLat = parseFloat(searchParams.get("fromLat"));
    const fromLng = parseFloat(searchParams.get("fromLng"));
    const toLat = parseFloat(searchParams.get("toLat"));
    const toLng = parseFloat(searchParams.get("toLng"));
    const spaceName = searchParams.get("spaceName") ?? "Space";
    const spaceAddress = searchParams.get("address") ?? "";

    const fromCoords = !isNaN(fromLat) && !isNaN(fromLng) ? { lat: fromLat, lng: fromLng } : null;
    const destCoords = !isNaN(toLat) && !isNaN(toLng) ? { lat: toLat, lng: toLng } : null;

    const mapRef = useRef(null);
    const mapInstanceRef = useRef(null);
    const routeLayerRef = useRef(null);
    const markersRef = useRef([]);

    const [route, setRoute] = useState(null);
    const [routeLoading, setRouteLoading] = useState(false);
    const [error, setError] = useState(null);

    // ── Init map ──────────────────────────────────────────────────────────────
    useEffect(() => {
        if (!mapRef.current || mapInstanceRef.current) return;

        const center = destCoords ? [destCoords.lat, destCoords.lng] : [20.5937, 78.9629];

        const map = L.map(mapRef.current, {
            center,
            zoom: destCoords ? 13 : 5,
            zoomControl: false,
        });

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: "© OpenStreetMap contributors",
            maxZoom: 19,
        }).addTo(map);

        L.control.zoom({ position: "bottomright" }).addTo(map);

        mapInstanceRef.current = map;
        return () => { map.remove(); mapInstanceRef.current = null; };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // ── Draw route ────────────────────────────────────────────────────────────
    const drawRoute = useCallback((geojson) => {
        const map = mapInstanceRef.current;
        if (!map) return;
        if (routeLayerRef.current) routeLayerRef.current.remove();
        const layer = L.geoJSON(geojson, {
            style: { color: "#f97316", weight: 5, opacity: 0.85, lineJoin: "round", lineCap: "round" },
        }).addTo(map);
        routeLayerRef.current = layer;
        map.fitBounds(layer.getBounds(), {
            paddingTopLeft: [60, 80],   // [left, top]
            paddingBottomRight: [60, 160],  // [right, bottom] ← increase this number to push route higher
        });
    }, []);

    // ── Place markers ─────────────────────────────────────────────────────────
    const placeMarkers = useCallback(() => {
        const map = mapInstanceRef.current;
        if (!map) return;
        markersRef.current.forEach((m) => m.remove());
        markersRef.current = [];

        if (fromCoords) {
            const m = L.marker([fromCoords.lat, fromCoords.lng], { icon: makeMarker("#16a34a", "A") })
                .addTo(map).bindPopup("Your Location");
            markersRef.current.push(m);
        }
        if (destCoords) {
            const m = L.marker([destCoords.lat, destCoords.lng], { icon: makeMarker("#f97316", "B") })
                .addTo(map).bindPopup(spaceName);
            markersRef.current.push(m);
        }
    }, [fromCoords, destCoords, spaceName]);

    // ── Load route ────────────────────────────────────────────────────────────
    const loadRoute = useCallback(async () => {
        if (!fromCoords || !destCoords) {
            setError(
                !fromCoords && !destCoords ? "Origin and destination coordinates are missing."
                    : !fromCoords ? "Origin coordinates (fromLat, fromLng) are missing."
                        : "Destination coordinates (toLat, toLng) are missing."
            );
            return;
        }
        setRouteLoading(true);
        setError(null);
        try {
            placeMarkers();
            const data = await fetchRoute(fromCoords, destCoords);
            setRoute(data);
            drawRoute(data.geometry);
        } catch (err) {
            setError(err.message ?? "Failed to calculate route.");
        } finally {
            setRouteLoading(false);
        }
    }, [fromCoords, destCoords, placeMarkers, drawRoute]);

    useEffect(() => {
        const t = setTimeout(loadRoute, 150);
        return () => clearTimeout(t);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <GlobalStyle />
            <MapFull>
                {/* Full-screen map */}
                <MapEl ref={mapRef} />
                

                {/* Info card — top right */}
                <InfoCard>
                    <SpaceName>{spaceName}</SpaceName>

                    <RouteRow $gap>
                        <RouteDot />
                        <RouteLabel title={coordLabel(fromCoords)}>{coordLabel(fromCoords)}</RouteLabel>
                    </RouteRow>
                    <RouteRow $gap>
                        <RouteStem />
                    </RouteRow>
                    <RouteRow>
                        <RouteDot $dest />
                        <RouteLabel title={spaceAddress || coordLabel(destCoords)}>
                            {spaceAddress || coordLabel(destCoords)}
                        </RouteLabel>
                    </RouteRow>

                    {route && (
                        <>
                            <Divider />
                            <SummaryGrid>
                                <SummaryItem>
                                    <div className="label">Distance</div>
                                    <div className="value">{fmtDist(route.distance)}</div>
                                </SummaryItem>
                                <SummaryItem>
                                    <div className="label">Duration</div>
                                    <div className="value">{fmtDuration(route.duration)}</div>
                                </SummaryItem>
                            </SummaryGrid>
                        </>
                    )}
                </InfoCard>

                {/* Loading */}
                {routeLoading && (
                    <FloatState>
                        <Spinner />
                        Calculating route…
                    </FloatState>
                )}

                {/* Error */}
                {error && !routeLoading && (
                    <ErrorFloat>
                        ⚠ {error}
                    </ErrorFloat>
                )}
            </MapFull>
        </>
    );
};

export default DirectionPage;