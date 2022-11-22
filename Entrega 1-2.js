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
    lastName: 'Palencia'   

};

// Declarar función arrow que devuelva el objeto a 
//¿un objeto se puede imprimir tal cual?

person ((agePerson) => {

    person.age = agePerson
    console.log(person.age);
    

})(24); 


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

function marvelAvengers () {

    
    this.heroName = "Superman"
    if (this.constructor == marvelAvengers) {
        throw new Error('Este héroe es de DC Comics')
    }
}



marvelAvengers.prototype.displayName = function() { 
return "El nuevo héroe se llama " + this.heroName
}

function heroCreater(newHeroName) {
this.heroName=newHeroName
}

heroCreater.prototype = Object.create(marvelAvengers.prototype)

var hulk = new heroCreater("El increíble Hulk")
console.log(hulk.displayName())


module.exports = footballPlayer
export {footballPlayer}
module.exports = marvelAvengers
export {marvelAvengers}
module.exports = heroCreater
export {heroCreater}



