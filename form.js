const lastName = document.getElementById("lastName");
const firstName = document.getElementById("firstName");
const tel = document.getElementById("tel");
const email = document.getElementById("email")
const bookingDate = document.getElementById("date");
const bookingHour = document.getElementById("hour");
const peopleNumber = document.getElementById("number");
const message = document.getElementById("message")
const form = document.querySelector("form")
console.log(form);

let lastNames
let firstNames
let tels
let emails
let bookingsDates
let bookingsHours
let peopleNumbers
let messages

lastName.addEventListener("input", (e) => {
  lastNames = e.target.value;
  
})

firstName.addEventListener("input", (e) => {
  firstNames = e.target.value;
 
})
tel.addEventListener("input", (e) => {
  tels = e.target.value;

})
email.addEventListener("input", (e) => {
  emails = e.target.value;
 
})
bookingDate.addEventListener("input", (e) => {
 bookingsDates = e.target.value;
 
 
})
bookingHour.addEventListener("input", (e) => {
  bookingsHours = e.target.value;
  
 
})
peopleNumber.addEventListener("input", (e) => {
peopleNumbers = e.target.value;

 
})
message.addEventListener("input", (e) => {
 messages = e.target.value;
 console.log(messages);
 
})

form.addEventListener("submit", (e) => {
if(lastNames && firstNames && tels && emails && bookingsDates && bookingsHours && peopleNumbers) {
 const contact = {
lastNames,
firstNames,
tels,
emails,
bookingsDates,
bookingsHours,
peopleNumbers,
messages
 }
 localStorage.setItem("contact", JSON.stringify(contact))
 window.open("./confirmation.html#confirma")
}
})
