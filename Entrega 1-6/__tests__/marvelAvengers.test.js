/*
Verifica mitjançant tests la creació d'instàncies 
de la classe abstracta de l'exercici Classes & Arrow Functions N3 E1.
*/

const {MarvelAvengers, heroCreater} = require('../app/marvelAvengers')


describe("Marvel Avengers", () => {
    const avenger = new MarvelAvengers('Iron Man', 'Genius', 'Mortality')
    const properties = avenger.getHeroProperties()

    test("Testear que las propiedades de la clase se retornan correctamente con el método getHeroProperties()", () => {   // https://dev.to/dstrekelj/how-to-test-classes-with-jest-jif   
        expect(properties.heroName).toEqual("Iron Man")
        expect(properties.heroSuperpower).toEqual("Genius")
        expect(properties.heroWeakness).toEqual("Mortality")                                     
    })
    
    test("Se devuelve el error previsto cuando la clase es creada sin pasar parámetros", () => {
        expect(() => new MarvelAvengers()).toThrow("Debes introducir un valor")
    })
    
    test("Si una propiedad de la clase no es un string, devuelve el mensaje previsto de error", () => {
        expect(() => new MarvelAvengers("Captain America", "Super resistance", 23)).toThrow("Las propiedades de 23 deben ser strings")
    })  
})
  
describe('heroCreater', () => {
    test('Un nuevo héroe se crea con la función heroCreater() y se muestra sus propiedades', () => {
        const consoleSpy = jest.spyOn(console, "log")
        heroCreater("Black Panther", "Super velocity", "Open spaces")
        expect(consoleSpy).toHaveBeenCalledWith({
            heroName: "Black Panther",
            heroSuperpower: "Super velocity",
            heroWeakness: "Open spaces"
        })
        consoleSpy.mockRestore()
    })

    test('Un nuevo héroe se crea con la función heroCreater() pero sin pasarle ningún parámetro, por lo tanto, un mensaje de error debe aparecer', () => {
        expect(() => heroCreater()).toThrow("Debes introducir un valor")
    })

    test("Un nuevo héroe se crea con la función heroCreater() pero pasándole un parámetro que no es string, por lo tanto, un mensaje de error debe aparecer", () => {
        expect(() => heroCreater("Thor", "God of thunder", [5])).toThrow("Las propiedades de 5 deben ser strings")
    })
  })
  