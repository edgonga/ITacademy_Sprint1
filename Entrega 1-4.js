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


const getEmployee =  (employeeID) => {
    return new Promise((resolve, reject) => {

        const employeeSelected = employees.find(name => name.id == employeeID)
        
        if (employeeSelected) {
            
            

            resolve(employeeSelected)
                
                
                    
        }   else { 
                
            reject(new Error('Failed'))
        }
    })
}


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
        console.log(`${employeeAsync.name} ${salaryAsync.salary}`);
    }  catch(err) {
        console.log(err)


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

        if(peninsulaHour) { 
            
            setTimeout(() => {
                resolve(canaryHour)
            }, 2000)
            
        
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
        const asyncCanaryHour = await canaryDelay(currentHour) -1
        console.log(`Mientras que en las Canarias son las ${asyncCanaryHour}h`)
    }   catch(err) {
        console.log(err)
    }}



whatTimeIs(12);
/*
-- Nivell 2
- Exercici 1
Crea una funció que retorni el doble 
del número que li passa com a paràmetre després de 2 segons.

Crea una altra funció que rebi tres números i calculi la suma 
dels seus dobles fent servir la funció anterior.
*/

const dailyDay = (bitcoinValue) => {
    return new Promise((resolve, reject) => {
        

        if(bitcoinValue) {
            setTimeout(() => {
                resolve(bitcoinValue)
            }, 2000)
    }
        else {
            reject("El bitcoin es una estafa piramidal")
        }
    })
}


async function elMercadoDeLaCripto(bitcoin) {
    try{
        const yesterdayBitcoin = await dailyDay(bitcoin)
        //const newDate = new Date
        //const today = () => console.log(Date.now())
        //const yesterday = () => console.log(today.getDate() -1);
        //console.log(`${yesterday()} --> precio de bitcoin era ${yesterdayBitcoin}€`)
        console.log(`Ayer el precio del bitcoin era de ${yesterdayBitcoin}€`)
        const todayBitcoin = await dailyDay(bitcoin) * 2
        //console.log(`${today()} --> precio del bitcoin es de ${todayBitcoin}€`)
        console.log(`Hoy el precio del bitcoin es de ${todayBitcoin}€`)
    }   catch(err) {
        console.log(err)
    }}


elMercadoDeLaCripto(20000)








// bitcoinValue = 20000
// console.log(bitcoinValue);

// const elMercadoDeLaCripto = (bitcoinPrice) = async () => {
//     console.log(`Ayer día 9 de noviembre, el precio de bitcoin era ${bitcoinPrice}€`)
//     await dailyDay(bitcoinPrice)
//     //bitcoinPrice = bitcoinPrice * 2
//     console.log(`Hoy día 10 de noviembre, el precio del bitcoin es de ${bitcoinPrice}€`)
// }

// elMercadoDeLaCripto(bitcoinValue);