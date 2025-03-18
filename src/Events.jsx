import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Events.css";

const Events = () => {
  const navigate = useNavigate(); 

  
  const [events, setEvents] = useState([
    { id: 1, title: "Charity Drive", date: "2025-03-20", location: "NYC", category: "Charity", description: "Helping underprivileged kids." },
    { id: 2, title: "Faith Gathering", date: "2025-04-05", location: "LA", category: "Religious", description: "Community prayer event." },
    { id: 3, title: "Social Meetup", date: "2025-04-15", location: "San Francisco", category: "Social", description: "Networking with professionals." }
  ]);


  const [filter, setFilter] = useState("All");


  const [showForm, setShowForm] = useState(false);


  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    location: "",
    category: "Religious",
    description: "",
  });

  
  const filteredEvents = filter === "All" ? events : events.filter(event => event.category === filter);

  
  const handleInputChange = (e) => {
    setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
  };


  const handleAddEvent = (e) => {
    e.preventDefault();
    if (newEvent.title && newEvent.date && newEvent.location && newEvent.description) {
      setEvents([...events, { id: events.length + 1, ...newEvent }]);
      setNewEvent({ title: "", date: "", location: "", category: "Religious", description: "" });
      setShowForm(false); 
    }
  };

  return (
    <div className="events-page">
    <div className="events-container">
    
      <div className="top-left">
        <button className="back-home-btn" onClick={() => navigate("/")}>
          ⬅
        </button>
      </div>

      <h1>Upcoming Events</h1>

    
      <div className="filter-container">
        <label>Filter by Category:</label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Religious">Religious</option>
          <option value="Social">Social</option>
          <option value="Charity">Charity</option>
        </select>
      </div>

    
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


      <button className="toggle-form-btn" onClick={() => setShowForm(!showForm)}>
        {showForm ? "Cancel" : "Add Event"}
      </button>

      

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
