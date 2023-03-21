/*
Crea un mock que comprovi les crides al constructor de la classe Persona
 i al seu mètode. dirNom() en l'exercici Classes & Arrow Functions - N2 E2 i testeja que funcionen.
*/

jest.mock('../app/FootballPlayer')  // IMPORTANTE, para testear clases, se debe poner la ruta dónde esa clase es definida
                                    // De esta manera, todo lo que sea FootballPlayer, ya será mockeado
                                    // Por lo tanto, no tendremos que convertir a mock la clase FootballPlayer ni su método
                                    // No hacer FootballPlayer = jest.fn() ni FootballPlayer.dirNom = jest.fn()

const {FootballPlayer} = require('../app/FootballPlayer')

test("Se vuelve a crear otro objeto y se mira que la llamada al método dirNom() se haga correctamente", () => {                  
    const player = new FootballPlayer("Ronaldo")
    const mockedDirNom = jest.spyOn(player, "dirNom").mockImplementation(() => 'Mocked Name')
    expect(player.dirNom("CR7")).toBe('Mocked Name')
    expect(mockedDirNom).toHaveBeenCalled()
    mockedDirNom.mockRestore()
    FootballPlayer.mockRestore()
})

test('Vamos a comprobar si la instancia rogerFederer, llama a la clase constructora footballPlayer', () => {
    new FootballPlayer('Roger Federer');
    expect(FootballPlayer).toHaveBeenCalledTimes(1)
    
})

test('Ver que el mockRestore funciona correctamente y la clase aún no ha sido llamada', () => {
    FootballPlayer.mockRestore()
    expect(FootballPlayer).not.toHaveBeenCalled();
})

test("Vamos a comprobar si se llama al método dirNom() con el parámetro correspondiente", () => {
    const player = new FootballPlayer('Arbeloa')
    player.dirNom("Arbeloa")
    expect(player.dirNom).toHaveBeenCalledWith('Arbeloa')
    expect(player.dirNom).toHaveBeenCalledTimes(1)
})