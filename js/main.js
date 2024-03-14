const burger = document.querySelector(".burger");
const items = document.querySelector(".nav-items");
burger.addEventListener("click", () => {
  items.classList.toggle("show");
  //   console.log(burger);
});
