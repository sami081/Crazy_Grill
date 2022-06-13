const confirm = document.getElementById("confirm")
console.log(confirm);
let contactStorage = JSON.parse(localStorage.getItem("contact"))

let lastNames = contactStorage.lastNames;
let firstNames = contactStorage.firstNames;
let tels = contactStorage.tels;
let emails = contactStorage.emails;
let date = contactStorage.bookingsDates;

let bookingsHours = contactStorage.bookingsHours;
let peopleNumbers = contactStorage.peopleNumbers;
let messages = contactStorage.messages;
const dateDestructuring = (chaine) => {
 let [y, m, d] = date.split("-")
 return [d, m, y].join("/")
}
let dates = dateDestructuring(date);
if (messages == undefined) {
confirm.innerHTML  += 
`
<h2 id ="confirm-title"> Votre réservation est confirmé </h2> <div class ="contact"> <span>au nom de :<h3> ${lastNames}, ${firstNames},</h3></span> <span>pour la date du :<h3> ${ dates} à ${bookingsHours} h 00</h3> </span> <span>pour une table de: <h3>${peopleNumbers}  personnes.</h3></span><br/> <span><p>Un email de confirmation ainsi qu'un sms va vous être envoyé d'ici quelques instants</p> </span> <br/> <span><h3> email : ${emails}</h3> <h3> tél : ${tels} </h3></span> <br/>
`}else{
  confirm.innerHTML  += 
`
<h2 id ="confirm-title"> Votre réservation est confirmé </h2> <div class ="contact"> <span>au nom de :<h3> ${lastNames}, ${firstNames},</h3></span> <span>pour la date du :<h3> ${ dates} à ${bookingsHours} h 00</h3> </span> <span>pour une table de: <h3>${peopleNumbers}  personnes.</h3></span><br/> <span><p>Un email de confirmation ainsi qu'un sms va vous être envoyé d'ici quelques instants</p> </span> <br/> <span><h3> email : ${emails}</h3> <h3> tél : ${tels} </h3></span> <br/> <span> <p> "${messages}"</p></span>
`}