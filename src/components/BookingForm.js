import { useState } from "react";
import CustomSelect from "./CustomSelect";

function BookingForm(props) {
  const [date, setDate] = useState("");
//   const [time, setTime] = useState("");
  const [numOfGuests, setNumOfGuests] = useState("");
  const [occasion, setOccasion] = useState("");

//   const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const availableOccasions = ["Birthday", "Engagement", "Anniversary"];

  const handleSumbit = (e) => {
    e.preventDefault();
    alert(
      `Form submitted with this values: date - ${date}; time - ${props.time}; number of guests - ${numOfGuests}; occasion - ${occasion}`
    );
    setDate("");
    props.timeSetter("");
    setNumOfGuests("");
    setOccasion("");
  };

  return (
    <form onSubmit={handleSumbit}>
      <h2>Reserve a table</h2>
      <label htmlFor="res-date">
        Choose date
        <input
          className={date ? "selected" : ""}
          type="date"
          id="res-date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </label>
      <CustomSelect
        option={props.availableTimes}
        name="Choose time"
        state={props.time}
        setter={props.timeSetter}
        id="res-time"
      />
      <label htmlFor="guests">
        Number of guests
        <input
          type="number"
          placeholder="0"
          min="1"
          max="10"
          id="guests"
          className={numOfGuests ? "selected" : ""}
          value={numOfGuests}
          onChange={(e) => setNumOfGuests(e.target.value)}
        />
      </label>
      <CustomSelect
        option={availableOccasions}
        name="Occasion"
        state={occasion}
        setter={setOccasion}
        id="occasion"
      />
      <button
        type="submit"
        disabled={!(date && props.time && numOfGuests && occasion)}
      >
        Make Your reservation
      </button>
    </form>
  );
}

export default BookingForm;
