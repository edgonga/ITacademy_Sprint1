##Logística i ubicació

El nivell 1 es divideix en 4 punts

En el primer punt, les funcions a testejar seran creades en l'arxiu **"app.js"** sota l'apartat de **OPERATIONS** (sumar, resta, divisió i multiplicació) 
per després testejar-les al arxiu **"operations.test.js"**

Mentres que, pels següents punts, cada funció tindrà un arxiu únic per testejar.
Es a dir, la funció **ganadorLoteria** tindrà un arxiu **"ganadorLoteria.test.js"** per implementar el test, com també ho tindrà la funció getSalary amb l'arxiu **"getSalary.test.js"**



##Unit tests notes

--> laVidaEsUnaBambola

**min_number** 
és un número enter positiu
false si li passem un string

**max_number** 
és un número enter positiu
false si li passem un string
false si li passem un número més petit que max_number


**jour** 
és una data
false si li passem un string

**dia** 
és una data
false si li passem un string


--> ganadorLoteria

**dayOfTheWeek** 
ha de ser un número entre 0 i 6 (diumenge es representat en 0)
false si li passem un 7

**numGanador** 
és un número enter positiu
true si li passem un string que sigui un número
false si li passem un string que no sigui un número (Regular expressions)


--> getEmployee

**employeeID**
és un número entre 1 i 3
false si li passem 4 o més gran
false si li passem 0 o més petit
false si li passem un string
false si li passem 1.5


--> getSalary

**employeeResult**
és un número entre 1 i 3
false si li passem 4 o més gran
false si li passem 0 o més petit
false si li passem un string
false si li passem 1.5


