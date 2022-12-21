import { useState } from "react";
import SearchBox from "./components/SearchBox";
import "./App.css";
import Map from "./components/Map";
import { useGeolocated } from "react-geolocated";
import axios from "axios";
import ErrorMessage from "./components/ErrorMessage";
import IPinfo from "./components/IPinfo";
import RefreshBtn from "./components/RefreshBtn";

function App() {
  const [value, setValue] = useState("");
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: true,
      },
      userDecisionTimeout: 5000,
    });
  const [ip, setIp] = useState();
  const [isSearched, setIsSearched] = useState(false);
  const [err, setErr] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErr("");
    setIp("");
    setIsSearched(true);
    axios
      .get(
        `https://geo.ipify.org/api/v2/country,city?apiKey=at_IAlQHZEUNUpXVay8vC6Izr98xR6uo&ipAddress=${value}`
      )
      .then((res) => {
        setIp(res.data);
        setIsSearched(false);
        console.log(ip);
      })
      .catch((err) => {
        setErr(err.message);
        console.log(err.message);
      });
  };

  return (
    <div className="app">
      <header>
        <h1 aria-label="header">IP address tracker</h1>
        <SearchBox
          value={value}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <div className="ip-info-wrapper">
          {ip && (
            <IPinfo
              ipaddress={ip.ip}
              location={ip.location.city}
              timezone={ip.location.timezone}
              isp={ip.isp}
            />
          )}
        </div>
      </header>
      <main>
        {ip ? (
          <Map lat={ip.location.lat} long={ip.location.lng} />
        ) : err ? (
          <>
            <ErrorMessage />
          </>
        ) : isSearched ? (
          <div className="error-msg">Loading...</div>
        ) : null}

        {!isSearched ? (
          !ip ? (
            isGeolocationAvailable ? (
              isGeolocationEnabled ? (
                coords ? (
                  <Map lat={coords.latitude} long={coords.longitude} />
                ) : (
                  <div className="error-msg">Loading...</div>
                )
              ) : (
                <ErrorMessage />
              )
            ) : (
              <ErrorMessage />
            )
          ) : null
        ) : null}
      </main>
    </div>
  );
}

export default App;
