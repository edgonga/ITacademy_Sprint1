jest.useFakeTimers()
jest.spyOn(global, 'setTimeout')

test('se espera 3 segundos antes de resolver la Promise', () => {
    const {dailyDay} = require ('../app/dailyDay')
    return dailyDay(15000).then(resolve => {
        expect(setTimeout).toHaveBeenCalledTimes(1)
        expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 3000)
        expect(resolve.rawNumber).toBe(15000)
        expect(resolve.doubleNumber).toBe(30000)
    })
}, 20000)