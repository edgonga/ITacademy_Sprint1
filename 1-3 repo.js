const employeeSelected = employees.filter((name) => {
    return name.id == employeeID
})
const salarySelected = salaries.filter((salary) => {
    return salary.id == employeeID
})    

let getEmployee = new Promise ((resolve, reject) => {
    let employeeID = 2
    
            if (employeeID > 0 && employeeID < 4) {
                resolve({
                    nameMessage: `El trabajador seleccionado es ${employeeSelected.name}`,  
                    salaryMessage: `con un sueldo de ${salarySelected.salary}`
                })
                    
            }   else {
                reject('Failed')
            }
    })


getEmployee()
    .then((nameMessage, salaryMessage) => {
        console.log(nameMessage + salaryMessage)
    })
    .catch((error) => console.log("Error: " + error))
