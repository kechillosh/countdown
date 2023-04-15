import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SelectCount.css";

function SelectCount() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("/");

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    navigate(selectedValue);
  };

  return (
    <div className="Navbar">
      <form>
        <label htmlFor="count">Select Countdown</label>
        <select
          name="countdowns"
          id="count"
          onChange={handleSelectChange}
          value={selectedOption}
        >
          <option value="/">New Years Eve</option>
          <option value="/Christmas">Christmas</option>
          <option value="/Summer">Summer</option>
        </select>
      </form>
    </div>
  );
}

export default SelectCount;
