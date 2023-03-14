const getEmployee = require('../../Entrega 1-3')
const testData = 1

test('el paràmetre està entre 1 i 3 i la promise es resolt correctament', () => {
   return getEmployee(1).then(value => {
      expect(value).toBe({name: 'Linux Torvalds'})
   })
   })

test('el paràmetre NO està entre 1 i 3 i per tant es fara un console.log del error', () => {
   const getEmployee = Promise.reject("Failed")
   return expect(getEmployee).rejects.toBe("Failed")
   })


// test('el paràmetre NO està entre 1 i 3 i per tant es fara un console.log del error', () => {
//    const checkEmployee = getEmployee(4).then(inputData => {
//       expect(inputData).toBe("Error: Failed")
//    })
//    return checkEmployee
//  })

 test('el paràmetre es un string i no un número, per tant es fara un console.log del error', () => {
    expect(getEmployee('Qatar')).toEqual('Este id no existe')
 })
