// Aquest tros de codi no aplica per els exercicis de IT Academy, pero l'he guardat en aquest repositori perque em fa ilusió el funcionament d'aquesta funció.
// Intentava ser la solució al exercici 1 del nivell 1 de l'entrega 1-3 (Callbacks)


laVidaEsUnaBambola = () => {

    
    const min = 1 
    const max = 1000
    min_number = Math.ceil(min);
    max_number = Math.floor(max);
    numGanador = Math.floor(Math.random() * (max_number - min_number) + min_number);
    return numGanador
    

}

jour = new Date();
dia = jour.getDay();


ganadorLoteria = (dayOfTheWeek, sorteoCallback) => {


if (dayOfTheWeek > 0 && dayOfTheWeek < 6) {
    numGanador = sorteoCallback()
    numGanador = String(numGanador)
    console.log(`El número premiado de la loteria es el ${numGanador}`)
}   else {
    console.log('Hoy es fin de semana, hoy no hay sorteo')
}
}

ganadorLoteria(dia, laVidaEsUnaBambola)