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

function reversedData(){
    //obtengo la reversa del numero de tarjeta que introdujo el usuario
    arrayReversed = arrayNumberCard.reverse();
    console.log(arrayReversed);
}

function luhnAlgorithm() {
    for(i = 0; i < arrayReversed.length; i++){
        //Verifico si es posicion par o no, si es, lo multiplico por 2
        if(i%2 == 0){ 
            arrayNumberCard[i] = arrayReversed[i] * 2;
        }
    }
    console.log(arrayNumberCard);
}

sendData.addEventListener("click", getData);
sendData.addEventListener("click", reversedData);
sendData.addEventListener("click", luhnAlgorithm);