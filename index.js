const menu = document.getElementById("menu");
const link = document.getElementById("link");
menu.addEventListener("click", () => {
link.innerHTML= `
<a href="./index.html">Accueil</a>
<a href="./carte.html">Carte</a>
`
link.classList.toggle('link')
})