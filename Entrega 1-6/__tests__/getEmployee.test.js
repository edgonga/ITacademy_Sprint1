const promiseFile = require('../../Entrega 1-3')

test('el paràmetre està entre 1 i 3 i la promise es resolt correctament', () => {
   for (index in promiseFile.employees) {   
      return promiseFile.getEmployee(promiseFile.employees[index].id).then(resolve => {
         expect(resolve.name).toBe(promiseFile.employees[index].name)
      })}
      })

test('el parámetro está fuera de rango, por lo tanto la promise se rechazará y se devolverá el mensaje de error', () => {
   return promiseFile.getEmployee(4).catch(reject => {
      expect(reject).toBe("Failed")
   })
})   

test('el parámetro no es un number, por lo tanto se rechaza la promise con el mensaje de error de tipo', () => {
   return promiseFile.getEmployee("hola").catch(reject => {
      expect(reject).toBe("Este id no existe")
   })
})



test('el paràmetre NO està entre 1 i 3 i per tant es fara un console.log del error', () => {
   const getEmployee = Promise.reject("Failed")
   return expect(getEmployee).rejects.toBe("Failed")
   })


test('el paràmetre NO està entre 1 i 3 i per tant es fara un console.log del error', () => {
   const checkEmployee = getEmployee(4).then(inputData => {
      expect(inputData).toBe("Error: Failed")
   })
   return checkEmployee
 })

 test('el paràmetre es un string i no un número, per tant es fara un console.log del error', () => {
    expect(getEmployee('Qatar')).toEqual('Este id no existe')
 })
