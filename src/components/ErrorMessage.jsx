import React from "react";
import RefreshBtn from "./RefreshBtn";

const ErrorMessage = () => {
  const handleClick = (e) => {
    e.preventDefault()
    window.location.reload(true)
  };

  return (
    <div className="error-msg">
      <div className="center">
        <h4>Error loading OpenMap. Check for the following:</h4>
        <ul>
          <li>Geolocation is available/enabled</li>
          <li>Active network connection</li>
        </ul>
        <RefreshBtn handleClick={handleClick} />
      </div>
    </div>
  );
};

export default ErrorMessage;
