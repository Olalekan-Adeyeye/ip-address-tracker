import React from "react";

const IPinfo = ({
  ipaddress = "null",
  location = "null",
  timezone = "null",
  isp = "null",
}) => {
  return (
    <div className="ip-info">
      <div className="ipaddress">
        <span className="title">ip address</span>
        <span>{ipaddress}</span>
      </div>
      <div className="location">
        <span className="title">location</span>
        <span>{location}</span>
      </div>
      <div className="timezone">
        <span className="title">timezone</span>
        <span>UTC {timezone}</span>
      </div>
      <div className="isp">
        <span className="title">isp</span>
        <span>{isp}</span>
      </div>
    </div>
  );
};

export default IPinfo;
