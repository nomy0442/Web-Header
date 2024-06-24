import React, { useState } from 'react';
import './Navbar.css';
import { HiOutlineMenu } from 'react-icons/hi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="nav">
      <div className="nav-logo">COD - SOL</div>
      <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
        <li>Home</li>
        <li>Explore</li>
        <li>About</li>
        <li className="nav-contact">Contact</li>
      </ul>
      <HiOutlineMenu className="menu-icon" onClick={toggleMenu} />
    </div>
  );
};

export default Navbar;