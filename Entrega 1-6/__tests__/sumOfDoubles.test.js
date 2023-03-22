const {dailyDay, sumOfDoubles} = require ('../app/sumOfDoubles')

describe("dailyDay", () => {
    test("dailyDay almacena correctamente el error cuando se le pasa un número como se espera", async () => {
        try {
            await dailyDay(3)
        } catch (error) {
            expect(error).toBe('El bitcoin es una estafa piramidal')
        }
    })
    
    test("Introducimos parámetros que no son númericos, un string", async () => {
        expect.assertions(1)
        return dailyDay('hola')
            .catch(error => {
                expect(error).toEqual("El bitcoin es una estafa piramidal")
            })
    })

    test("Introducimos parámetros que no son númericos, un booleano", async() => {
        const bitcoin = false
        await expect(dailyDay(bitcoin)).rejects.toBe("El bitcoin es una estafa piramidal")
            
    })

    test("Introducimos parámetros que no son númericos, un undefinded", async() => {
        await expect(dailyDay(undefined)).rejects.toBe("El bitcoin es una estafa piramidal")
    })
})

describe("sumOfDoubles", () => {
    test("Introducimos parámetros que no son númericos", async () => {
        await expect(sumOfDoubles(2, "3", 5, dailyDay)).rejects.toBe("El bitcoin es una estafa piramidal")
    }, 10000)
})




