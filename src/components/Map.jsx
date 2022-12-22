import React from "react";
// import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";

const Map = ({ lat = 13.54232, long = 0.72934 }) => {
  return (
    <MapContainer center={[lat, long]} zoom={13} scrollWheelZoom={false}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[lat, long]}>
        <Popup>
          Where you at! <br />
          {lat}, {long}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
