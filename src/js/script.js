"use strict";

const movieDB = {
  movies: [
    "Логан",
    "Лига справедливости",
    "Ла-ла лэнд",
    "Одержимость",
    "Скотт Пилигрим против...",
  ],
};
// const del = document.getElementsByClassName("promo__adv");
// del[0].remove();
// const zamina = document.getElementsByClassName("promo__genre");
// // console.log(zamina[0]);
// // let qwer = "dra,a";
// // const zamina1=document.createDocumentFragment;
// // qwer.innerHtml = "драма";
// zamina[0].textContent = "Драма";
// // del.forEach((element) => {
// //   element.remove();
// // });
// // const image = document.querySelector(".promo__bg");
const filmu = document.querySelector(".promo__interactive-list");
// movieDB.movies.sort();
// movieDB.movies.forEach(function zmina(value, index) {
//   filmu[index].innerHTML = value;
// });
// console.log(filmu[0]);
const btn = document.querySelector("form.add");
btn.addEventListener("submit", (event) => {
  submit(event);
});
function submit(event) {
  event.preventDefault();
  console.log(event);

  if (event.target[0].value.length > 21) {
    event.target[0].value = event.target[0].value.slice(0, 22) + "...";
  }
  movieDB.movies.push(event.target[0].value);
  // movieDB.movies[movieDB.movies.length-1]
  const hui = document.createElement("div");
  hui.innerHTML = `<li class="promo__interactive-item">${event.target[0].value}
<div class="delete"></div>
</li>`;
  filmu.appendChild(hui);
}
