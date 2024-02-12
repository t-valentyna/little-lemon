import Nav from './Nav';
import Logo from './Logo.svg';

function Header() {
    return (
      <header>
        <img src={Logo} alt="Logo" />
        <Nav></Nav>
      </header>
    );
  }

export default Header;