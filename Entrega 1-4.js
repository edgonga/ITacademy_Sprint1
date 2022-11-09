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

async function delayEmployee(idDelayEmployee) 
    se 
        try{
        
            const delayEmployee = await getEmployee(idDelayEmployee)
            console.log(delayEmployee)
        
        } catch(err) {
        console.log(err)

    }


delayEmployee(2)



const canaryTimetable = (peninsulaTime) => new Promise(resolve => setTimeout(resolve, (peninsulaTime*1000)- 1000))

const 