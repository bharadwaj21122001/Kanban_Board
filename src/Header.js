// src/components/Header.jsx
import React from "react";

const Header = ({ groupBy, orderBy, onGroupByChange, onOrderByChange }) => {
  return (
    <div className="header">
      <div>
        <label>Group By: </label>
        <select value={groupBy} onChange={(e) => onGroupByChange(e.target.value)}>
          <option value="status">Status</option>
          <option value="user">User</option>
          <option value="priority">Priority</option>
        </select>
      </div>
      <div>
        <label>Order By: </label>
        <select value={orderBy} onChange={(e) => onOrderByChange(e.target.value)}>
          <option value="priority">Priority</option>
          <option value="title">Title</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
