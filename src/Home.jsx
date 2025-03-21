
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate(); 

  return (
    <div>
      
      <header className="header">
        <a href="/" className="logo">CommunionHub</a>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/events">Events</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>

      
      <main className="hero-section">
        <div className="hero-content">
          <h2>Connecting People Across Faiths & Interests</h2>
          <p>Join events and build a stronger community through meaningful connections and shared experiences.</p>
          <button className="explore-btn" onClick={() => navigate("/events")}>
            Explore Events
          </button>
        </div>
      </main>
    </div>
  );
};

export default Home;























