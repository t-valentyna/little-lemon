import { render, screen } from "@testing-library/react";
import BookingPage from './components/BookingPage';
import { initializeTimes, updateTimes } from "./components/BookingPage";

test('Renders the BookingForm heading', () => {
    render(<BookingPage />);
    const headingElement = screen.getByText("Reserve a table");
    expect(headingElement).toBeInTheDocument();
})

test('initializeTimes function', () => {
  const returnValue = initializeTimes();
  expect(returnValue).toStrictEqual(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
})

test('updateTimes function', () => {
  const returnValue = updateTimes();
  expect(returnValue).toStrictEqual(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
})