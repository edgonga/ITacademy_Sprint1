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

//Crear objeto person

const person = {
    
    firstName : 'Marina',
    lastName: 'Palencia'   

};

// Declarar función arrow que devuelva el objeto a 
//¿un objeto se puede imprimir tal cual?

person =
 ((agePerson) => {

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











