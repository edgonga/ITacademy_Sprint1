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


module.exports = {
    getEmployee,
    employees,
}