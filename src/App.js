// src/App.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import KanbanBoard from "./components/KanbanBoard";
import Header from "./components/Header";
import './styles/App.css';

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [groupBy, setGroupBy] = useState(localStorage.getItem('groupBy') || 'status');
  const [orderBy, setOrderBy] = useState(localStorage.getItem('orderBy') || 'priority');

  // Fetch data from API
  useEffect(() => {
    axios.get('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then(response => setTickets(response.data))
      .catch(err => console.error('Error fetching data', err));
  }, []);

  // Handle Group and Sort updates
  const handleGroupByChange = (value) => {
    setGroupBy(value);
    localStorage.setItem('groupBy', value);
  };

  const handleOrderByChange = (value) => {
    setOrderBy(value);
    localStorage.setItem('orderBy', value);
  };

  return (
    <div className="App">
      {/* Only one Header component rendered */}
      <KanbanBoard tickets={tickets} groupBy={groupBy} orderBy={orderBy} />
    </div>
  );
};

export default App;