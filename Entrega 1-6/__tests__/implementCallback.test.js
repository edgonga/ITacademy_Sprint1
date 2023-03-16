const {implementCallback} = require ('../app/implementCallback')
const {callbackFunction} = require ('../app/callbackFunction.js')

test("La callback es llamada con el parámetro correcto", () => {
    const mockedCallback = jest.fn(callbackFunction)
    implementCallback(mockedCallback, "5")
    expect(mockedCallback).toHaveBeenCalledWith("5")
})

test('La callback es llamada y la función matriz devuelve el resultado correcto', () => {
    const mockedCallback = jest.fn(callbackFunction)
    implementCallback(mockedCallback, "5")
    expect(mockedCallback.mock.results[0].value).toBe("Es correcto")
})

test("La callback es llamada y el parámetro de la callback hace entrar a la funcíon matriz dentro del else", () => {
    const mockedCallback = jest.fn(callbackFunction)
    implementCallback(mockedCallback, 1)
    expect(mockedCallback.mock.results[0].value).toBe("Incorrecto")
})

describe('testear implementCallback con un bucle de parámetros que la función espera', () => {
    for (let i = -2; i <= 6; i++) {
        const callbackParameter = i.toString()
        const expected = i > 3 && typeof(i) === 'number' ? 'Es correcto': 'Incorrecto'


        test(`La función callback deberá ser ejecutada con ${callbackParameter} y devolver ${expected}`, () => {
            const mockedCallback = jest.fn(callbackFunction)
            implementCallback(mockedCallback, callbackParameter)
            expect(mockedCallback).toHaveBeenCalledWith(callbackParameter)
            expect(mockedCallback.mock.results[0].value).toEqual(expected)
        })
    }
})

const cases = [["hola", "Incorrecto"], [true, "Incorrecto"], [[2,3,4], "Incorrecto"]]
let index = 0

describe('testear implementCallback con un bucle de parámetros que la función espera', () => {
    test.each(cases)(
        `La función callback deberá ser ejecutada con ${cases[index][0]} y devolver ${cases[index][1]}`,
        (parameter, expected) => {
            const mockedCallback = jest.fn(callbackFunction)
            implementCallback(mockedCallback, parameter)
            expect(mockedCallback).toHaveBeenCalledWith(parameter)
            expect(mockedCallback.mock.calls[0].value).toEqual(expected)
            index = index+1
        }
    )
})
