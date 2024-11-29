// src/components/KanbanColumn.jsx
import React from "react";
import KanbanTicket from "./KanbanTicket";

const KanbanColumn = ({ title, tickets }) => {
  return (
    <div className="kanban-column">
      <h3>{title}</h3>
      <div className="ticket-container">
        {tickets.map((ticket) => (
          <KanbanTicket key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default KanbanColumn;