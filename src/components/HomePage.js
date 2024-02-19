import { Link } from "react-router-dom";
import RestauranFood from '../assets/restauranfood.jpg';
import GreekSalad from '../assets/greek salad.jpg';
import Bruchetta from '../assets/bruchetta.svg';
import LemonDesert from '../assets/lemon dessert.jpg';
import Scooter from '../assets/Scooter.svg';
import ClientIcon from '../assets/Vector.svg';
import Chefs1 from '../assets/Mario and Adrian A.jpg';
import Chefs2 from '../assets/Mario and Adrian b.jpg';

function HomePage() {
    return (
      <>
        <section id="hero">
            <div>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>xjfcjhgfhgvjh jbljblhg hjvlhvl bhlb hvlhjvlhv lbhlb gkvghvkhgv hvk hvkhv hvkhv hvhkv vgvk gvkghvgh vvv.</p>
                <Link to="/booking"><button>Reserve a table</button></Link>
            </div>
            <img src={RestauranFood} alt="The appetizing restaurant dish" height="415" />
        </section>
        <section id="highlights">
            <header>
                <h1>This weeks specials!</h1>
                <button>Online menu</button>
            </header>
            <div id="cards">
                <div class="card">
                    <img src={GreekSalad} alt="Greek salad" height="198" />
                    <header>
                        <h3>Greek salad</h3>
                        <span class="price">$ 12.99</span>
                    </header>
                    <p>xjfcjhgfhgvjh jbljblhg hjvlhvl bhlb hvlhjvlhv lbhlb gkvghvkhgv hvk hvkhv hvkhv hvhkv vgvk gvkghvgh vvv.</p>
                    <h4>Order a delivery <img src={Scooter} alt="scooter" height="23" /></h4>
                </div>
                <div class="card">
                    <img src={Bruchetta} alt="Bruchetta" height="198" />
                    <header>
                        <h3>Bruchetta</h3>
                        <span class="price">$ 12.99</span>
                    </header>
                    <p>xjfcjhgfhgvjh jbljblhg hjvlhvl bhlb hvlhjvlhv lbhlb gkvghvkhgv hvk hvkhv hvkhv hvhkv vgvk gvkghvgh vvv.</p>
                    <h4>Order a delivery <img src={Scooter} alt="scooter" height="23" /></h4>
                </div>
                <div class="card">
                    <img src={LemonDesert} alt="Lemon desert" height="198" />
                    <header>
                        <h3>Lemon desert</h3>
                        <span class="price">$ 12.99</span>
                    </header>
                    <p>xjfcjhgfhgvjh jbljblhg hjvlhvl bhlb hvlhjvlhv lbhlb gkvghvkhgv hvk hvkhv hvkhv hvhkv vgvk gvkghvgh vvv.</p>
                    <h4>Order a delivery <img src={Scooter} alt="scooter" height="23" /></h4>
                </div>
            </div>
        </section>
        <section id="testimonials">
            <h1>Testimonials</h1>
            <div id="comments">
                <div class="comment">
                    <h3>Rating</h3>
                    <h4><img src={ClientIcon} alt="Client icon" height="29" />Name</h4>
                    <p>Review</p>
                </div>
                <div class="comment">
                    <h3>Rating</h3>
                    <h4><img src={ClientIcon} alt="Client icon" height="29" />Name</h4>
                    <p>Review</p>
                </div>
                <div class="comment">
                    <h3>Rating</h3>
                    <h4><img src={ClientIcon} alt="Client icon" height="29" />Name</h4>
                    <p>Review</p>
                </div>
                <div class="comment">
                    <h3>Rating</h3>
                    <h4><img src={ClientIcon} alt="Client icon" height="29" />Name</h4>
                    <p>Review</p>
                </div>
            </div>
        </section>
        <section id="about">
        <div>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>xjfcjhgfhgvjh jbljblhg hjvlhvl bhlb hvlhjvlhv lbhlb gkvghvkhgv hvk hvkhv hvkhv hvhkv vgvk gvkghvgh vvv.</p>
                <p>xjfcjhgfhgvjh jbljblhg hjvlhvl bhlb hvlhjvlhv lbhlb gkvghvkhgv hvk hvkhv hvkhv hvhkv vgvk gvkghvgh vvv.</p>
            </div>
            <img src={Chefs1} alt="First chefs' foto" height="415" />
            <img src={Chefs2} alt="Second chefs' foto" height="415" />
        </section>
      </>
    );
  }

export default HomePage;