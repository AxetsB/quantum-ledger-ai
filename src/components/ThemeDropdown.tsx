// src/components/ThemeDropdown.tsx

import React, { useState, useEffect, useRef } from 'react';

const ThemeDropdown = () => {
 const [theme, setTheme] = useState('quantum');
 const dropdownRef = useRef<HTMLDetailsElement>(null);

 useEffect(() => {
  document.documentElement.setAttribute('data-theme', theme);
 }, [theme]);

 const closeDropdown = () => {
  if (dropdownRef.current) {
   dropdownRef.current.open = false;
  }
 };

 useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
   if (
    dropdownRef.current &&
    !dropdownRef.current.contains(event.target as Node)
   ) {
    closeDropdown();
   }
  };
  document.addEventListener('mousedown', handleClickOutside);
  return () => {
   document.removeEventListener('mousedown', handleClickOutside);
  };
 }, []);

 return (
   <details className="dropdown" ref={dropdownRef}>
      <summary className="btn bg-[oklch(81%_0.111_293.571)] text-black transition-transform duration-300 transform hover:scale-105">
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
       <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow-sm text-black dropdown-menu-text">
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