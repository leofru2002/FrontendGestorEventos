import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import EventList from "./components/EventList";
import EventForm from "./components/EventForm";
import { getEvents, createEvent, updateEvent, deleteEvent } from "./services/api";
import CalendarView from "./components/CalendarView";
import "./App.css";

const App = () => {
  const [view, setView] = useState("home");
  const [events, setEvents] = useState([]);
  const [editingEvent, setEditingEvent] = useState(null);
  const [openForm, setOpenForm] = useState(false);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const eventsData = await getEvents();
      setEvents(eventsData);
    } catch (error) {
      console.error("Error al obtener eventos:", error);
    }
  };

  const handleCreateEvent = async (event) => {
    await createEvent(event);
    fetchEvents();
    setOpenForm(false);
  };

  const handleUpdateEvent = async (id, updatedEvent) => {
    await updateEvent(id, updatedEvent);
    fetchEvents();
    setEditingEvent(null);
    setOpenForm(false);
  };

  const handleDeleteEvent = async (id) => {
    await deleteEvent(id);
    fetchEvents();
  };

  const handleEditEvent = (event) => {
    setEditingEvent(event);
    setOpenForm(true);
  };

  return (
    <div>
      <Navbar setView={setView} />

      {view === "home" && <h1>Bienvenido a Mi Agenda</h1>}
      {view === "events" && (
        <div>
          <h1>Gestión de Eventos</h1>
          <button className="button primary" onClick={() => { setEditingEvent(null); setOpenForm(true); }}>
            Agregar Evento
          </button>
          <EventForm open={openForm} onClose={() => setOpenForm(false)} onCreateEvent={handleCreateEvent} onUpdateEvent={handleUpdateEvent} editingEvent={editingEvent} />
          <EventList events={events} onEditEvent={handleEditEvent} onDeleteEvent={handleDeleteEvent} />
        </div>
      )}
      {view === "calendar" && <CalendarView events={events} />}
    </div>
  );
};

export default App;
