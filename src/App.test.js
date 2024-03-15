import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookingPage from "./components/BookingPage";
import { initializeTimes, updateTimes } from "./components/BookingPage";

test("Renders the BookingForm heading", () => {
  render(
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<BookingPage />} />
      </Routes>
    </BrowserRouter>
  );
  const headingElement = screen.getByText("Reserve a table");
  expect(headingElement).toBeInTheDocument();
});

test("initializeTimes function", () => {
  const returnValue = initializeTimes();
  expect(returnValue).toStrictEqual([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);
});

test("updateTimes function", () => {
  const returnValue = updateTimes();
  expect(returnValue).toStrictEqual([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);
});

test("validation", () => {
  render(
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<BookingPage />} />
      </Routes>
    </BrowserRouter>
  );
  const submitButton = document.querySelector("button");
  expect(submitButton).toBeDisabled();

  const inputDate = document.querySelector("[type='date']");
  fireEvent.change(inputDate, {
    target: {value: "2015-12-10"}
  });
  expect(inputDate.value).toBe("2015-12-10");

  expect(submitButton).toBeDisabled();

  const inputTimeOption = document.querySelector("#res-time .dropdown-content div");
  const inputTime = document.querySelector("#res-time .custom-select");
  const selectedTimeValue = inputTimeOption.innerHTML;
  fireEvent.click(inputTimeOption);
  expect(inputTime).toHaveTextContent(selectedTimeValue);

  expect(submitButton).toBeDisabled();

  const inputNumOfGuests = document.querySelector("[type='number']");
  fireEvent.change(inputNumOfGuests, {
    target: {value: "2"}
  });
  expect(inputNumOfGuests.value).toBe("2");

  expect(submitButton).toBeDisabled();

  const inputOcassionOption = document.querySelector("#occasion .dropdown-content div");
  const inputOcassion = document.querySelector("#occasion .custom-select");
  const selectedOcassionValue = inputOcassionOption.innerHTML;
  fireEvent.click(inputOcassionOption);
  expect(inputOcassion).toHaveTextContent(selectedOcassionValue);

  expect(submitButton).not.toBeDisabled();
});
