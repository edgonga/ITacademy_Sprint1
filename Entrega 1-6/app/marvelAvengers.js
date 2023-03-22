class MarvelAvengers {

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
        if(typeof(propertyValue) !== "string") {
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
    const avenger = new MarvelAvengers(newHeroName, newHeroSuperpower, newHeroWeakness)
    return console.log(avenger.getHeroProperties())
}

module.exports = {
    MarvelAvengers,
    heroCreater
}