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

module.exports = {
    getSalary,
    salaries
}