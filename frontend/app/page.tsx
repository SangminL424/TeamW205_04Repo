"use client";

import { useState } from 'react';

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="main-container">
    {/* Sidebar */}
    <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <button className="close-sidebar-button" onClick={toggleSidebar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="close-svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Library</a>
        </li>
      </ul>
    </div>

    {/* Navbar */}
    <nav className="navbar">
      <div className="navbar-container">
        {/* Left: Menu Icon */}
        <div className="menu-icon">
          <button className="menu-button" onClick={toggleSidebar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="menu-svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          <span className="menu-text">Menu</span>
        </div>

        {/* Center: App Name */}
        <div className="app-name">SPEED</div>

        {/* Right: User Profile Button */}
        <div className="profile-icon">
          <button className="profile-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="profile-svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.121 19.879a3 3 0 010-4.242l1.415-1.414a1 1 0 011.414 0l2.121 2.121a1 1 0 010 1.414l-1.414 1.414a3 3 0 01-4.242 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a9 9 0 11-9 9 9 9-9 9z"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>

    {/* Main Section */}
    <main className="main-content">
      {/* App Name */}
      <h1 className="main-title">SPEED</h1>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search SE practices..."
          className="search-input"
        />
        <button className="search-button">Search</button>
      </div>

      {/* Description */}
      <p className="description">
        Start by searching for a practice like Test-Driven Development (TDD) or
        Continuous Integration (CI).
      </p>
    </main>
  </div>

);
}
