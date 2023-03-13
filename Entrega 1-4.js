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


const getSalary = (employeeResult) => {
    return new Promise((resolve, reject) => {

        if (typeof employeeResult !== 'object') {
            reject('El parámetro no es un objeto o el índice no existe')
        }
        const salarySelected = salaries.find(salary => salary.id == employeeResult.id)
        if (salarySelected) {
            resolve(salarySelected.salary)
        }
    })

}


/*
-- Nivell 1
- Exercici 1
Crea una funció asíncrona que rebi un id d'empleat/da i imprimeixi per 
pantalla el nom de l'empleat/da i el seu salari, usant les funcions 
getEmployee() i getSalary() que has definit a la tasca anterior.
*/

async function getAsyncID(asyncID) {
    try{    
        const employeeAsync = await getEmployee(asyncID);
        const salaryAsync = await getSalary(employeeAsync.id);
        console.log(`El salario de ${employeeAsync.name} es de ${salaryAsync.salary}€`);
    }  catch(err) {
        if (typeof(asyncID) !== "number") {
            console.log("El parámetro debe ser un número entero")
        }
        if (asyncID > 3 || asyncID < 1) {
            console.log("El parámetro debe estar entre 1 y 3")
        }



    }}

getAsyncID(1)


/*
-- Nivell 1
- Exercici 2
Crea una nova funció asíncrona que cridi a una altra que retorni una 
Promise que efectuï la seva funció resolve() després 
de 2 segons de la seva invocació.
*/


const canaryDelay = (peninsulaHour) => {
    return new Promise((resolve, reject) => {
        const canaryHour = peninsulaHour
        if (typeof peninsulaHour !== 'number') {
            reject("El parámetro esperado es una hora del día")
        }
        if (peninsulaHour > 24 || peninsulaHour < 1) {
            reject("La hora debe estar entre la 1h y las 24h")
        }
        if (peninsulaHour) { 
            
            setTimeout(() => {
                resolve(canaryHour)
            }, 1000)
    }
        else {
            reject("Error")
        }

    })
}
      


async function whatTimeIs(currentHour) {
    try{
        
        const asyncPeninsulaHour = await canaryDelay(currentHour)
        console.log(`En la Peninsula son las ${asyncPeninsulaHour}h`)
        const asyncCanaryHour = await canaryDelay(asyncPeninsulaHour)
        console.log(`Mientras que en las Canarias son las ${asyncCanaryHour -1}h`)
    }   catch(err) {
        console.log(err)
    }}


whatTimeIs(12);


/*
-- Nivell 2
- Exercici 1
Crea una funció que retorni el doble 
del número que li passa com a paràmetre després de 2 segons.
*/


const dailyDay = (bitcoinValue) => {
    return new Promise((resolve, reject) => {
        

        if(bitcoinValue) {
            setTimeout(() => {
                resolve({
                    rawNumber: bitcoinValue,
                    doubleNumber: bitcoinValue *2
                })
            }, 3000)
    }
        else {
            reject("El bitcoin es una estafa piramidal")
        }
    })
}


async function elMercadoDeLaCripto(bitcoin) {
    try{
        const yesterdayBitcoin = await dailyDay(bitcoin)
        console.log(`Ayer el precio del bitcoin era de ${yesterdayBitcoin.rawNumber}€`)
        const todayBitcoin = await dailyDay(bitcoin)
        console.log(`Hoy el precio del bitcoin es de ${todayBitcoin.doubleNumber}€`)
    }   catch(err) {
        console.log(err)
    }}


elMercadoDeLaCripto(20000)


/*
Crea una altra funció que rebi tres números i calculi la suma 
dels seus dobles fent servir la funció anterior.
*/

async function sumOfDoubles(num1, num2, num3) {
    try{
        const asyncNum1 = await dailyDay(num1)
        const asyncNum2 = await dailyDay(num2)
        const asyncNum3 = await dailyDay(num3)
        console.log(asyncNum1.doubleNumber + asyncNum2.doubleNumber + asyncNum3.doubleNumber)

    }   catch(err) {
        console.log(err)
    }
}

sumOfDoubles(2, 4, 6)


/*
- Nivell 3
-- Exercici 1
Força i captura tants errors com puguis dels nivells 1 i 2.
*/

getAsyncID("hola") // Capturar que el parámetro no sea un number
getAsyncID(4) // Capturar que no está entre 1 y 3
whatTimeIs(25) // Capturar que la hora no sea dentro de las 24h
whatTimeIs(true) // Capturar que el parámetro no sea un number


module.exports = canaryDelay
module.exports = whatTimeIs
module.exports = dailyDay
module.exports = elMercadoDeLaCripto
