import { useReducer } from "react";
import BookingForm from "./BookingForm";
import BookingSlot from "./BookingSlot";

function BookingPage() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  function updateTimes(date) {
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  }

  function initializeTimes() {
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  }

  return (
    <>
      <BookingForm
        availableTimes={availableTimes}
        updateTimes={dispatch}
      />
      <BookingSlot />
    </>
  );
}

export default BookingPage;
