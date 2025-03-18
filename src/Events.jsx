import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import "./Events.css";

const Events = () => {
  const navigate = useNavigate(); // ✅ Initialize navigation

  // Sample event data
  const [events, setEvents] = useState([
    { id: 1, title: "Charity Drive", date: "2025-03-20", location: "NYC", category: "Charity", description: "Helping underprivileged kids." },
    { id: 2, title: "Faith Gathering", date: "2025-04-05", location: "LA", category: "Religious", description: "Community prayer event." },
    { id: 3, title: "Social Meetup", date: "2025-04-15", location: "San Francisco", category: "Social", description: "Networking with professionals." }
  ]);

  // State for filtering
  const [filter, setFilter] = useState("All");

  // State for form visibility
  const [showForm, setShowForm] = useState(false);

  // State for form inputs
  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    location: "",
    category: "Religious",
    description: "",
  });

  // Filter events based on category
  const filteredEvents = filter === "All" ? events : events.filter(event => event.category === filter);

  // Handle form input changes
  const handleInputChange = (e) => {
    setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
  };

  // Add new event
  const handleAddEvent = (e) => {
    e.preventDefault();
    if (newEvent.title && newEvent.date && newEvent.location && newEvent.description) {
      setEvents([...events, { id: events.length + 1, ...newEvent }]);
      setNewEvent({ title: "", date: "", location: "", category: "Religious", description: "" });
      setShowForm(false); // Hide form after submission
    }
  };

  return (
    <div className="events-page">
    <div className="events-container">
      {/* 🔙 Back to Home Button (Now at the TOP LEFT) */}
      <div className="top-left">
        <button className="back-home-btn" onClick={() => navigate("/")}>
          ⬅
        </button>
      </div>

      <h1>Upcoming Events</h1>

      {/* Filter Dropdown */}
      <div className="filter-container">
        <label>Filter by Category:</label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Religious">Religious</option>
          <option value="Social">Social</option>
          <option value="Charity">Charity</option>
        </select>
      </div>

      {/* Event List */}
      <div className="event-list">
        {filteredEvents.length > 0 ? (
          filteredEvents.map(event => (
            <div key={event.id} className="event-card">
              <h2>{event.title}</h2>
              <p><strong>Date:</strong> {event.date}</p>
              <p><strong>Location:</strong> {event.location}</p>
              <p><strong>Category:</strong> {event.category}</p>
              <p>{event.description}</p>
            </div>
          ))
        ) : (
          <p>No events found in this category.</p>
        )}
      </div>

      {/* Toggle Add Event Form */}
      <button className="toggle-form-btn" onClick={() => setShowForm(!showForm)}>
        {showForm ? "Cancel" : "Add Event"}
      </button>

      {/* Add New Event Form (Initially Hidden) */}
      {showForm && (
        <div className="add-event-form">
          <h2>Add New Event</h2>
          <form onSubmit={handleAddEvent}>
            <input type="text" name="title" placeholder="Event Title" value={newEvent.title} onChange={handleInputChange} required />
            <input type="date" name="date" value={newEvent.date} onChange={handleInputChange} required />
            <input type="text" name="location" placeholder="Location" value={newEvent.location} onChange={handleInputChange} required />
            <select name="category" value={newEvent.category} onChange={handleInputChange}>
              <option value="Religious">Religious</option>
              <option value="Social">Social</option>
              <option value="Charity">Charity</option>
            </select>
            <textarea name="description" placeholder="Event Description" value={newEvent.description} onChange={handleInputChange} required />
            <button type="submit">Add Event</button>
          </form>
        </div>
      )}
    </div>
    </div>
  );
};

export default Events;
