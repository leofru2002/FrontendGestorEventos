import React from 'react';

const EventItem = ({ event, onDelete, onEdit }) => {
  return (
    <div className="event-item">
      <h3>{event.name}</h3>
      <p>{event.date}</p>
      <p>{event.location}</p>
      <p>Capacidad: {event.capacity}</p>
      <p>{event.description}</p>
      <button onClick={() => onEdit(event.id)}>Editar</button>
      <button onClick={() => onDelete(event.id)}>Eliminar</button>
    </div>
  );
};

export default EventItem;