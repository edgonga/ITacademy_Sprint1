/*
- Nivel 1 
-- Exercici 1
Crea una funció que mostri per consola el nom d'usuari/ària en invocar-la passant-li el nom com a paràmetre.
*/


function namePrompter (user_name) {

    console.log('Hello ' + user_name);

}


namePrompter('Eduardinho');



/*
- Nivel 2
-- Exercici 1
Mostra per consola el nom i cognoms de l'usuari/ària mitjançant template literals, guardant-los en variables i referenciant-les en la impressió del missatge.
*/

var surname = "Curie"
var user_name = "Marie"

console.log(`Bienvenid@ ${user_name} ${surname}`);

/*
- Nivel 2
-- Exercici 2
Invoca una funció que retorni un valor des de dins d'una template literal.
*/


function templateNamePrompter (user_name) {

    console.log(`El valor es ${user_name}`);

}

user_value = "3";
user_name = user_value;

templateNamePrompter(user_value);

/*
- Nivel 3
-- Exercici 1
Crea una matriu de deu funcions i emplena-la mitjançant un bucle 
de manera que cada funció compti del 0 al 9 per la consola. 
Invoca cada funció de l'array iterativament. Haurà de mostrar-se 
per consola el compte del 0 al 9 deu vegades.
*/

var matrixFunctions = [
    function firstCount () {
        var counting1 = []
        for (var i = 0; i < 10; i++) {
            counting1.push(i);
        }
        console.log(counting1)
    }
    , function SecondCount () {
        var counting2 = []
        for (var i = 0; i < 10; i++) {
            counting2.push(i);
        }
        console.log(counting2)
    }
    , function ThirdCount () {
        var counting3 = []
        for (var i = 0; i < 10; i++) {
            counting3.push(i);
        }
        console.log(counting3)
    }
    , function FourthCount () {
        var counting4 = []
        for (var i = 0; i < 10; i++) {
            counting4.push(i);
        }
        console.log(counting4)
    }
    , function FifthCount () {
        var counting5 = []
        for (var i = 0; i < 10; i++) {
            counting5.push(i);
        }
        console.log(counting5)
    }
    , function SixthCount () {
        var counting6 = []
        for (var i = 0; i < 10; i++) {
            counting6.push(i);
        }
        console.log(counting6)
    }
    , function SeventhCount () {
        var counting7 = []
        for (var i = 0; i < 10; i++) {
            counting7.push(i);
        }
        console.log(counting7)
    }
    , function EighthCount () {
        var counting8 = []
        for (var i = 0; i < 10; i++) {
            counting8.push(i);
        }
        console.log(counting8)
    }
    , function NinethCount () {
        var counting9 = []
        for (var i = 0; i < 10; i++) {
            counting9.push(i);
        }
        console.log(counting9)
    }
    , function TenthCount () {
        var counting10 = []
        for (var i = 0; i < 10; i++) {
            counting10.push(i);
        }
        console.log(counting10)
    }

    

]

for (var i = 0; i < matrixFunctions.length; i++) {

    matrixFunctions[i];

}

//De momento no da error, pero, no devuelve los console.log de las funciones