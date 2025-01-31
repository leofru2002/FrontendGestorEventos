import React, { useState, useEffect } from "react";

const EventForm = ({ open, onClose, onCreateEvent, onUpdateEvent, editingEvent }) => {
  const [event, setEvent] = useState({
    name: "",
    date: "",
    location: "",
    capacity: "",
    description: ""
  });

  useEffect(() => {
    if (editingEvent) {
      setEvent({
        name: editingEvent.name || "",
        date: editingEvent.date || "",
        location: editingEvent.location || "",
        capacity: editingEvent.capacity || "",
        description: editingEvent.description || ""
      });
    } else {
      setEvent({
        name: "",
        date: "",
        location: "",
        capacity: "",
        description: ""
      });
    }
  }, [editingEvent]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent((prevEvent) => ({
      ...prevEvent,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingEvent) {
      onUpdateEvent(editingEvent.id, event);
    } else {
      onCreateEvent(event);
    }
    onClose();
  };

  return (
    <div className={`modal ${open ? 'is-active' : ''}`}>
      <h2>{editingEvent ? "Editar Evento" : "Agregar Evento"}</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={event.name} onChange={handleChange} placeholder="Nombre del evento" required />
        <input type="date" name="date" value={event.date} onChange={handleChange} required />
        <input type="text" name="location" value={event.location} onChange={handleChange} placeholder="Ubicación" required />
        <input type="number" name="capacity" value={event.capacity} onChange={handleChange} placeholder="Capacidad" required />
        <textarea name="description" value={event.description} onChange={handleChange} placeholder="Descripción" required />
        <button type="submit" className="button">{editingEvent ? "Actualizar" : "Agregar"}</button>
        <button type="button" className="close-button" onClick={onClose}>Cancelar</button>
      </form>
    </div>
  );
};

export default EventForm;
