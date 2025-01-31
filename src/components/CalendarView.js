import React from "react";

const CalendarView = ({ events }) => {
  return (
    <div className="calendar-container">
      <h2>Vista de Calendario</h2>
      <div className="calendar">
        {events.map((event) => (
          <div className="calendar-event" key={event.id}>
            <strong>{event.date}</strong>
            <p>{event.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;
