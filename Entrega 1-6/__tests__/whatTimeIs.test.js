const { whatTimeIs } = require("../app/whatTimeIs")

describe("whatTimeIs function", () => {
  test("Para Península devuelve el valor correcto llamando a la función console.log", async () => {
    const consoleSpy = jest.spyOn(console, "log");
    const mockCallback = jest.fn().mockReturnValue(12)
    await whatTimeIs(12, mockCallback);
    expect(mockCallback).toHaveBeenCalledWith(12);
    consoleSpy.mockRestore();
  });

  test("Para Canarías devuelve el valor correcto llamando a la función console.log", async () => {
    const consoleSpy = jest.spyOn(console, "log");
    const mockCallback = jest.fn().mockReturnValue(12);
    await whatTimeIs(12, mockCallback);
    //expect(mockCallback).toHaveBeenCalledWith(11);
    expect(mockCallback).toHaveBeenLastCalledWith(11)
    consoleSpy.mockRestore();
  });


  test("El valor que retorna es el correcto para Peninsula", async () => {
    const consoleSpy = jest.spyOn(console, "log");
    const mockCallback = jest.fn().mockReturnValue(12);
    await whatTimeIs(12, mockCallback);
    expect(consoleSpy).toHaveBeenCalledWith("En la Peninsula son las 12h");
    consoleSpy.mockRestore();
  });

  test("El valor que retorna es el correcto para Canarías", async () => {
    const consoleSpy = jest.spyOn(console, "log");
    const mockCallback = jest.fn().mockReturnValue(12);
    await whatTimeIs(12, mockCallback);
    expect(consoleSpy).toHaveBeenLastCalledWith("Mientras que en las Canarias son las 11h")
    // Como sucede en elMercadoDeLaCripto.test.js la segunda llamada a dailyDay no se está calculando el doble del parámetro
    consoleSpy.mockRestore();
  });
  

  test("Introduciendo una hora fuera de rango, se hace una llamada a console.log con el string correcto", async () => {
    const consoleSpy = jest.spyOn(console, "log");
    const mockCallback = jest.fn().mockRejectedValue("La hora debe estar entre la 1h y las 24h");
    await whatTimeIs(25, mockCallback);
    expect(mockCallback).toHaveBeenCalledWith(25);
    consoleSpy.mockRestore();
  });

  test("Introduciendo una hora fuera de rango, se devuelve el valor correcto", async () => {
    const consoleSpy = jest.spyOn(console, "log");
    const mockCallback = jest.fn().mockRejectedValue("La hora debe estar entre la 1h y las 24h");
    await whatTimeIs(25, mockCallback);;
    expect(consoleSpy).toHaveBeenCalledWith("La hora debe estar entre la 1h y las 24h");
    consoleSpy.mockRestore();
  });

});
