const {whatTimeIs} = require('../app/whatTimeIs')
jest.useFakeTimers();

// test('devuelve el valor esperado', async() => {
//     await whatTimeIs(11).then(res => {
//         expect(res).toBe("En la Peninsula son las 11")
//     })

// })

test('devuelve el valor esperado', async() => {
    await expect(whatTimeIs(11)).toBe("En la Peninsula son las 11")

})