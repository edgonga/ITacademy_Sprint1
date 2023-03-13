/*
-- Nivell 1
- Exercici 1
Mostra per la consola el resultat 
d'una arrow function autoinvocable que sumi dos nombres.
*/




console.log(

    ((num1, num2) => {
        return num1 + num2;
    })(25, 21)

)



/*
-- Nivell 2
- Exercici 1
Crea una arrow function que, rebent un paràmetre, retorni 
un objecte amb un atribut que tingui com a valor el paràmetre rebut.
*/



const person = {
    
    firstName : 'Marina',
    lastName: 'Palencia',
    age: 24  

};

// Declarar función arrow que devuelva el objeto a 
//¿un objeto se puede imprimir tal cual?

const agePerson = (personObj) => {

    return console.log(personObj.age);

}; 

agePerson(person)


/*
-- Nivell 2
- Exercici 2
Crea una classe "Persona" que rebi un paràmetre
'nom' en ser instanciada. La classe inclourà un mètode 
dirNom que imprimeixi per consola el paràmetre 'nom'.
Invoca el mètode dirNom des de fora de la classe.
*/




class footballPlayer {
    constructor(tshirtName) {
        this.tshirtName = tshirtName;
        
    }

    dirNom() {
            
        return console.log(this.tshirtName)
            
            
    }
    
}

let robertLewandowski = new footballPlayer('Lewandowski');
robertLewandowski.dirNom();



/*
-- Nivell 3
- Exercici 1
Escriu una function creadora d'objectes que faci 
instàncies d'una classe abstracta. Invoca-la amb diferents definicions.
*/

class marvelAvengers {

    #name
    #superpower
    #weakness

    constructor(name, superpower, weakness) {
        this.#name = this.#stringValidate(name)
        this.#superpower = this.#stringValidate(superpower)
        this.#weakness = this.#stringValidate(weakness)
    }

    #stringValidate(propertyValue) {
        if(!propertyValue) {
            throw Error('Debes introducir un valor')
        }  
        if(!typeof(propertyValue) === "string") {
            throw Error (`Las propiedades de ${propertyValue} deben ser strings`)
        }
        return propertyValue
    }

    getHeroProperties() {
        return {
            heroName: this.#name,
            heroSuperpower: this.#superpower,
            heroWeakness: this.#weakness
        }
    }
}

function heroCreater(newHeroName, newHeroSuperpower, newHeroWeakness) {
    const avenger = new marvelAvengers(newHeroName, newHeroSuperpower, newHeroWeakness)
    return console.log(avenger.getHeroProperties())
}

heroCreater("Spiderman", "Spider abilities", "no buildings")
heroCreater("Thor", "God of thunder", "beer")



