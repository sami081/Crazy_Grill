const menu = document.getElementById("menu");
const link = document.getElementById("link");
const title = document.getElementById("title");
const reservation = document.getElementById("reservation");
const titleReservation = document.querySelector(".title-reservation")
 
menu.addEventListener("click", () => {
  link.innerHTML = `
<a href="./index.html">Accueil</a>
<a href="./carte.html">Carte</a>
`;
  link.classList.toggle("link");
  // title.classList.toggle("title2");
  // reservation.classList.toggle("reservation2")
  titleReservation.classList.toggle("titleReservation2")
});
let lo = []
let te = ["sami", "bilel", "marion", "constantine"]
for (let i = 0; i<te.length; i++){
  lo.push(te[i].length);
  console.log(lo);
}