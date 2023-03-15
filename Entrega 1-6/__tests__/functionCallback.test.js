/*
Crea un arxiu amb les funcions sumar, restar, multiplicar i 
dividir dos o més operands. Testeja la correcta execució d'aquestes funcions.
*/

const {callbackFunction} = require('../../Entrega 1-3')

test('se recibe un número mayor de 3, por lo tanto imprime el mensaje dentro del if', () => {
   expect(callbackFunction(6)).toBe("Es correcto")
})

test('se recibe un número menor de 3, por lo tanto imprime el mensaje del else', () => {
   expect(callbackFunction(1)).toBe("Incorrecto")
})

test('se recibe un parámetro que no es un número', () => {
   expect(callbackFunction("hola")).toBe("Incorrecto")
})

test('se recibe un string, pero es un número, aunque más pequeño que 3', () => {
   expect(callbackFunction("1")).toBe("Incorrecto")
})

test('se recibe un string, pero es un número y es más grande que 3', () => {
   expect(callbackFunction("4")).toBe("Es correcto")
})