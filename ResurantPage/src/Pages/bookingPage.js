import pageLoader from "../pageLoader";

function loadBookingPage() {
  const BookingPage = document.createElement("div");
  BookingPage.textContent = "Booking Page";

  return BookingPage;
}

export default loadBookingPage;
