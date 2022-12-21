import React from "react";

const RefreshBtn = ({ handleClick }) => {
  return (
    <>
      <button className="refreshBtn" onClick={handleClick}>
        Refresh Page
      </button>
    </>
  );
};

export default RefreshBtn;
