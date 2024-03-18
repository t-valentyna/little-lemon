import Nav from './Nav';
import Logo from '../Logo.svg';
import Hamburger from '../assets/hamburger-menu.svg';

function Header() {
    return (
      <header>
        <img src={Logo} alt="Logo" />
        <div id="nav-wrapper" tabIndex={0}>
          <button id="hamburger" ><img src={Hamburger} alt="hamburger menu" /></button>
          <Nav></Nav>
        </div>
      </header>
    );
  }

export default Header;