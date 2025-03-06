import React from "react";
import "./CalendarView.css";
import { FaCalendarAlt } from "react-icons/fa";


const CalendarView = ({ events }) => {
  return (
    <div className="calendar-container">
      <h2 className="calendar-title">
        <FaCalendarAlt className="calendar-icon" />Calendario
      </h2>
      <hr></hr>
      <div className="calendar-grid">
        {events.map((event) => (
          <div className="calendar-event" key={event.id}>
            <strong className="event-date">{event.date}</strong>
            <p className="event-name">{event.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;
