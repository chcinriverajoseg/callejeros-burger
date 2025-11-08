import React from 'react';

export const Header = () => {
  return (
    <header className="flex justify-between items-center mb-4 border-b pb-2">
      <h1 className="text-2xl font-bold">WeLive Videollamada</h1>
      <div className="flex items-center gap-2">
        <label htmlFor="theme-select">Tema:</label>
        <select
          id="theme-select"
          className="bg-background border border-gray-400 rounded px-2 py-1 text-sm"
          onChange={(e) => {
            const value = e.target.value;
            if (value === 'auto') {
              document.documentElement.removeAttribute('data-theme');
            } else {
              document.documentElement.setAttribute('data-theme', value);
            }
            localStorage.setItem('theme', value);
          }}
          defaultValue={localStorage.getItem('theme') || 'auto'}
        >
          <option value="auto">Auto</option>
          <option value="light">Claro</option>
          <option value="dark">Oscuro</option>
        </select>
      </div>
    </header>
  );
};
