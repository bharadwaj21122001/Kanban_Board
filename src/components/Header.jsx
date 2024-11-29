import React, { useState } from "react";
import icon from "../assets/Display.svg"; // Import the Display icon

const Header = ({ groupBy, orderBy, onGroupByChange, onOrderByChange }) => {
  const [isDisplayOpen, setIsDisplayOpen] = useState(false);

  const toggleDisplayDropdown = () => {
    setIsDisplayOpen(!isDisplayOpen); // Toggle the dropdown visibility
  };

  return (
    <div className="header">
      <div className="dropdown">
        {/* Display dropdown button with icon */}
        <button onClick={toggleDisplayDropdown} className="dropdown-btn">
          <img
            src={icon} // Display icon inside the dropdown button
            alt="icon"
            className="dropdown-icon"
          />
          Display
        </button>

        {/* Dropdown content containing Group By and Order By */}
        {isDisplayOpen && (
          <div className="dropdown-content">
            <div className="dropdown-box">
              {/* Group By Dropdown */}
              <div className="dropdown-item">
                <label>Group By: </label>
                <select
                  value={groupBy}
                  onChange={(e) => onGroupByChange(e.target.value)}
                >
                  <option value="status">Status</option>
                  <option value="user">User</option>
                  <option value="priority">Priority</option>
                </select>
              </div>

              {/* Order By Dropdown */}
              <div className="dropdown-item">
                <label>Order By: </label>
                <select
                  value={orderBy}
                  onChange={(e) => onOrderByChange(e.target.value)}
                >
                  <option value="priority">Priority</option>
                  <option value="title">Title</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;