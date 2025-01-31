import React from "react";

const EventList = ({ events, onEditEvent, onDeleteEvent }) => {
  return (
    <div>
      {events.map((event) => (
        <div className="event-card" key={event.id}>
          <h4>{event.name}</h4>
          <p><strong>Fecha:</strong> {event.date}</p>
          <p><strong>Ubicación:</strong> {event.location}</p>
          <p><strong>Capacidad:</strong> {event.capacity}</p>
          <p>{event.description}</p>
          <button className="button" onClick={() => onEditEvent(event)}>Editar</button>
          <button className="button" style={{ background: "#dc3545" }} onClick={() => onDeleteEvent(event.id)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
};

export default EventList;
