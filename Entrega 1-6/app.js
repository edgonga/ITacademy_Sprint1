/* 
-- Nivell 1
Crea un arxiu amb les funcions sumar, restar, multiplicar 
i dividir dos o més operands. 
Testeja la correcta execució d'aquestes funcions.
*/

// OPERATIONS

//Suma

const pibMundial = (pibEuropa, pibAmerica) => {
    if (typeof pibEuropa !== 'number' || typeof pibAmerica !== 'number') {
        return false
    }
    return pibEuropa + pibAmerica
}



//Resta

const salariFinalMes = (salariBrut, impostos) => {
    if (typeof salariBrut !== 'number' || typeof impostos !== 'number') {
        return false
    }
    return salariBrut - impostos
}



//Multiplicar

const distanciaRecorreguda = (temps, ritme) => {
    if (typeof temps !== 'number' || typeof ritme !== 'number') {
        return false
    } if (temps < 0) { // no podem trobar un temps negatius, sino estariem viatjant a travès del temps
        return false 
    }
    return temps * ritme
}


//Divisió

const rentaPerCapita = (ciutadans, rentaTotal) => {
    if (typeof ciutadans !== 'number' || typeof rentaTotal !== 'number') {
        return false
    } if (ciutadans < 1 || ciutadans % 1 != 0) { // No podem tindre decimals en els ciutadans ni ciutadans negatius
        return false 
    }
    return rentaTotal / ciutadans
}



module.exports = pibMundial
module.exports = salariFinalMes
module.exports = distanciaRecorreguda
module.exports = rentaPerCapita