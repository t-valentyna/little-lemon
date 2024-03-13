import HomePage from './HomePage';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';
import {Routes, Route} from 'react-router-dom';

function Main() {
    return (
      <main>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/booking" element={<BookingPage />}></Route>
          <Route path="/confirmed-booking" element={<ConfirmedBooking />}></Route>
        </Routes>
      </main>
    );
  }

export default Main;