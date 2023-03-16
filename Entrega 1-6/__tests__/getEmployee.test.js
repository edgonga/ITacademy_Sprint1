const promiseFile = require('../app/getEmployee')

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


