const promiseFile = require('../../Entrega 1-3')

test('el objeto que recibe está dentro del rango de 1 a 3', () => {
   for (index in promiseFile.salaries) {   
      return promiseFile.getSalary(promiseFile.employees[index]).then(resolve => {
         expect(resolve).toBe(promiseFile.salaries[index].salary)
      })}
      })

test('el objeto que recibe está fuera del rango correspondiente o el parámetro no es un objeto', () => {
   return promiseFile.getSalary(promiseFile.employees[6]).catch(reject => {
      expect(reject).toBe("El parámetro no es un objeto o el índice no existe")
   })
})

test('el objeto que recibe está fuera del rango correspondiente o el parámetro no es un objeto', () => {
   return promiseFile.getSalary("hola").catch(reject => {
      expect(reject).toBe("El parámetro no es un objeto o el índice no existe")
   })
})
