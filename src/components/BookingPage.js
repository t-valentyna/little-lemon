import { useState } from "react";
import BookingForm from "./BookingForm";

function BookingPage() {
  const [time, setTime] = useState("");
  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

  return (
    <BookingForm time={time} timeSetter={setTime} availableTimes={availableTimes} />
  );
}

export default BookingPage;