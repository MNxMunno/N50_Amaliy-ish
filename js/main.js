const burger = document.querySelector(".burger");
const items = document.querySelector(".nav-items");
burger.addEventListener("click", () => {
  items.classList.toggle("show");
  //   console.log(burger);
});

const btnLike = document.querySelector(".btn-like");
const like = document.querySelector(".like");

btnLike.addEventListener("click", () => {
  like.classList.toggle("red")
});
