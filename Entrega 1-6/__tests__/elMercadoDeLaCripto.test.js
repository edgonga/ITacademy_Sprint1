/*
Verifica mitjançant tests l'execució de l'exercici
 Async / Await N2 E1 utilitzant Jest Fake Timers.
*/

const elMercadoDeLaCripto = require('../../Entrega 1-4')

jest.useFakeTimers();
jest.spyOn(global, 'setTimeout')

test('tenint en compte el timeout de 2 segons, la funció s executa', () => {
    elMercadoDeLaCripto(15000);
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 2000)
 })