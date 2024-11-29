// src/components/KanbanBoard.jsx
import React, { useState, useEffect } from "react";
import KanbanColumn from "./KanbanColumn";
import Header from "./Header";

const KanbanBoard = () => {
  const [tickets, setTickets] = useState([]);
  const [groupBy, setGroupBy] = useState("status"); // Default to group by status
  const [orderBy, setOrderBy] = useState("priority"); // Default to order by priority

  // Fetch tickets from the API
  useEffect(() => {
    fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setTickets(data);
        } else if (data && data.tickets && Array.isArray(data.tickets)) {
          setTickets(data.tickets);
        }
      })
      .catch((error) => console.error("Error fetching tickets:", error));
  }, []);

  // Group tickets based on the groupBy value (status, user, or priority)
  const groupTickets = (tickets) => {
    return tickets.reduce((grouped, ticket) => {
      const groupKey = ticket[groupBy]; // Dynamically group by status, user, or priority
      if (!grouped[groupKey]) {
        grouped[groupKey] = [];
      }
      grouped[groupKey].push(ticket);
      return grouped;
    }, {});
  };

  // Sort tickets within each group based on the orderBy value (priority or title)
  const sortTickets = (tickets, orderBy) => {
    return tickets.sort((a, b) => {
      if (orderBy === "priority") {
        return a.priority - b.priority; // Sort by priority (low to high)
      } else if (orderBy === "title") {
        return a.title.localeCompare(b.title); // Sort by title alphabetically
      }
      return 0;
    });
  };

  const groupedTickets = groupTickets(tickets);

  return (
    <div>
      <Header
        groupBy={groupBy}
        orderBy={orderBy}
        onGroupByChange={setGroupBy}
        onOrderByChange={setOrderBy}
      />
      <div className="kanban-board">
        {Object.keys(groupedTickets).map((groupKey) => (
          <KanbanColumn
            key={groupKey}
            title={groupKey}
            tickets={sortTickets(groupedTickets[groupKey], orderBy)}
          />
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;
