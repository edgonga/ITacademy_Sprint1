/*
-- Nivell 1
- Exercici 1
Crea una funció que, en executar-la, escrigui una frase en un fitxer.
*/

const { read } = require('fs');

const fs = require('fs');
const { ReturnDocument } = require('mongodb');
const { stdout } = require('process');
const createAndWriteAFile = (freeText) => {
    fs.writeFile('helloworld.txt', freeText, function (err) {
        if (err) return console.log(err);
        console.log('Proceso sin errores');
})};

createAndWriteAFile('Pokemons')


/*
-- Nivell 1
- Exercici 2
Crea una altra funció que mostri 
per consola el contingut del fitxer de l'exercici anterior.
*/

const readPreviousFile = () => {
    fs.readFile('./helloworld.txt', 'utf8', (err, dataInsideTheFile) => {
        if (err) {
            console.log(err)
            return;    
        }
        console.log(dataInsideTheFile)
    })
}

readPreviousFile();


/*
-- Nivell 1
- Exercici 3
Crea una funció que comprimeixi el fitxer del nivell 1.
*/

const zlib = require('zlib')
const gzip = zlib.createGzip()
const inputFile = fs.createReadStream('helloworld.txt')
const outputFile = fs.createWriteStream('helloworld.txt.gz')
inputFile.pipe(gzip).pipe(outputFile)



/*
-- Nivell 2
- Exercici 1
Crea una funció que imprimeixi 
recursivament un missatge per la consola amb demores d'un segon.
*/

var dormido = true

const contandoOvejasParaDormir = (numeroDeCabras) =>{
    if(dormido == true){
        return;
    }
    setTimeout(() => {
        console.log(numeroDeCabras)
        contandoOvejasParaDormir(numeroDeCabras + 1)}, 1000)



}

contandoOvejasParaDormir(1)


/*
-- Nivell 2
- Exercici 2
Crea una funció que llisti per la consola el contingut del directori 
d'usuari/ària de l'ordinador utilizant Node Child Processes.
*/


// Con "ls" no funciona!!!

const { exec } = require('child_process')
exec('dir', (error, stdout, stderr) => {
    if(error) {
        console.log(error)
    }
    console.log(stdout)
})
