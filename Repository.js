/*
-- Nivell 2
- Exercici 1
Crea una arrow function que, rebent un paràmetre, retorni 
un objecte amb un atribut que tingui com a valor el paràmetre rebut.
*/



// function person (first, last, age) {
    
//     this.firstName = first
//     this.lastName = last
//     this.age = age
    

// };

// introduction ((newName, newLastName, newAge) => {
//     const newPerson = new person(newName, newLastName, newAge)
//     console.log(`Hola, mi nombre es ${newName} ${newLastName} y tengo ${newAge} años`)
// })


// introduction("Leonardo", "Da Vinci", 88, newPerson)



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
                
                
                    
        }   else { 
                
            reject('Failed')
        }
    })
}

getEmployee(7)
    .then((res) => 
        console.log(res)
    )
    .catch((error) => console.log("Error: " + error))




console.log(typeof(employees[1]))


    const getSalary = (employeeResult) => {
        return new Promise ((resolve, reject) => {
        
            if (typeof employeeResult !== 'object') {
                reject('El parámetro introducido debe ser un object')
            }
            const employeeResultID = employeeResult.id
            const salarySelected = salaries.find(salary => salary.id == employeeResultID)
            
            
            if (employeeResult) {
                
    
                resolve(salarySelected.salary)
            }
                else {
                    reject("Despedido")
                }
        })
    
    }
    


    getSalary(employees[1])
    //getSalary(getEmployee(1))
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
    

// getEmployee(3)
//     .then((res1) => {
//         getSalary(getEmployee(2))
//             .then(res2 =>{
//                 console.log(res1.name + ' ' + res2)
//             })
//     })

// getSalary(getEmployee(3))
//     .then((res) => {
//         console.log(res)
//     })
//     .catch((error) => {
//         console.log(error)
//     })