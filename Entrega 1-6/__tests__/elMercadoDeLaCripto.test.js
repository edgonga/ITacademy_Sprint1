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
    test("El console log es llamado dos veces", async() => {
        const consoleSpy = jest.spyOn(console, "log")
        const mockCallback = jest.fn().mockReturnValue(3000)
        await elMercadoDeLaCripto(3000, mockCallback)
        expect(consoleSpy).toHaveBeenCalledTimes(2)
        consoleSpy.mockRestore()
    })

    test("El console log es llamado con el parámetro correcto", async() => {
        const consoleSpy = jest.spyOn(console, "log")
        const mockCallback = jest.fn().mockReturnValue(3000)
        await elMercadoDeLaCripto(3000, mockCallback)
        expect(consoleSpy).toHaveBeenCalledWith("Ayer el precio del bitcoin era de 3000€")
        // Mirar código comentado de elMercadoDeLaCripto.js
        // cuando añadimos la propiedad, en el testing, nos devuelve undefined
        // sin la propiedad, nos devuelve el número pero las dos veces igual, sin ser el doble
        // Sin embargo, con la propiedad ejecutando el archivo app, se da el comportamiento esperado
        // parece que en el testing no se esté esperando los 3 seg y por lo tanto, no se calcule el doble en dailyDay.js
        consoleSpy.mockRestore()
    })

    test("El console log es llamado por última vez con el doble del parámetro", async() => {
        const consoleSpy = jest.spyOn(console, "log")
        const mockCallback = jest.fn().mockReturnValue(3000)
        await elMercadoDeLaCripto(3000, mockCallback)
        expect(consoleSpy).toHaveBeenLastCalledWith("Hoy el precio del bitcoin es de 6000€")
        // 
        consoleSpy.mockRestore()
    })
})
