/*
Crea els tests corresponents per verificar el funcionament de l'exercici Async / Await N1 E2.
*/

const { canaryDelay } = require ('../app/canaryDelay')

test('devuelve el valor esperado', async() => {
   const result = await canaryDelay(11)
   expect(result).toBe(11)
})

test("Como consecuencia del parámetro, la promise se rechaza y da el mensaje de error por no ser un número", async() => {
   await expect(canaryDelay("hola")).rejects.toEqual('El parámetro esperado es una hora del día')
})

test("El parámetro es un número pero no entra en el rango de las 24h", async() => {
   await expect(canaryDelay(33)).rejects.toEqual("La hora debe estar entre la 1h y las 24h")
})
