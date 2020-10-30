const inputCard = document.getElementById("inputCard");
const sendData = document.getElementById("sendData");
let cardNumber = []
let arrayNumberCard = [];
let arrayReversed;

function getData() {
    //Obtengo el numero de la tarjeta del usuario y la almaceno en un array
    // cardNumber = Array.from(inputCard.value);
    // console.log(cardNumber);
    cardNumber = inputCard.value;
    for (i = 0; i < cardNumber.length; i++){ 
        arrayNumberCard[i] = cardNumber[i];
    }
    console.log(arrayNumberCard);
} 
sendData.addEventListener("click", getData);