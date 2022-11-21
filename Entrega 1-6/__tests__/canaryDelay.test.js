/*
Crea els tests corresponents per verificar el funcionament de l'exercici Async / Await N1 E2.
*/



const canaryDelay = require('../../Entrega 1-4')
const whatTimeIs = require('../../Entrega 1-4')


test('la funció retorna els strings correctament', async () => {
    const data = await whatTimeIs(13);
    expect(data).toBe('En la Peninsula son las 13h') &&
    expect(data).toBe('Mientras que en las Canarias son las 12h')
 })


 test('la funció retorna missatge de error quan introduïm paràmetres fora de les hores del dia 1h a 24h', async () => {
    const data = await whatTimeIs(25);
    expect(data).toBe("La hora debe estar entre la 1h y las 24h")
 })

 
 //Mismo unit test que la anterior pero con diferente sintaxis
 test('la funció retorna missatge de error quan introduïm paràmetres fora de les hores del dia 1h a 24h', async () => {
    await expect(whatTimeIs(25)).rejects.toMatch('error');
  });


  test('la funció retorna missatge de error quan introduïm algo que no sigui number', async () => {
    const data = await whatTimeIs('Murcia');
    expect(data).toBe("La hora debe estar entre la 1h y las 24h")
 })

 
 //Mismo unit test que la anterior pero con diferente sintaxis
 test('la funció retorna missatge de error quan introduïm algo que no sigui number', async () => {
    await expect(whatTimeIs('Murcia')).rejects.toMatch('error');
  });