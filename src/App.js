import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import EventList from "./components/EventList";
import EventForm from "./components/EventForm";
import imagenEncabezado from "./img/dash.jpg";
import "./styles/dashboard.css";
import "./styles/event.css";

import {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} from "./services/api";
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

      {view === "home" && (
        <div className="dashboard-container">
          {/* Sección de contenido */}
          <div className="contain-left">
            <div className="titular">
              <h1 className="header-text">
                Registra la <br />
                información para tu Evento
              </h1>
              <img
                src={imagenEncabezado}
                alt="Encabezado"
                className="header-image"
              />
            </div>
          </div>

          {/* Sección de Cards */}
          <div className="card-container">
            <div className="card" onClick={() => setView("events")}>
              <img
                src="https://plus.unsplash.com/premium_photo-1664790560022-324e031a6352?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2VzdGklQzMlQjNuJTIwZGUlMjBldmVudG9zfGVufDB8fDB8fHww"
                alt="Eventos"
                className="card-image"
              />
              <h2>Gestión de Eventos</h2>
              <p>Administra y gestiona los eventos de manera eficiente.</p>
            </div>

            <div className="card" onClick={() => setView("calendar")}>
              <img
                src="https://www.shutterstock.com/image-photo/business-planning-calendar-agenda-work-600nw-2461973363.jpg"
                alt="Calendario"
                className="card-image"
              />
              <h2>Calendario</h2>
              <p>Consulta las fechas de los eventos registrados.</p>
            </div>
          </div>
        </div>
      )}

      {view === "events" && (
        <div className="event-container">
            <h1 className="font">Gestión de Eventos</h1>
            <button
              className="btn-overlay"
              onClick={() => {
                setEditingEvent(null);
                setOpenForm(true);
              }}
            >
              Agregar Evento
            </button>
            <hr></hr>
            <EventList
              events={events}
              onEditEvent={handleEditEvent}
              onDeleteEvent={handleDeleteEvent}
            />
        </div>
      )}
      {view === "calendar" && <CalendarView events={events} />}
    </div>
  );
};

export default App;
