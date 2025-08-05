// src/components/Navbar.tsx

import ThemeDropdown from './ThemeDropdown';

const Navbar = () => {
  return (
    <nav className="bg-base-200 text-base-content p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <ThemeDropdown />
          <div className="text-2xl font-bold">Quantum Ledger AI</div>
        </div>

        <ul className="flex space-x-6">
          {/* We updated all the buttons here */}
          <li><a href="#" className="btn bg-[oklch(81%_0.111_293.571)] text-black transition-transform duration-300 transform hover:scale-105">Home</a></li>
          <li><a href="#" className="btn bg-[oklch(81%_0.111_293.571)] text-black transition-transform duration-300 transform hover:scale-105">About</a></li>
          <li><a href="#" className="btn bg-[oklch(81%_0.111_293.571)] text-black transition-transform duration-300 transform hover:scale-105">Services</a></li>
          <li><a href="#" className="btn bg-[oklch(81%_0.111_293.571)] text-black transition-transform duration-300 transform hover:scale-105">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;