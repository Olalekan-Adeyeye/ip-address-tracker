import React from "react";

const ErrorMessage = () => {
  return (
    <div className="error-msg">
      <div className="center">
        <h4>Error loading OpenMap. Check for the following:</h4>
        <ul>
          <li>Geolocation is available/enabled</li>
          <li>Active network connection</li>
        </ul>
      </div>
    </div>
  );
};

export default ErrorMessage;
