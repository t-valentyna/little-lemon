function BookingPage() {
    return (
      <form>
   <label htmlFor="res-date">Choose date</label>
   <input type="date" id="res-date" />
   <select id="res-time ">
      <option value="" selected disabled hidden>Choose time</option>
      <option value="17:00">17:00</option>
      <option value="18:00">18:00</option>
      <option value="19:00">19:00</option>
      <option value="20:00">20:00</option>
      <option value="21:00">21:00</option>
      <option value="22:00">22:00</option>
   </select>
   <label htmlFor="guests">Number of guests</label>
   <input type="number" placeholder="1" min="1" max="10" id="guests" />
   <select id="occasion" >
      <option value="" selected disabled hidden >Occasion</option>
      <option value="birthday">Birthday</option>
      <option value="engagement">Engagement</option>
      <option value="anniversary">Anniversary</option>
   </select>
   <button type="submit">Make Your reservation</button>
</form>
    );
  }

export default BookingPage;