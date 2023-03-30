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

const ageName = (name) => {

    return { name };

};

ageName("Ernesto")


/*
-- Nivell 2
- Exercici 2
Crea una classe "Persona" que rebi un paràmetre
'nom' en ser instanciada. La classe inclourà un mètode 
dirNom que imprimeixi per consola el paràmetre 'nom'.
Invoca el mètode dirNom des de fora de la classe.
*/
class FootballPlayer {
    constructor(tshirtName) {
        this.tshirtName = tshirtName;
    }
    dirNom() {
        return console.log(this.tshirtName)
    }
}

let robertLewandowski = new FootballPlayer('Lewandowski');
robertLewandowski.dirNom();

/*
-- Nivell 3
- Exercici 1
Escriu una function creadora d'objectes que faci 
instàncies d'una classe abstracta. Invoca-la amb diferents definicions.
*/

class MarvelAvengers {

    _name
    _superpower
    _weakness

    constructor(name, superpower, weakness) {
        this._name = this._stringValidate(name)
        this._superpower = this._stringValidate(superpower)
        this._weakness = this._stringValidate(weakness)
    }

    _stringValidate(propertyValue) {
        if (!propertyValue) {
            throw Error('Debes introducir un valor')
        }
        if (!typeof (propertyValue) === "string") {
            throw Error(`Las propiedades de ${propertyValue} deben ser strings`)
        }
        return propertyValue
    }

    get name() {
        return this._name
    }

    get superpower() {
        return this._superpower
    }

    get weakness() {
        return this._weakness
    }

    getHeroProperties() {
        throw new Error('El método getHeroProperties() debe ser implementado para crear un objeto')
    }
}

class DCHeroes extends MarvelAvengers {
    constructor(name, superpower, weakness) {
        super(name, superpower, weakness)
    }

    getHeroProperties() {
        return {
            heroName: this.name,
            heroSuperpower: this.superpower,
            heroWeakness: this.weakness
        }
    }
}

function heroCreater(newHeroName, newHeroSuperpower, newHeroWeakness) {
    const avenger = new MarvelAvengers(newHeroName, newHeroSuperpower, newHeroWeakness)
    return console.log(avenger.getHeroProperties())
}

const batman = new DCHeroes("Batman", "Intelligence and Technology", "Sunlight")
console.log(batman.getHeroProperties())

heroCreater("Spiderman", "Spider abilities", "no buildings") // Nos lanza el error esperado


