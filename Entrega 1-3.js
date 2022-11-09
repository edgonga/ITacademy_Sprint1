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
        
        

}

const jour = new Date();
let dia = jour.getDay();


ganadorLoteria = (dayOfTheWeek, numGanador) => {


    if (dayOfTheWeek > 6) {
        numGanador = String(numGanador)
        console.log(`El número premiado de la loteria es el ${numGanador}`)
    }   else {
        console.log('Hoy es fin de semana, hoy no hay sorteo')
    }
}

// Faig un delay de 0.5 segons perque aquest exercici no s'executi abans
// del primer exercici

setTimeout(
    () => {
    ganadorLoteria(dia, laVidaEsUnaBambola(1, 1000));
    }, 2000)




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




// const employeeSelected = employees.filter((name) => {
//     return name.id == employeeID
// })
// const salarySelected = salaries.filter((salary) => {
//     return salary.id == employeeID
//})




const getEmployee =  (employeeID) => {
    return new Promise((resolve, reject) => {

        const employeeSelected = employees.find(name => name.id == employeeID)
        
        if (employeeSelected) {
            
            

            resolve(employeeSelected)
                
                
                    
        }   else { 
                
            reject('Failed')
        }
    })
}

getEmployee(3)
    .then((res) => 
        console.log(res)
    )
    .catch((error) => console.log("Error: " + error))



/*
-- Nivel 2
- Exercici 2
Crea una altra arrow function getSalary() similar a l'anterior 
que rebi com a paràmetre un objecte employee i retorni el seu salari.
*/


const getSalary = (employeeResult) => {
    return new Promise ((resolve, reject ) => {
        const salarySelected = salaries.find(salary => salary.id == employeeResult)
        
        if (employeeResult) {

            resolve(salarySelected)
        }
            else {
                reject("Despedido")
            }
    })

}

getSalary(getEmployee(1)
    .then((res) => {
        console.log(res)
    })
    .catch((error) => {
        console.log(error)
    }))
    


/*
-- Nivell 2
- Exercici 3
Invoca la primera funció getEmployee() i després getSalary()
 niant l'execució de les dues promises de manera que es retorni 
 per la consola el nom de l'empleat/da i el seu salari.
*/
    

getEmployee(2)
    .then((res1) => {
        getSalary(2)
            .then(res2 =>{
                console.log(res1.name + ' ' + res2.salary)
            })
    })


/*
-- Nivell 3
- Exercici 1
Fixa un element catch a la invocació del 
nivell anterior que capturi qualsevol error i el
 mostri per la consola.
*/

getEmployee()
    .then((res1) => {
        getSalary()
            .then(res2 =>{
                console.log(res1.name + ' ' + res2.salary)
            })
            .catch(error2 =>{
                console.log('Super erreur' + error2)
            })
    })
    .catch(error1 =>{
        console.log('Erreur' + error1)
    })





