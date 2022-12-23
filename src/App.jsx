import { useState, useEffect } from "react";
import SearchBox from "./components/SearchBox";
import "./App.css";
import Map from "./components/Map";
import axios from "axios";
import ErrorMessage from "./components/ErrorMessage";
import IPinfo from "./components/IPinfo";

function App() {
  const [value, setValue] = useState("");
  const [ip, setIp] = useState("");
  const [isSearched, setIsSearched] = useState(false);
  const [err, setErr] = useState("");

  const apiReq = (req = "") => {
    axios
      .get(
        `https://geo.ipify.org/api/v2/country,city?apiKey=at_IAlQHZEUNUpXVay8vC6Izr98xR6uo&domain=${req}`
      )
      .then((res) => {
        console.log(res.data)
        setIp(res.data);
        setIsSearched(false);
      })
      .catch((err) => setErr(err.message));
  };

  useEffect(() => {
   apiReq()
  }, []);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIp("");
    setErr("");
    setIsSearched(true);
    apiReq(value);
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
              location={`${ip.location.city}, ${ip.location.country}`}
              timezone={ip.location.timezone}
              isp={ip.isp}
            />
          )}
        </div>
      </header>
      <main>
        {ip ? (
          isSearched ? (
            <div className="error-msg">Loading...</div>
          ) : (
            <Map lat={ip.location.lat} long={ip.location.lng} />
          )
        ) : err ? (
          <>
            <ErrorMessage value={value} />
          </>
        ) : (
          <div className="error-msg">Loading...</div>
        )}
      </main>
    </div>
  );
}

export default App;
