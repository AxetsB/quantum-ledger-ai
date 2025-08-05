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
          <li><a href="#" className="btn btn-ghost hover:bg-[oklch(81%_0.111_293.571)]">Home</a></li>
          <li><a href="#" className="btn btn-ghost hover:bg-[oklch(81%_0.111_293.571)]">About</a></li>
          <li><a href="#" className="btn btn-ghost hover:bg-[oklch(81%_0.111_293.571)]">Services</a></li>
          <li><a href="#" className="btn btn-ghost hover:bg-[oklch(81%_0.111_293.571)]">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;