import React, { useState } from 'react';
import { Link , NavLink } from 'react-router-dom';
import { useCart } from "react-use-cart";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };


  const { totalUniqueItems } = useCart();

  return (
    <header className="header" data-header>
      <div className="container">

        <Link to="/" className="logo">Crafti</Link>

        <nav className={`navbar ${isNavOpen ? 'active' : ''}`} data-navbar>

          <button className="nav-close-btn" aria-label="close menu" onClick={toggleNav}>
            {/* <IonIcon name="close-outline"  /> */}
          <i class="fa-solid fa-xmark" aria-hidden="true"></i>

          </button>

          <ul className="navbar-list">
            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/explore" className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}>
                Explore
              </NavLink>
            </li>
            
            <li>
              <NavLink to="/our_products" className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}>
                Our Products
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}>
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart" className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}>
                <i className="fa-solid fa-cart-shopping"></i>
                <span className="cart-count">({totalUniqueItems})</span>
              </NavLink>
            </li>
          </ul>

        </nav>

        <button className="nav-open-btn" aria-label="open menu" onClick={toggleNav}>
          {/* <IonIcon name="menu-outline"  /> */}
          <i class="fa-solid fa-signal" aria-hidden="true"></i>
          </button>

        <div className={`overlay ${isNavOpen ? 'active' : ''}`} onClick={toggleNav} data-overlay></div>

      </div>
    </header>
  );
}
