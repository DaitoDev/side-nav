const sideBar = document.querySelector(".side-bar");
const main = document.querySelector("main");

const toggleBtn = sideBar.addEventListener("click", () => {
  sideBar.classList.toggle("toggle-nav");
});

main.addEventListener("click", () => {
  sideBar.classList.remove("toggle-nav");
});
