Primero de todo, puede ser que haya algún problema con inicializar el proyecto. Teóricamente, está solucionado, pero antes me daba algunos problemas

En el repositorio hay una carpeta "Entrega 1-6" donde encontrarás todos los testings. A continuación te hago un índice para que te sea más fácil corregir e identificar cada ejercicio:


- Nivel 1:

operations.test.js --> sumar, restar, dividir, multiplicar
callbackFunction.test.js & implementCallback.test.js --> Promises i Callbacks N1 E2.
getEmployee.test.js & getSalary.test.js --> Promises i Callbacks N2 E1 i Promises i Callbacks N2 E2
canaryDelay.test.js & whatTimeIs.test.js --> Async / Await N1 E2.



- Nivel 2:

dailyDay.test.js & elMercadoDeLaCripto.test.js --> Async / Await N2 E1 (Fake Timers) La última prueba unitaria de dailyDay me excede el timeout y no entiendo porque. Y para elMercadoDeLaCripto también hay problemillas explicado en comentario en el mismo código
footballPlayer.test.js --> Classes & Arrow Functions - N2 E2
marvelAvengers.test.js --> Classes & Arrow Functions N3 E1


- Nivel 3:

getEmployeeJSON.js & getSalaryJSON.js --> Le he dado un intento pero no me ha acabado de salir
sumOfDoubles.test.js --> Async / Await (forzar errores). Además de las pruebas a la función sumOfDoubles, también encontrarás pruebas para la función dailyDay. A priori, todas las pruebas planteadas pasan el test, sin embargo, al ejecutar jest me sale un mensaje de aviso en amarillo que refiere que hay una función asíncrona que no se ha parado. No entiendo bien como hacerlo, ya que, en el código, ya específico con async y await que se debe esperar
