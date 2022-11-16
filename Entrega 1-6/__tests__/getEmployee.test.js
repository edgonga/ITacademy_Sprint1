const getEmployee = require('../../Entrega 1-3')

test('el paràmetre està entre 1 i 3', () => {
    expect(getEmployee(2)).toBe(salarySelected)
 })

test('el paràmetre NO està entre 1 i 3 i per tant es fara un console.log del error', () => {
    expect(getEmployee(5)).toEqual('Debes introducir un id del 1 al 3')
 })

 test('el paràmetre es un string i no un número, per tant es fara un console.log del error', () => {
    expect(getEmployee('Qatar')).toEqual('Este id no existe')
 })