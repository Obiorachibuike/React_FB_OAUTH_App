// src/LogoutButton.js
import React from 'react';

const LogoutButton = ({ onLogout }) => {
  const handleLogout = () => {
    window.FB.logout(() => {
      onLogout();
    });
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default LogoutButton;
