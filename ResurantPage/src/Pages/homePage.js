import pageLoader from "../pageLoader";

function loadHomePage() {
  const homePage = document.createElement("div");
  homePage.textContent = "Home Page";

  return homePage;
}

export default loadHomePage;
