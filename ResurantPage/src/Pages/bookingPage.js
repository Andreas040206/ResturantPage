function loadBookingPage() {
  const BookingPage = document.createElement("div");
  BookingPage.classList.add("bookingPage");

  const sorryElement = document.createElement("div");
  sorryElement.classList.add("sorryElement");
  sorryElement.textContent = "Sorry bambino...";

  BookingPage.appendChild(sorryElement);

  return BookingPage;
}

export default loadBookingPage;
