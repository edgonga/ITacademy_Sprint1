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
    test("Cuando se produce un error en la callback, ésta es llamada el número de veces correcto", async() => {
        const mockedCallback = jest.fn().mockRejectedValue("Parámetro no númerico")
        await sumOfDoubles(1, 2, 4, mockedCallback)
        expect(mockedCallback).toHaveBeenCalledTimes(1)
    })

    test("Cuando se produce un error en la callback, el console.log() del catch recibe el mensaje correcto", async() => {
        const mockedCallback = jest.fn().mockRejectedValue("Mensaje de error")
        const consoleSpy = jest.spyOn(console, "log")
        await sumOfDoubles(1, 2, 3, mockedCallback)
        expect(consoleSpy).toHaveBeenCalledWith("Mensaje de error")
        consoleSpy.mockRestore()
    })

    test("Recibe un parámetro que no es númerico", async() => {
        const mockedCallback = jest.fn().mockResolvedValue({rawNumber: 1, doubleNumber: 2})
        const consoleSpy = jest.spyOn(console, "log")
        await sumOfDoubles(1, "dos", 4, mockedCallback)
        expect(consoleSpy).toHaveBeenCalledWith(Error("No númericos"))
        consoleSpy.mockRestore()
    })
})




