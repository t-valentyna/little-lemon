import { Link } from "react-router-dom";

function Nav() {
    return (
      <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/#about">About</Link></li>
            <li><Link to="/#highlights">Menu</Link></li>
            <li><Link to="/booking">Reservations</Link></li>
            <li><Link to="/">Order online</Link></li>
            <li><Link to="/">Login</Link></li>
        </ul>
      </nav>
    );
  }

export default Nav;