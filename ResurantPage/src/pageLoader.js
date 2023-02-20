import homePage from "./Pages/homePage";
import bookingPage from "./Pages/bookingPage";
import menuPage from "./Pages/MenuPage";
import removeChildNodes from "./Tools/RemoveAllChildren";
import header from "./Pages/header";

function loadPage(currentPage) {
  removeChildNodes(document.body);
  const content = document.createElement("div");
  content.appendChild(header(currentPage));
  content.setAttribute("id", "content");
  content.appendChild(currentPageChecker(currentPage));

  function currentPageChecker(theCurrentPage) {
    if (theCurrentPage === "homePage") {
      return homePage();
    } else if (theCurrentPage === "bookingPage") {
      return bookingPage();
    } else if (theCurrentPage === "menuPage") {
      return menuPage();
    }
  }

  const cntent = document.createElement("div");

  document.body.appendChild(content);
}

export default loadPage;
