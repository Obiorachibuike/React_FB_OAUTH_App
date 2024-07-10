// src/PageSelector.js
import React from 'react';

const PageSelector = ({ pages, onSelectPage }) => {
  const handleChange = (event) => {
    onSelectPage(event.target.value);
  };

  return (
    <select onChange={handleChange}>
      <option value="">Select a Page</option>
      {pages.map(page => (
        <option key={page.id} value={page.id}>{page.name}</option>
      ))}
    </select>
  );
};

export default PageSelector;
