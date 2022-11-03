/*
-- Nivell 1
- Exercici 1
Crea una funció que retorni una Promise que invoqui la funció resolve()
o reject() que rep. Invoca-la passant-li les dues funcions de manera que 
imprimeixin un missatge diferent depenent de si la Promise es resol o no.
*/


const assistantDetails = {
    assistantName: 'Lucas',
    assistantID: '47737141W',
    assistantAge: 17,
    entranceTime: '2:37h',
    assistantState: 'borracho'

}
const discoEntrance = new Promise((resolve, reject) => {

    if(assistantDetails.assistantState != 'borracho' && assistantDetails.assistantAge > 17 ) {

        
        resolve()
        
    }   
        
        else {
        reject()
        
    }
});


discoEntrance
    .then(res => {
        console.log('Adelante')
    })
    .catch(err => {
        
        console.log('Vete por donde has venido')
    });



/*
-- Exercici 1
- Nivell 2
Crea una arrow function que rebi un paràmetre i una funció callback
 i li passi a la funció un missatge o un altre 
 (que s'imprimirà per consola) en funció del paràmetre rebut.
*/


function laVidaEsUnaBambola(min_number, max_number, jour, dia) {

    
    
        min_number = Math.ceil(min_number);
        max_number = Math.floor(max_number);
        jour = new Date();
        dia = jour.getDay();
        return Math.floor(Math.random() * (max_number - min_number) + min_number), dia;
        
        
        //Porque no puedo declarar la variable dia dentro de esta función 
        //y utilizarla como parámetro en la función de ganadorLoteria?
}
//Descomentar las dos lineas siguientes para que el código funcione
const jour = new Date();
let dia = jour.getDay();


ganadorLoteria = (dayOfTheWeek, numGanador) => {

    //hacer el if
    if (dayOfTheWeek > 6) {
        numGanador = String(numGanador)
        console.log(`El número premiado de la loteria es el ${numGanador}`)
    }   else {
        console.log('Hoy es fin de semana, hoy no hay sorteo')
    }
}

// Faig un delay de 2.5 segons perque aquest exercici no s'executi abans
// del primer exercici

setTimeout(() => {
    ganadorLoteria(dia, laVidaEsUnaBambola(1, 1000));
    }, 2500)




/*
-- Nivell 2
- Exercici 1
Donats els objectes employees i salaries, crea una arrow function 
getEmployee() que retorni una 
Promise efectuant la cerca en l'objecte pel seu id.
*/

let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
},{
    id: 3,
    name: 'Jeff Bezos'
}];
 
let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];

//console.log(employees[1][1])

// getEmployee = new Promise((resolve, reject) => {
//     if (employeeID > 0 && employeeID < 4) {
        
//     }
// })



var getEmployee = function (employeeID) {
    return new Promise((resolve, reject) => {
        
        if (employeeID > 0 && employeeID < 4) {
            resolve(console.log('Resolved'))
                //employees[employeeID]  + " - " + salaries[employeeID]));
        }   else {
            reject()//new Error("Este ID no existe"));
        }
    })
}

getEmployee(2)
    .then(res => {console.log(
        employees[employeeID]  + " - " + salaries[employeeID]);

    })
    .catch(err => {console.log('No resolved')

    })

