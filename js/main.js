const burger = document.querySelector(".burger");
const items = document.querySelector(".nav-items");
burger.addEventListener("click", () => {
  items.classList.toggle("show");
  //   console.log(burger);
});

const btnLike = document.querySelector(".btn-like");
const like = document.querySelector(".like");

btnLike.addEventListener("click", () => {
  like.classList.toggle("red");
});

//////////////////////////////////////////////////////////////////////////////
const cards = document.querySelector(".cards");
import { products } from "./server.js";
localStorage.setItem("products", JSON.stringify(products));

const data = JSON.parse(localStorage.getItem("products"));
// console.log(data);

function createCard(data) {
  while (cards.firstChild) {
    cards.firstChild.remove();
  }
  data.forEach((user, index) => {
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
    <div class="card">
                <img src="${user.thumbnail}" alt="img">
                <div class="card-content">
                  <button class="sale">SALE</button>
                  <button class="gift">🎁 Подарок</button>
                  <b>${user.discountPercentage}</b>
                  <h4>${user.description}</h4>
                  <p class="price">${user.price}₽ <del>${user.stock}₽</del></p>
                </div>
              </div>
    `;
    cards.appendChild(card);
  });
}

createCard(data);
