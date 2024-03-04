import Nav from './Nav';
import ChefFoto from '../assets/restaurant chef B.jpg';

function Footer() {
    return (
      <footer>
        <img src={ChefFoto} alt="restaurant chef" height="302" width="200" />
        <section>
            <h1>Doormat Navigation</h1>
            <Nav></Nav>
        </section>
        <section>
            <h1>Contact</h1>
            <ul>
                <li>Address</li>
                <li>phone number</li>
                <li>email</li>
            </ul>
        </section>
        <section>
            <h1>Social Media Links</h1>
            <ul>
                <li>Address</li>
                <li>phone number</li>
                <li>email</li>
            </ul>
        </section>
      </footer>
    );
  }

export default Footer;