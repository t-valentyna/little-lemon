import { useState } from "react";

function CustomSelect(props) {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div className="custom-select-container">
      <div
        className={`custom-select ${props.state ? "selected" : ""}`}
        id={props.id}
        onClick={() => setShowOptions(!showOptions)}
      >
        {props.state || props.name}
      </div>
      <div className={`dropdown-content ${showOptions ? "show" : ""}`}>
        {props.option.map((item) => (
          <div
            onClick={() => {
              props.setter(item);
              setShowOptions(!showOptions);
            }}
            value={item}
            key={item}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function BookingPage() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [numOfGuests, setNumOfGuests] = useState("");
  const [occasion, setOccasion] = useState("");

  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const availableOccasions = ["Birthday", "Engagement", "Anniversary"];

  const handleSumbit = (e) => {
    e.preventDefault();
    alert(
      `Form submitted with this values: date - ${date}; time - ${time}; number of guests - ${numOfGuests}; occasion - ${occasion}`
    );
    setDate("");
    setTime("");
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
        option={availableTimes}
        name="Choose time"
        state={time}
        setter={setTime}
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
        disabled={!(date && time && numOfGuests && occasion)}
      >
        Make Your reservation
      </button>
    </form>
  );
}

export default BookingPage;