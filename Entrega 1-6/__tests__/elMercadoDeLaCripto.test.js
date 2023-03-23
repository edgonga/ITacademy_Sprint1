/*
Verifica mitjançant tests l'execució de l'exercici
 Async / Await N2 E1 utilitzant Jest Fake Timers.
*/

const {elMercadoDeLaCripto} = require('../app/elMercadoDeLaCripto')

// jest.useFakeTimers();
// jest.spyOn(global, 'setTimeout')
describe("Callback", () => {
    test("La primera ejecucuón de la callback recibe el parámetro que se espera", async() => {
        const mockedCallback = jest.fn().mockReturnValue(45000)
        await elMercadoDeLaCripto(45000, mockedCallback)
        expect(mockedCallback).toHaveBeenCalledWith(45000)
    })
    
    test("La segunda ejecución de la callback recibe el doble del parámetro introducido", async() => {
        const mockCallback = jest.fn().mockReturnValue(3000)
        await elMercadoDeLaCripto(3000, mockCallback)
        expect(mockCallback).toHaveBeenLastCalledWith(6000)
    })
    
    test("La callback es llamada dos veces", async() => {
        const mockCallback = jest.fn().mockReturnValue(55)
        await elMercadoDeLaCripto(55, mockCallback)
        expect(mockCallback).toHaveBeenCalledTimes(2)
    })
})

describe("Console log del interior", () => {
    test("")
})

