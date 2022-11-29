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



const lucasAge = assistantDetails.assistantAge
const lucasState = assistantDetails.assistantState

const discoEntrance = (isDrunk, isUnderEighteen) => {
    return new Promise((resolve, reject) => {

        if (isDrunk != 'borracho' && isUnderEighteen > 17) {


            resolve('Adelante')

        }

        else {
            reject('Vete por donde has venido')

        }
    });
}

discoEntrance(lucasState, lucasAge)
    .then(res => {
        console.log(res)
    })
    .catch(err => {

        console.log(err)
    });


/*
-- Exercici 1
- Nivell 2
Crea una arrow function que rebi un paràmetre i una funció callback
 i li passi a la funció un missatge o un altre 
 (que s'imprimirà per consola) en funció del paràmetre rebut.
*/


callbackFunction = (parametro) => {
    if (parametro > 3) {
        console.log("Es correcto")
    }
    else {
        console.log("Incorrecto")
    }
}

implementCallback = (callback, parametroCallback) => {
    callbackFunction(parametroCallback)
}

implementCallback(callbackFunction, 2)



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
}, {
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









const getEmployee = (employeeID) => {
    return new Promise((resolve, reject) => {

        if (typeof employeeID !== 'number') {
            reject('Este id no existe')

        }
        const employeeSelected = employees.find(name => name.id == employeeID)


        if (employeeSelected) {



            resolve(employeeSelected)



        } else {

            reject('Failed')
        }
    })
}

getEmployee(2)
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
    return new Promise((resolve, reject) => {

        if (typeof employeeResult !== 'object') {
            reject('Dentro del parámetro introducido debe tener un id que sea un número')
        }
        const employeeResultID = employeeResult.id
        const salarySelected = salaries.find(salary => salary.id == employeeResultID)



        if (salarySelected) {


            resolve(salarySelected.salary)
        } else {
            reject("Despedido")
        }
    })

}

getSalary(employees[1])
    .then((res) => {
        console.log(res)
    })
    .catch((error) => {
        console.log(error)
    })



/*
-- Nivell 2
- Exercici 3
Invoca la primera funció getEmployee() i després getSalary()
 niant l'execució de les dues promises de manera que es retorni 
 per la consola el nom de l'empleat/da i el seu salari.
*/


getEmployee(3)
    .then((res1) => {
        getSalary(res1)
            .then(res2 => {
                console.log({
                    name: res1.name,
                    salary: res2
                })
            })
    })




/*
-- Nivell 3
- Exercici 1
Fixa un element catch a la invocació del 
nivell anterior que capturi qualsevol error i el
 mostri per la consola.
*/

getEmployee(salaries[1])
    .then((res1) => {
        getSalary()
            .then(res2 => {
                console.log(res1.name + ' ' + res2.salary)
            })
            .catch(error2 => {
                console.log('Super erreur' + error2)
            })
    })
    .catch(error1 => {
        console.log('Erreur ' + error1)
    })





module.exports = callbackFunction
module.exports = implementCallback
module.exports = getEmployee
module.exports = getSalary

