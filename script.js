const inputCard = document.getElementById("inputCard");
const sendData = document.getElementById("sendData");
let cardNumber = []
let arrayCard = [];
let arrayReversed;
let arrayCardToString;

function luhnAlgorithm() {
    //Obtengo el numero de la tarjeta del usuario y la almaceno en un array
    // cardNumber = Array.from(inputCard.value);
    // console.log(cardNumber);
    cardNumber = inputCard.value;
    for (i = 0; i < cardNumber.length; i++){ 
        arrayCard[i] = cardNumber[i];
    }

    //obtengo la reversa del numero de tarjeta que introdujo el usuario
    arrayReversed = arrayCard.reverse();

    for(i = 0; i < arrayReversed.length; i++){
        //Verifico si es posicion par o no, si es, lo multiplico por 2
        if(i%2 !== 0){ 
            arrayCard[i] = arrayReversed[i] * 2;
        }
    }
    console.log(arrayCard);
    //luego sumo los digitos de los numeros mayores a 10
    arrayCardToString = arrayCard.toString();
    arrayCard = arrayCardToString.split(",")
    console.log(arrayCard)
    for (i = 0; i < arrayCard.length; i++){
        if(arrayCard[i].length === 2){ 
            arrayCard[i] = parseInt(arrayCard[i][0]) + parseInt(arrayCard[i][1]);
        } else {
            arrayCard[i] = parseInt(arrayCard[i]);
        }
    }
}

sendData.addEventListener("click", luhnAlgorithm);