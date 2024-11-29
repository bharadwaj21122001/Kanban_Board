// src/components/KanbanTicket.jsx
import React from "react";

const KanbanTicket = ({ ticket }) => {
  return (
    <div className="kanban-ticket">
      <h4>{ticket.title}</h4>
      <p><strong>Status:</strong> {ticket.status}</p>
      <p><strong>User:</strong> {ticket.user}</p>
      <p><strong>Priority:</strong> {ticket.priority}</p>
    </div>
  );
};

export default KanbanTicket;