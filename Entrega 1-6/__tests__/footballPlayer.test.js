/*
Crea un mock que comprovi les crides al constructor de la classe Persona
 i al seu mètode. dirNom() en l'exercici Classes & Arrow Functions - N2 E2 i testeja que funcionen.
*/


const footballPlayer = require('../../Entrega 1-2')
import { ExplainVerbosity } from 'mongodb'
import { footballPlayer } from '../../Entrega 1-2'


jest.mock('../../Entrega 1-2')

beforeEach(() => {   // Según documentación, sirve para limpiar todas las llamadas al constructor y métodos
    footballPlayer.mockClear()
})


it('Vamos a comprobar si la instancia rogerFederer, llama a la clase constructora footballPlayer', () => {
    const rogerFederer = new footballPlayer('Roger Federer');
    expect(footballPlayer).toHaveBeenCalledTimes(1);
})

it("Vamos a comprobar si el constructor llama al método dirNom()", () => {
    // En este punto, el mockClear habrá limpiado la llamada al método dirNom() que hemos hecho en el 1.2
    expect(footballPlayer).not.toHaveBeenCalled();

    rogerFederer.dirNom();
    
    const mockFootballPlayer = footballPlayer.mock.instances[0]
    const mockTshirtName = mockFootballPlayer.tshirtName
    expect(mockTshirtName).toHaveBeenCalledWith('Roger Federer')
    expect(mockTshirtName).toHaveBeenCalledTimes(1)
})