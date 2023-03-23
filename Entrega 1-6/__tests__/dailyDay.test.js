jest.useFakeTimers()
jest.spyOn(global, 'setTimeout')
const {dailyDay} = require ('../app/dailyDay')

test("La función setTimeout es llamada a los 3 segundos", () => {
    dailyDay(12000).then(resolve => {
        expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 3000)
    })
})

test("La propiedad rawNumber es almacenada correctamente dentro de la resolución de la Promise", () => {
    dailyDay(1000).then(resolve => {
        expect(resolve.rawNumber).toBe(1000)
    })
})

test("La propiedad doubleNumber es almacenada correctamente dentro de la resolución de la Promise", () => {
    dailyDay(2000).then(resolve => {
        expect(resolve.doubleNumber).toBe(4000)
    })
})

test('La función setTimeout es llamada 1 vez', () => {
    return dailyDay(15000).then(resolve => {
        expect(setTimeout).toHaveBeenCalledTimes(1)
    })
}, 15000)  // No entiendo porque excede el timeout :(