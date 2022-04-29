const menu = document.getElementById("menu");
const link = document.getElementById("link");
const title = document.getElementById("title");
const reservation = document.getElementById("reservation");
 console.log(title);
menu.addEventListener("click", () => {
  link.innerHTML = `
<a href="./index.html">Accueil</a>
<a href="./carte.html">Carte</a>
`;
  link.classList.toggle("link");
  title.classList.toggle("title2");
  reservation.classList.toggle("reservation2")
});
