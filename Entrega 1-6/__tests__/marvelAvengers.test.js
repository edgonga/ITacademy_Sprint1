/*
Verifica mitjançant tests la creació d'instàncies 
de la classe abstracta de l'exercici Classes & Arrow Functions N3 E1.
*/

const marvelAvengers = require('../../Entrega 1-2')
import { marvelAvengers } from '../../Entrega 1-2'
const heroCreater = require('../../Entrega 1-2')
import { heroCreater } from '../../Entrega 1-2'

describe("Creamos un nuevo objeto de la clase marvelAvengers", () => {
    const thor = new heroCreater();


    test("definir método displayName()", () => {   // https://dev.to/dstrekelj/how-to-test-classes-with-jest-jif   
                                                 
        expect(typeof thor.displayName).toBe("function")
    })
})


test("displayName() devuelve undefined cuando es llamada sin pasar parámetros cuando hemos instanciado thor", () => {
    expect(thor.displayName()).toBeUndefined()
})


describe("Creamos el segundo nuevo objeto de la clase marvelAvengers", () => {
    const ironman = new heroCreater('Ironman');

    test("displayName() devuelve el nombre del héroe cuando es llamada  pasando parámetros al instanciar ironman", () => {
        expect(ironman.displayName()).toBe('Ironman')
    })
})