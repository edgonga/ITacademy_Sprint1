/*
-- Nivell 1
- Exercici 1
Crea una funció que, en executar-la, escrigui una frase en un fitxer.
*/

const { read } = require('fs');

const fs = require('fs');
const { stdout } = require('process');

const createAndWriteAFile = (fileToWrite, freeText) => {
    fs.writeFile(fileToWrite, freeText, function (err) {
        if (err) return console.log(err);
        console.log('Proceso sin errores');
})};

createAndWriteAFile('helloworld.txt', 'Pokemons')


/*
-- Nivell 1
- Exercici 2
Crea una altra funció que mostri 
per consola el contingut del fitxer de l'exercici anterior.
*/

const readPreviousFile = (fileToRead) => {
    fs.readFile(fileToRead, 'utf8', (err, dataInsideTheFile) => {
        if (err) {
            console.log(err)
            return;    
        }
        console.log(dataInsideTheFile)
    })
}

readPreviousFile('./helloworld.txt');


/*
-- Nivell 1
- Exercici 3
Crea una funció que comprimeixi el fitxer del nivell 1.
*/

const compressFunction = function compress(stringDocToCompress) {
    const zlib = require('zlib')
    const gzip = zlib.createGzip()
    const inputFile = fs.createReadStream(stringDocToCompress)
    const outputFile = fs.createWriteStream('helloworld.txt.gz')
    inputFile.pipe(gzip).pipe(outputFile)
}

compressFunction('helloworld.txt')

/*
-- Nivell 2
- Exercici 1
Crea una funció que imprimeixi 
recursivament un missatge per la consola amb demores d'un segon.
*/



const contandoOvejasParaDormir = (numeroDeCabras, isSleep) =>{
    var dormido = isSleep
    if(dormido === true){
        
    }
    setTimeout(() => {
        console.log(numeroDeCabras)
        contandoOvejasParaDormir(numeroDeCabras + 1)}, 1000)
}

contandoOvejasParaDormir(1, true)


/*
-- Nivell 2
- Exercici 2
Crea una funció que llisti per la consola el contingut del directori 
d'usuari/ària de l'ordinador utilizant Node Child Processes.
*/


// Con "ls" no funciona!!!

accessDirOS = () => { 
    const { exec } = require('child_process')
    const os = require('os')
    userDirectory = os.homedir()
        if (process.env.OS.includes("Windows")) {
        exec(`dir ${userDirectory}`, (error, stdout, stderr) => {
                if(error) {
                    console.log(error)
                }
                console.log(stdout)
            })
        } 
        if (process.env.OS.includes("Mac")) {
            exec(`${userDirectory} ls`, (error, stdout, stderr) => {
                if(error) {
                    console.log(error)
                }
                console.log(stdout)
            })
        }  
    }

accessDirOS()


/*
-- Nivell 3
Crea una funció que creï dos fitxers codificats en hexadecimal 
i en base64 respectivament, a partir del fitxer del nivell 1.
*/

//const { read } = require('fs');
//const fs = require('fs');

fileEncoder = (fileToBase64) => {
    
    const InputDataInsideTheFile = fs.readFileSync(fileToBase64, 'utf8')
    console.log(`El string sin codificar es ${InputDataInsideTheFile}`)
    const buff = new Buffer.from(InputDataInsideTheFile)
    const base64file = buff.toString('base64')
    const outputText = setTimeout(() => {fs.readFileSync(fileToBase64, 'utf8')}, 2000)
    //const outputText = setTimeout(() => {fs.writeFileSync(fileToBase64, base64file)}, 2000) // Así es como estaba antes
    console.log(`El string codificado es ${outputText}`)
    
}

setTimeout(() => {fileEncoder('./helloworld.txt')}, 1000)

/* 
------Chunks------
1ro - Coger el texto actual que hay en el archivo en cuestión (helloworld.txt)
2do - Codificar ese texto a base64 (y más tarde a hex)
3ro - Escribir el texto codificado otra vez al archivo en cuestión (helloworld.txt) 
*/
