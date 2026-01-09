import { useState } from "react";
import logo from "../../../assets/logotec.png";
import { NavLink } from "react-router";
import Cartitem from "../cart";
import { FaBars, FaTimes } from "react-icons/fa";
import "./index.css";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">

      <div className="logo">
        <img src={logo} alt="Tec logo" className="logoimg" />
      </div>

      <div className="nav-wrapper">
        <button className="menu-toggle" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </button>

        <nav className={`nav ${open ? "open" : ""}`}>
          <ul>
            <li><NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink></li>
            <li><NavLink to="/shop" onClick={() => setOpen(false)}>Shop</NavLink></li>
            <li><NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink></li>
          </ul>
        </nav>
      </div>

      <div className="cart-icon">
        <NavLink to="/cart">
          <Cartitem />
        </NavLink>
      </div>

    </header>
  );
};

export default Header;
