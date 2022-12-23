import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import iconMarker from "/assets/images/icon-location.svg";
import iconRetina from "leaflet/dist/images/marker-icon-2x.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const Map = ({ lat = 13.54232, long = 0.72934 }) => {
  const icon = L.icon({
    iconRetinaUrl: iconRetina,
    iconUrl: iconMarker,
    shadowUrl: iconShadow,
    iconSize: [30, 35],
    iconAnchor: [12, 41],
  });

  return (
    <MapContainer center={[lat, long]} zoom={13} scrollWheelZoom={false}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker icon={icon} position={[lat, long]}>
        <Popup>
          Where you at! <br />
          {lat}, {long}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
