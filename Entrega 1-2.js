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

const x = (a) => {

    console.log(a);
    return a;

}('Marina'); 