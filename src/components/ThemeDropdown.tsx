// src/components/ThemeDropdown.tsx

import React, { useState, useEffect } from 'react';

const ThemeDropdown = () => {
  // This line tells the component to start with the 'quantum' theme
  const [theme, setTheme] = useState('quantum');

  // This code runs when the page first loads and whenever the theme changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <details className="dropdown">
      <summary className="btn btn-ghost hover:bg-[oklch(81%_0.111_293.571)]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      </summary>
      <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow-sm text-[oklch(0%_0_0)]">
        {/* We now use the setTheme function from useState */}
        <li>
          <a onClick={() => setTheme('quantum')}>Quantum</a>
        </li>
        <li>
          <a onClick={() => setTheme('light')}>Light</a>
        </li>
        <li>
          <a onClick={() => setTheme('dark')}>Dark</a>
        </li>
      </ul>
    </details>
  );
};

export default ThemeDropdown;