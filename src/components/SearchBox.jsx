import React, { useState } from "react";

const SearchBox = ({ value, handleSubmit, handleChange }) => {
  const search = ">";
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="searchValue"
        value={value}
        onChange={handleChange}
        placeholder="Search for any IP address or domain"
        required
      />
      <button type="submit" className="submit-btn"><img src="src\assets\images\icon-arrow.svg" alt="go" /></button>
    </form>
  );
};

export default SearchBox;
