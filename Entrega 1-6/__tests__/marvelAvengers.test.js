/*
Verifica mitjançant tests la creació d'instàncies 
de la classe abstracta de l'exercici Classes & Arrow Functions N3 E1.
*/

const {MarvelAvengers, heroCreater} = require('../app/marvelAvengers')


describe("Marvel Avengers", () => {
    const avengerDC = heroCreater('Iron Man', 'Genius', 'Mortality')
    const avenger = new MarvelAvengers('Iron Man', 'Genius', 'Mortality')
    const properties = avenger.getHeroProperties()

    test("Testear que las propiedades de la clase se retornan correctamente con el método getHeroProperties()", () => {   // https://dev.to/dstrekelj/how-to-test-classes-with-jest-jif   
        expect(properties.heroName).toEqual("Iron Man")
        expect(properties.heroSuperpower).toEqual("Genius")
        expect(properties.heroWeakness).toEqual("Mortality")                                     
    })
})


// test("displayName() devuelve undefined cuando es llamada sin pasar parámetros cuando hemos instanciado thor", () => {
//     expect(thor.displayName()).toBeUndefined()
// })


// describe("Creamos el segundo nuevo objeto de la clase marvelAvengers", () => {
//     const ironman = new heroCreater('Ironman');

//     test("displayName() devuelve el nombre del héroe cuando es llamada  pasando parámetros al instanciar ironman", () => {
//         expect(ironman.displayName()).toBe('Ironman')
//     })
// })