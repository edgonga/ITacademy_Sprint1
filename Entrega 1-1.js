/*
- Nivel 1 
-- Exercici 1
Crea una funció que mostri per consola el nom d'usuari/ària en 
invocar-la passant-li el nom com a paràmetre.
*/

function namePrompter (userName) {
    console.log('Hello Mr. ' + userName);
}

namePrompter('Eduardinho');

/*
- Nivel 2
-- Exercici 1
Mostra per consola el nom i cognoms de l'usuari/ària mitjançant 
template literals, guardant-los en variables i referenciant-les 
en la impressió del missatge.
*/

let surname = "Curie"
let userName = "Marie"

console.log(`Bienvenid@ ${userName} ${surname}`);

/*
- Nivel 2
-- Exercici 2
Invoca una funció que retorni un valor des de dins d'una template literal.
*/

function templateNamePrompter (userNumber) {
    return userNumber
}

console.log(`El valor es ${templateNamePrompter(3)}`)

/*
- Nivel 3
-- Exercici 1
Crea una matriu de deu funcions i emplena-la mitjançant un bucle 
de manera que cada funció compti del 0 al 9 per la consola. 
Invoca cada funció de l'array iterativament. Haurà de mostrar-se 
per consola el compte del 0 al 9 deu vegades.
*/

let loopCount = 1

function countFunction() {
    for (let index = 0; index < 10; index++) {
        console.log(index)
    }
    console.log(`Llamada número ${loopCount}`);
    loopCount += 1
}

let countArray = [countFunction(), 
    countFunction(), 
    countFunction(),
    countFunction(),
    countFunction(),
    countFunction(),
    countFunction(),
    countFunction(),
    countFunction(),
    countFunction()]

/*
--Nivell 3
- Exercici 2
Crea una funció anònima autoinvocable igualada a una variable que mostri per consola
el nom de l'usuari/ària a rebut com a paràmetre.
*/

const anonymousName = (function (userName) {
    console.log(userName);
}) ("Eduardo");
