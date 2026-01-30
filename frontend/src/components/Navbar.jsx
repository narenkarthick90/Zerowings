import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logos/zw_logo.png";

export default function Navbar() {
  const location = useLocation();
  const isWhiteText =
    location.pathname === "/" || location.pathname === "/about";

  return (
    <nav className={`navbar ${isWhiteText ? "navbar-light" : "navbar-dark"}`}>
      <div className="nav-container">
        <Link to="/" className="nav-brand">
          <img src={logo} alt="ZW Logo" className="nav-logo" />
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/products" className="nav-link">
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-link">
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/demo" className="nav-link">
              Demo
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/people" className="nav-link">
              People
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              Contact us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/blogs" className="nav-link">
              Blogs
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
